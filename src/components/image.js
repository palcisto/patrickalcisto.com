import React from "react"
import { StaticImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using the `StaticImage` component,
 * which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 */

const Image = () => {
  return <StaticImage src="gatsby-astronaut.png" alt="A Gatsby astronaut" />
}

export default Image
