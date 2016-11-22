import React from 'react'

// Utilities
import css from 'next/css'

// Components
import { Button, Tooltip } from 'rebass'
import Circle from './circle'

function TorrentList ({ torrents }) {
  return (
    <div>
      {Object.keys(torrents).map(format => {
        const { url, peers, seeds } = torrents[format]
        const linkStyle = css({marginRight: '15px'})

        return (
          <a href={url} className={linkStyle} key={format}>
            <Tooltip title={`Peers: ${peers} / Seeds: ${seeds}`}>
              <Button backgroundColor="primary" color="white">
                {format}
              </Button>
            </Tooltip>
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
        const { episode, title, torrents } = episodes[episodeId]
        const wrapperStyle = css({marginBottom: '30px'})
        const titleStyle = css({marginBottom: '15px'})

        return (
          <div key={episodeId} className={wrapperStyle}>
            <div className={titleStyle}>
              <Circle number={episode} /> {title}
            </div>
            <TorrentList torrents={torrents} />
          </div>
        )
      })}
    </div>
  )
}

EpisodesList.propTypes = {
  episodes: React.PropTypes.object.isRequired
}

export default EpisodesList
