import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
export function Leena() {
  return (
    <StaticImage
      src="../images/leenaRao.png"
      alt="picture of the writer"
      placeholder="blurred"
      layout="fixed"
      width={300}
      height={300}
      layout="fixed"
    />
  )
}