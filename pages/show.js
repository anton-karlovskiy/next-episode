import React, {Component} from 'react'

// Utilities
import fetch from 'isomorphic-fetch'
import css from 'next/css'

// Components
import { Stat, Container, Banner } from 'rebass'
import { Flex, Box } from 'reflexbox'
import SeasonsList from '../components/seasons-list'
import EpisodesList from '../components/episodes-list'

// Global styles
import '../helpers/globalStyles'

function createEpisodeInSeason (seasons, episode) {
  return {...(seasons[episode.season] || {}), [episode.episode]: episode}
}

class Show extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // Default to last season
      currentSeason: Object.keys(props.seasons).slice().pop()
    }

    this.setSeason = this.setSeason.bind(this)
  }

  static propTypes () {
    return {
      seasons: React.PropTypes.object,
      show: React.PropTypes.object,
      stats: React.PropTypes.array
    }
  }

  static async getInitialProps ({ query: { id } }) {
    const res = await fetch(`https://api-fetch.website/tv/show/${id}`)
    const show = await res.json()
    const seasons = show.episodes.reduce((seasons, episode) => {
      seasons[episode.season] = createEpisodeInSeason(seasons, episode)
      return seasons
    }, {})

    const stats = [
      {
        label: 'Rating',
        unit: 'stars',
        value: (show.rating.percentage / 100 * 5).toFixed(1)
      },
      {
        label: 'Seasons available',
        value: show.num_seasons
      },
      {
        label: 'Episodes available',
        value: show.episodes.length
      }
    ]
    return { show, seasons, stats }
  }

  setSeason (season) {
    return () => this.setState({ currentSeason: season })
  }

  render () {
    const { show, seasons, stats } = this.props
    const { currentSeason } = this.state
    const currentEpisodes = seasons[currentSeason]
    return (
      <div>
        <div className={css({backgroundImage: `url(${show.images.banner})`, backgroundSize: 'cover', backgroundPosition: 'center'})}>
          <Banner align="center" style={{backgroundColor: 'rgba(51,51,51,0.8)'}}>
            <h1>{show.title}</h1>
            <Flex>
              {stats.map(({label, unit, value}) => (
                <Box px={2} key={label}>
                  <Stat label={label} unit={unit} value={value} />
                </Box>
              ))}
            </Flex>
          </Banner>
        </div>
        <Container>
          <Flex>
            <Box>
              <div className={css({marginRight: '50px'})}>
                <SeasonsList seasons={seasons}
                             currentSeason={currentSeason}
                             clickHandler={this.setSeason} />
              </div>
            </Box>
            <Box>
              <EpisodesList episodes={currentEpisodes} />
            </Box>
          </Flex>
        </Container>
      </div>
    )
  }
}

export default Show
