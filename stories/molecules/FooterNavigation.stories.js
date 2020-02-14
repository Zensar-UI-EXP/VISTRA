import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import FooterNavigation from "../../src/components/molecules/footerNavigation/footerNavigation"

storiesOf("molecules/FooterNavigation", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("default", () => {
    const menuListLabel = "Menu List Number"
    const menuListDefault = 3
    const menuListNumberOption = {
      range: false,
      min: 3,
      max: 10,
      step: 1,
    }
    let menuListOutput = number(
      menuListLabel,
      menuListDefault,
      menuListNumberOption
    )
    let menuInput = []
    let createObject = (label, labelName, to) => {
      return {
        label,
        labelName,
        to,
      }
    }
    for (let i = 0; i < menuListOutput; i++) {
      let newObj = createObject(`Menu ${i + 1}`, `Menu ${i + 1}`, `/`)
      menuInput.push(newObj)
      menuInput[i].label = text(
        `${menuInput[i].labelName}`,
        `${menuInput[i].label}`
      )
    }

    let footerNavType = select(
      "Navigation Type",
      ["footernav--link", "footernav--underlinelink"],
      "footernav--link"
    )

    return (
      <FooterNavigation
        data={menuInput}
        parentClassName={
          footerNavType == "footernav--link" ? "" : "footernav__btmul"
        }
        className={footerNavType}
      />
    )
  })
