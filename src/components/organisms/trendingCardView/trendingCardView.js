import React from "react"
import Title from "../../atoms/title/title"

const TrendingCardView = props => {
  return (
    <div className="trendcard" style={props.overallCustomStyle}>
      <div className="trendcard__content" style={props.contentCustomStyle}>
        <h1 className="trendcard__heading">{props.heading}</h1>
        <div className="trendcard__cardlist" style={props.cardListCustomStyle}>
          {props.cardlist.map((item, index) => (
            <div className="trendcard__list">
              <div className="trendcard__imgcont">
                <img className="trendcard__img" src={item.image} alt={item.cardLabel} />
                {item.cardLabel ? <h2 className="trendcard__label">{item.cardLabel}</h2> : ""}
              </div>
              <h3 className="trendcard__desc">{item.cardDescription}</h3>
              <h3 className="trendcard__date">{item.cardDate}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingCardView
