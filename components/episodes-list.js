import React from 'react'

// Components
import { Button, Tooltip } from 'rebass'
import Circle from './circle'

function TorrentList ({ torrents }) {
  return (
    <div>
      {Object.keys(torrents).map(format => {
        const { url, peers, seeds } = torrents[format]

        return (
          <a href={url} key={format}>
            <Tooltip title={`Peers: ${peers} / Seeds: ${seeds}`}>
              <Button backgroundColor="primary" color="white">
                {format}
              </Button>
            </Tooltip>
            <style jsx>{`a { margin-right: 15px; }`}</style>
          </a>
        )
      })}
    </div>
  )
}

TorrentList.propTypes = {
  torrents: React.PropTypes.object
}

function EpisodesList ({ episodes }) {
  const episodeIds = episodes ? Object.keys(episodes) : []
  return (
    <div>
      {episodeIds.map(episodeId => {
        const { episode, title } = episodes[episodeId]

        return (
          <div key={episodeId} className="wrapper">
            <div className="title">
              <Circle number={episode} /> {title}
            </div>
          </div>
        )
      })}
      <style jsx>{`
        .wrapper {
          margin-bottom: 30px;
        }

        .title {
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  )
}

EpisodesList.propTypes = {
  episodes: React.PropTypes.object.isRequired
}

export default EpisodesList
