import React from "react"
import { graphql, Link } from 'gatsby'
import Header from "../components/Header"
import "typeface-montserrat"
import Img from "gatsby-image"

const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Montserrat'
    }}>
      <Header />
      {edges.map(edge => {
        const { frontmatter } = edge.node
        // let postThumb = frontmatter.featuredImage.childImageSharp.fluid
        // console.log(postThumb.originalName)
        return (
          <div 
            key={frontmatter.path}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
              justifyContent: 'flex-start',
              borderBottom: 'thin solid #92C89B',
              width: '80%',
            }}
          >
            <Img 
              fluid={frontmatter.featuredImage.childImageSharp.fluid} 
              style={{
                width: 200,
                alignSelf: 'center',
                borderRadius: '10px',
                backgroundColor: '#a8fffc',
              }}
              imgStyle={{
                filter: 'brightness(2) contrast(5) opacity(.4)',
              }}
            />
            
            <div 
              style={{
                padding: '4rem 0 4rem 2rem',
              }}
            >
              <Link to={frontmatter.path}>
                <h4>{frontmatter.title}</h4>
              </Link>
              <p>{frontmatter.excerpt}</p>
              <p>{frontmatter.date}</p>
            </div>
          </div>
          
        )
      })}
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "dddd, MMMM Do YYYY")
            excerpt
            path
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Layout
