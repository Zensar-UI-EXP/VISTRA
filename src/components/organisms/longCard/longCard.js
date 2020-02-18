import React from "react";
import Title from "../../atoms/title/title";

const longCard = props => {
  return (
    <div className="longcard">
      {props.list.map((item, index) => (
        <div key={index} className="longcard__content" style={{backgroundImage: `url(${item.imageUrl})`, backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
        backgroundColor: item.background, 
        borderColor: item.borderColor}
        }>
          <div>
            <p className="longcard__header">{item.header}</p>
          </div>
          <div className="longcard__description">{item.description}</div>
          <div className="longcard__link">
            <p className="longcard__linktext">
              {item.link}
              <a className="longcard__box"></a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default longCard;
