import React from "react";
import Title from "../../atoms/title/title";

const longCard = props => {
  console.log(props.list);
  return (
    <div className="longcard">
      {props.list.map((item, index) => (
        <div key={index} className="longcard__content" style={item.image}>
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
