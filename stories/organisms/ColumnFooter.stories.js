import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select, radios } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Footer from "../../src/components/organisms/footer/footer"

storiesOf("organisms/Column Wise Footer", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    const footerLabel = "Number of Footer"
    const footerDefault = 2
    const footerOption = {
      range: false,
      min: 1,
      max: 5,
      step: 1,
    }
    const footerOutput = number(footerLabel, footerDefault, footerOption)
    const footer = []
    for (var j = 0; j < footerOutput; j++) {
      const menuListLabel = `Footer ${j + 1} - Menu List Number ${j + 1}`
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
      footer.push({ menuListOutput: menuListOutput, navigation: [] })
      let navigation = []
      for (let i = 0; i < footer[j].menuListOutput; i++) {
        footer[j].navigation.push({
          label: `Footer ${j + 1} - Menu ${i + 1}`,
          labelName: `Footer ${j + 1} - Menu ${i + 1}`,
          to: `/`,
        })
        footer[j].navigation[i].label = text(
          `${footer[j].navigation[i].labelName}`,
          `${footer[j].navigation[i].label}`
        )
      }
      footer[j]["className"] = select(
        `Navigation Type ${j + 1}`,
        ["footernav--link", "footernav--underlinelink"],
        "footernav--link"
      )
    }

    let socialMedia = radios(`Social Media`, { yes: "yes", no: "no" }, "no")

    return <Footer data={footer} socialMedia={socialMedia} />
  })
