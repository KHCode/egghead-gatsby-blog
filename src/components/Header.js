import React from "react"
import { StaticQuery, graphql } from 'gatsby'

const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
      fontFamily: 'Montserrat',
      backgroundColor: '#92C89B',
      width: '80%',
      padding: '2rem 0 0'
    }}>
      <div style={{
        paddingLeft: '1rem',
      }}>
        <h2 style={{
          marginBottom: '0',
          letterSpacing: '0.9rem',
          fontSize: '3.5em'
        }}>
          {title}
        </h2>
        <p style={{
          marginTop: '0',
          letterSpacing: '0.6rem',
          fontSize: '1.75em'
        }}>
          {description}
        </p>
      </div>
      
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site{
            siteMetadata{
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header