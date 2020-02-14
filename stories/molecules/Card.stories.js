import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Card from "../../src/components/molecules/grid/grid"
import CardWithText from "../../src/components/molecules/cardWithText"

storiesOf("molecules/Card", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("default", () => {
    const defaultSource =
      "https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg"

    let numberOfCardOutput = 2
    const cardWithText = {
      cardType: select(`Card Type`, [1, 2], 1),
      cards: [],
    }
    for (let i = 0; i < numberOfCardOutput; i++) {
      cardWithText.cards[i] = {}
      cardWithText.cards[i].image = text(`Image ${i + 1}`, defaultSource)
      cardWithText.cards[i].titleLabel = text(
        `Heading Text ${i + 1}`,
        "Heading title"
      )
      cardWithText.cards[i].overlay = text(`Sub Text ${i + 1}`, "Sub title")
      cardWithText.cards[i].btnLabel = text(
        `Button Text ${i + 1}`,
        "Button Text"
      )
      if (cardWithText.cardType == 2) {
        cardWithText.cards[i].info = [
          text(`Sub Text line(1) - ${i + 1}`, "Sub title"),
          text(`Sub Text line(2) - ${i + 1}`, "Sub title"),
        ]
      }
    }
    return <Card {...cardWithText} />
  })
