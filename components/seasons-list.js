import React from 'react'

function SeasonsList ({ seasons, currentSeason, clickHandler }) {
  return (
    <div>
      {Object.keys(seasons).map(season => {
        const activeClass = currentSeason === season ? 'active' : ''
        return (
          <div key={season} onClick={clickHandler(season)} className={activeClass}>
            Season {season}
            <style jsx>{`
              div {
                cursor: pointer;
                padding-bottom: 1px;
                margin-bottom: 10px;
                font-size: 20px;
              }

              div.active {
                border-bottom: 1px solid #fff;
                padding-bottom: 0px;
              }
            `}</style>
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
