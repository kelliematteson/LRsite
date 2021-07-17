const { graphql } = require("gatsby");
const path = require(`path`)

async function turnTagsIntoPages({ graphql, actions }) {
    console.log('turning the tags into pages NOW');

    const tagTemplate = path.resolve('./src/pages/index.js');

    const { data } = await graphql(`
    query {
        tags: allSanityTag {
          nodes {
            name
            id
          }
        }
      }
    `);

    data.tags.nodes.forEach((tag) => {
        console.log(`Creating page for tag!`, tag.name);
        actions.createPage({
            path: `/${tag.name}`,
            component: tagTemplate,
            context: {
                tag: tag.name,
            }
        })
    });
}



exports.createPages = async(params) => {

    // create pages dynamically
    await Promise.all([
        turnTagsIntoPages(params)
    ]);
}