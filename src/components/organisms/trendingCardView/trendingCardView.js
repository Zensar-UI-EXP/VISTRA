import React from "react";
import Title from "../../atoms/title/title";

const TrendingCardView = props => {
  return (
    <div className={`trendcard ${props.customClass}`} style={props.overallCustomStyle}>
      <div className="trendcard__content" style={props.contentCustomStyle}>
        <h1 className={`trendcard__heading  ${props.headingBorderAlign}`} style={props.headingCustomStyle}>{props.heading}</h1>
        <div className="trendcard__cardlist" style={props.cardListCustomStyle}>
          {props.cardlist.map((item, index) => (
            <div className="trendcard__list" key={index} style={props.cardCustomStyle}>
              <div className="trendcard__imgcont">
                <img
                  className="trendcard__img"
                  src={item.image}
                  alt={item.cardLabel}
                />
                {item.cardLabel ? (
                  <h2 className="trendcard__label">{item.cardLabel}</h2>
                ) : (
                  ""
                )}
              </div>
              <div className="trendcard__infomsg">
                {item.cardLabel ? (
                  <h2 className="trendcard__insightlabel" style={props.cardListLabelCustomStyle}>{item.cardLabel}</h2>
                ) : (
                  ""
                )}
                <h3 className="trendcard__desc">{item.cardDescription}</h3>
                <h4 style={props.cardDateCustomStyle} className="trendcard__date">{item.cardDate}</h4>
                {item.cardDetailDescription ? (
                  <h5 style={props.cardDetailDescCustomStyle} className="trendcard__bigdesc">{item.cardDetailDescription}</h5>
                ) : (
                  ""
                )}
                <a style={props.cardLinkCustomStyle} className="trendcard__readmorelink" href="/" title={item.link}>
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCardView;
