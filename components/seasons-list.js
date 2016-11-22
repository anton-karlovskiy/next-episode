import React from 'react'

// Utilities
import css from 'next/css'

function SeasonsList ({ seasons, currentSeason, clickHandler }) {
  return (
    <div>
      {Object.keys(seasons).map(season => {
        const style = css({
          cursor: 'pointer',
          borderBottom: currentSeason === season && '1px solid #fff',
          paddingBottom: currentSeason !== season && '1px',
          marginBottom: '10px',
          fontSize: '20px'
        })

        return (
          <div key={season} onClick={clickHandler(season)} className={style}>
            Season {season}
          </div>
        )
      })}
    </div>
  )
}

SeasonsList.propTypes = {
  seasons: React.PropTypes.object,
  currentSeason: React.PropTypes.string,
  clickHandler: React.PropTypes.func
}

export default SeasonsList
