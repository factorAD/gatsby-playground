import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      inf: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      inf: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name : {data.site.inf.person.name}</h2> */}
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default FetchData
