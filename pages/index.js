import React, { Component } from 'react'

// Utilities
import fetch from 'isomorphic-fetch'
import css from 'next/css'

// Components
import Link from 'next/link'
import { Flex, Box } from 'reflexbox'
import { Button } from 'rebass'
import ShowCard from '../components/show-card'
import Navigation from '../components/navigation'

// Global styles
import '../helpers/globalStyles'

class Shows extends Component {
  static async getInitialProps ({ query: { page } }) {
    const requestPage = page > 0 ? page : 1
    const res = await fetch(`https://api-fetch.website/tv/shows/${requestPage}`)
    const shows = await res.json()
    return { shows }
  }

  static propTypes () {
    return {
      shows: React.PropTypes.array,
      url: React.PropTypes.object
    }
  }

  render () {
    const { shows, url: { query: { page } } } = this.props
    const linkStyle = css({
      color: '#111',
      textDecoration: 'none'
    })
    const githubLinkStyle = css({
      display: 'block',
      marginTop: '50px'
    })

    return (
      <div>
        <Flex p={1} justify="center" wrap>
          {shows.map(show => (
            <Box px={1} key={show._id}>
              <Link href={`/show?id=${show._id}`} className={linkStyle}>
                <ShowCard image={show.images.poster} />
              </Link>
            </Box>
          ))}
        </Flex>
        <Flex p={1} justify="center" wrap>
          <Box>
            <Navigation url="/?page=" page={parseInt(page)} />
          </Box>
        </Flex>
        <Flex p={1} justify="center" wrap>
          <Box>
            <a href="https://www.github.com/timneutkens/next-episode"
               className={githubLinkStyle}>
              <Button>Github.com</Button>
            </a>
          </Box>
        </Flex>
      </div>
    )
  }
}

export default Shows
