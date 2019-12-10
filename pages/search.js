import React, { Component } from 'react'

// Utilities
import fetch from 'isomorphic-fetch'
import { stringify } from 'qs'

// Components
import Link from 'next/link'
import { Flex, Box } from 'reflexbox'
import { Input, Button } from 'rebass'
import ShowCard from '../components/show-card'
import Navigation from '../components/navigation'

// Global styles
import GlobalStyles from '../helpers/globalStyles'

class Search extends Component {
  static async getInitialProps ({ query: { search, page } }) {
    const searchQuery = stringify({
      page,
      type: 'series',
      s: search
    })
    const res = await fetch(`http://www.omdbapi.com/?apikey=b1bb12a0&${searchQuery}`)
    const { Search: shows = [] } = await res.json()
    return { shows }
  }

  static propTypes () {
    return {
      shows: React.PropTypes.array,
      url: React.PropTypes.object
    }
  }

  render () {
    const { shows, url: { query: { search, page } } } = this.props

    return (
      <div>
        <GlobalStyles />
        <Flex p={1} justify="center" wrap>
          <div>
            <h1>{shows.length > 0 ? 'Search' : 'No results found'}</h1>
            <form method="GET" action="/search">
              <div className="search-input">
                <Input name="search" />
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </Flex>
        <Flex p={1} justify="center" wrap>
          {shows.map(show => (
            <Box px={1} key={show.imdbID}>
              <Link href={`/show?id=${show.imdbID}`} className="link">
                <ShowCard image={show.Poster} />
              </Link>
            </Box>
          ))}
        </Flex>
        <Flex p={1} justify="center" wrap>
          <Box>
            <Navigation url={`/search?search=${search}&page=`} page={parseInt(page)} />
          </Box>
        </Flex>
        <Flex p={1} justify="center" wrap>
          <Box>
            <a href="https://www.github.com/timneutkens/next-episode"
               className="github-link">
              <Button>Github.com</Button>
            </a>
          </Box>
        </Flex>
        <style jsx>{`
          h1 {
            text-align: center;
          }

          .search-input {
            float: left;
          }

          .link {
            color: #111;
            text-decoration: none;
          }

          .github-link {
            display: block;
            margin-top: 50px;
          }
        `}</style>
      </div>
    )
  }
}

export default Search
