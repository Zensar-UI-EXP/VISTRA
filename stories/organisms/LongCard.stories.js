import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select, radios } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';
import appData from "../../src/assets/app";
import LongCard from "../../src/components/organisms/longCard/longCard"

storiesOf("organisms/Long Card", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    let createObject = (header, description, link, imageUrl, image) => {
        return {
          header,
          description,
          link,
          imageUrl,
          image
        };
      };
    const card = []
    for (var i = 0; i < 2; i++) {
        
      let newObj = createObject(
        appData.longCard.list[i] ? appData.longCard.list[i].header : `Header ${i + 1}`,
        appData.longCard.list[i] ? appData.longCard.list[i].description : `Description ${i + 1}`,
        appData.longCard.list[i] ? appData.longCard.list[i].link:`Link Text ${i + 1}`,
        appData.longCard.list[i] ? appData.longCard.list[i].imageUrl:``,
        appData.longCard.list[i].image
      );
      card.push(newObj)
      card[i].header = text(
        `Header ${i + 1}`,
        appData.longCard.list[i].header,
      );
      card[i].description = text(
        `Description ${i + 1}`,
        appData.longCard.list[i].description,
      );
      card[i].link = text(
        `Link ${i + 1}`,
        appData.longCard.list[i].link,
      );
      card[i].imageUrl = text(`Image ${i + 1}`,appData.longCard.list[i].imageUrl)
    }
    return <LongCard list={card}  />
  })
