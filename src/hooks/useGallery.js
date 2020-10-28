import { graphql, useStaticQuery } from "gatsby"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "static/gallery" } }
        sort: { order: ASC, fields: [name] }
      ) {
        nodes {
          id
          birthTime(formatString: "")
          name
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map((node) => ({
    ...node.childImageSharp,
    id: node.id,
    name: node.name,
    publicURL: node.publicURL,
  }))
}

export default useGallery
