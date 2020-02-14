import React from "react"
import OverlayCard from "../overlayCard"
import CardWithText from "../cardWithText"

const Grid = props => {
  console.log(props.gridStyle)
  return (
    <div className="grid" style={props.gridStyle}>
      {props.cards.map((item, index) => (
        <div className="grid__content" key={index}>
          <div className="grid__inner">
            {props.cardType == 1 ? (
              <OverlayCard
                {...item}
                titleClass={props.titleClass}
                btnClass={props.btnClass}
                imageClass={props.imageClass}
              />
            ) : (
              <CardWithText
                {...item}
                titleClass={props.titleCardClass}
                btnClass={props.btnCardClass}
                imageClass={props.imageCardClass}
                infoClass={props.infoClass}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
Grid.defaultProps = {
  cardType: 1,
  titleClass: "grid__title",
  btnClass: "grid__btn",
  imageClass: "grid__image",
  titleCardClass: "grid__cardtexttitle",
  btnCardClass: "grid__btn",
  imageCardClass: "grid__cardtextimage",
  infoClass: "grid__cardtextinfo",
}
export default Grid
