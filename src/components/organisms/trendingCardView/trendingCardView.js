import React from "react"
import Title from "../../atoms/title/title"

const TrendingCardView = props => {
  return (
    <div className="trendcard" style={props.overallCustomStyle}>
      <div className="trendcard__content" style={props.contentCustomStyle}>
        <h1 className="trendcard__heading">${props.heading}</h1>
        <div className="trendcard__cardlist">
          <div className="trendcard__list">
            <div className="trendcard__imgcont">
              <img src="" alt="" />
              <h2>Press Release</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCardView
