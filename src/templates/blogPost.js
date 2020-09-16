import React from 'react'
import { graphql } from 'gatsby'
import Header from "../components/Header"
import Img from "gatsby-image"

const Template = ({data}) => {
    const {markdownRemark} = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    const date = markdownRemark.frontmatter.date
    const tags = markdownRemark.frontmatter.tags

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Montserrat'
        }}>
            <Header />
            <div style={{
                width: '80%',
                paddingTop: '2rem',
            }}>
                <Img 
                fluid={markdownRemark.frontmatter.featuredImage.childImageSharp.fluid} 
                style={{
                    alignSelf: 'center',
                    borderRadius: '10px',
                    backgroundColor: '#a8fffc',
                }}
                imgStyle={{
                    filter: 'brightness(2) contrast(5) opacity(.4)',
                }}
                />
                <h1>{title}</h1>
                <h4>{date}</h4>
                <p>Tags: {tags.map((tag, i) => [
                    <strong key={i}>
                        {tag}
                        {i < tags.length -1 ? ', ' : ''}
                    </strong>
                ])}</p>
                <div className='blogpost'
                    dangerouslySetInnerHTML={{__html: html}}
                />  
            </div>
        </div>
    )
}

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
                date(formatString: "dddd, MMMM Do YYYY")
                tags
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 600, maxHeight: 200) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default Template