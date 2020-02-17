import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select, radios } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import ListFooter from "../../src/components/organisms/listFooter/listFooter"
import appData from "../../src/assets/app";

storiesOf("organisms/List Footer", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    const sectionListLabel = "Number of List Footer"
    const sectionListDefault = 4
    const sectionListOption = {
      range: false,
      min: 1,
      max: 5,
      step: 1,
    }
    const sectionListOutput = number(sectionListLabel, sectionListDefault, sectionListOption)
    const sectionList = []
    for (var j = 0; j < sectionListOutput; j++) {
      sectionList.push({ heading: (appData.listFooter.sectionList[j] ? appData.listFooter.sectionList[j].heading : `Header ${ j + 1}`), linklist: [] })
      sectionList[j].heading = text(
            `Header ${ j + 1}`,
            `${ sectionList[j].heading}`
          )
      const menuListDefault = 3
      const menuListNumberOption = {
        range: false,
        min: 3,
        max: 10,
        step: 1,
      }
      let menuListOutput = number(
        `Header ${ j + 1} - Number of List`,
        menuListDefault,
        menuListNumberOption
      )
      for (let i = 0; i < menuListOutput; i++) {
        sectionList[j].linklist.push(appData.listFooter.sectionList[j] ? appData.listFooter.sectionList[j].linklist[i]: `Header ${ j + 1} - List  ${ i + 1} `)
        sectionList[j].linklist[i] = text(
          `Header ${ j + 1} - List  ${ i + 1} `,
          `${sectionList[j].linklist[i]}`
        )
      }
    }

    var listFooterBackground = text(
      `list Footer Background`,
      `${appData.listFooter.overallCustomStyle.background}`
    )
    var listFootercontentCustomStyle = text(
      `list Footer content width`,
      `${appData.listFooter.contentCustomStyle.width}`
    )
    var listFooter =  {
      overallCustomStyle: { background:  listFooterBackground },
      contentCustomStyle: { width: listFootercontentCustomStyle },
      sectionList:sectionList
    }

    return <ListFooter {...listFooter} />
  })
