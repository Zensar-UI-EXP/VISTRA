import React from "react"
import { storiesOf } from "@storybook/react"
import {
  withKnobs,
  number,
  text,
  radios,
  color,
  select,
} from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Header from "../../src/components/organisms/header/header"

storiesOf("organisms/Header", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    let header = {
      headerStyle: {},
    }
    // "https://www.mars.com/sites/g/files/jydpyr316/files/Mars%20Wordmark%20RGB%20Blue.png"
    header.isImageLink = radios(
      `Logo Type`,
      { "image url": `yes`, svg: `no` },
      `yes`
    )
    function htmlDecode(input) {
      var e = document.createElement("div")
      e.innerHTML = input
      return e.childNodes[0].nodeValue
    }
    if (header.isImageLink == "yes") {
      let defaultValue =
        "https://www.pedigree.com/images/default-source/default-album/pedigree-logo.png"
      header.bgImage = text("Image url", defaultValue)
    } else {
      var defaultSvgValue = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 247.3 35.7" style="width: 25vw;height: 4.5vw;">
        <title>Aquarian</title>
        <g>
          <path class="st0333" d="M245.8,2.9c0-0.6-0.4-0.9-1.1-0.9h-1.3v3.3h0.5V3.8h0.5l0.9,1.5h0.6l-0.9-1.5C245.4,3.8,245.8,3.4,245.8,2.9z                      M243.9,3.4v-1h0.6c0.4,0,0.7,0.1,0.7,0.5c0,0.4-0.3,0.5-0.7,0.5H243.9z"></path>
          <path class="st0333" d="M244.4,0.8c-1.6,0-2.9,1.3-2.9,2.8c0,1.6,1.3,2.8,2.9,2.8c1.6,0,2.8-1.3,2.8-2.8C247.3,2,246,0.8,244.4,0.8z                      M244.5,6c-1.3,0-2.3-1.1-2.3-2.4c0-1.4,1-2.4,2.3-2.4c1.3,0,2.3,1.1,2.3,2.4C246.7,5,245.8,6,244.5,6z"></path>
          <path class="st0333" d="M233.9,0.9h-2.8c-0.2,0-0.5,0.2-0.5,0.4s0.1,0.5,0.3,0.6c1.3,0.4,2.1,2.7,2.1,6.1v10.8                      c-2-2.5-7.1-8.9-10.7-13.2c-4.1-4.9-9.4-4.7-9.6-4.7h-5c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2,0,0.4,0.2,0.6c2.4,1.7,2.7,3.5,2.7,7.1                      v15.8c0,1.8-0.1,3.5-0.9,4.8c-0.8-0.9-1.7-2.4-2.7-4.9c0,0-4.4-10.6-7.7-18.6c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0                      c-0.2,0-0.4,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0.1,1.4,0.6,1.3,2.2c-0.1,0.7-0.5,1.9-0.8,2.8c-0.1,0.3-0.2,0.6-0.3,0.8                      l-6.9,18.2c-0.8,1.9-1.4,3.4-2.8,4.4c-1.2-1.1-1.1-2.8-1.1-4.6c0-0.3,0-0.5,0-0.8V7.8c0-2.6-1.4-6.9-6.7-6.9h-5.2                      c-0.2,0-0.4,0.2-0.5,0.4c-0.1,0.2,0,0.4,0.2,0.6c1.9,1.1,1.9,3.1,1.9,5.2c0,0.3,0,0.5,0,0.8v17.1c0,2.1,0,6.9,6.4,6.9h4.3h1.1h2.8                      c2.2,0,4.4-1.3,5.1-2.9c0.4-0.9,0.9-2.3,1.3-3.2l1.1-2.8h9.2l1.5,4.1c1.3,3.4,3.5,5,7.2,5c1.5,0,3.1,0,4.4,0c0,0,0,0,0,0h3.1                      c3.7,0,5.1-3.7,5.1-7.2L216.2,14l9,10.7c2.7,3.2,9,7.9,13.5,8.2c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.2-0.4V7.9                      C239.2,4.5,237.8,0.9,233.9,0.9z M192.8,17.5h-5.4l2.6-7.1L192.8,17.5z"></path>
          <path class="st0333" d="M37,30.8c0,0-2.2-0.7-4.3-6.2c0,0-4.4-10.6-7.7-18.6c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0                      c-0.2,0-0.5,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0,1.4,0.5,1.3,2.2c-0.1,0.7-0.5,2-0.8,2.9c-0.1,0.3-0.2,0.5-0.2,0.7L3.9,25.8                      c-0.9,2.3-1.6,3.9-3.7,5C0.1,30.9,0,31.1,0,31.3c0.1,0.2,0.3,0.4,0.5,0.4h3.9c1.9,0,4.4-1.2,5.1-2.9c0.4-0.9,0.9-2.3,1.3-3.2                      l1.1-2.8h9.3l1.5,4.1c1.2,3.4,3.5,5,7.2,5c3.3,0,7,0,7,0c0.2,0,0.4-0.2,0.5-0.4S37.2,30.9,37,30.8z M19.1,17.5h-5.4l2.6-7.1                      L19.1,17.5z"></path>
          <path class="st0333" d="M164.6,30.6c-1.8-0.7-3.7-2.6-5.7-5.6l-5.6-7.7c3.6-1.1,6.4-4.5,6.4-8.1c0-3.3-1.6-5.9-4.8-7.4                      c-2.3-1.1-5-1.1-7.3-1.1h-14.9c0,0-0.1,0-0.1,0c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5h0c0.1,0,0.4,0,0.7,0.4                      c0.5,0.5,1.3,1.9,1.3,5.6v17c0,0.3,0,0.5,0,0.8c0,1.3,0,2.6-0.4,3.6c-0.7-0.9-1.6-2.4-2.4-4.6c0,0-4.4-10.6-7.7-18.6                      c-1.9-4.5-6.6-5.2-9.3-5.2c-2.8,0-5,0-5,0c-0.2,0-0.5,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6c0.1,0,1.4,0.5,1.3,2.2                      c-0.1,0.7-0.5,1.9-0.8,2.8c-0.1,0.3-0.2,0.5-0.2,0.7l-6.9,18.2c-0.7,1.8-1.3,3.2-2.4,4.2c-0.9-1.1-0.9-2.7-0.8-4.4                      c0-0.3,0-0.5,0-0.8v-17c0-4.5-2-6.9-5.6-6.9h-6.5c-0.2,0-0.4,0.2-0.5,0.4c-0.1,0.2,0.1,0.5,0.3,0.6c2.2,1.1,2.2,3.7,2.2,6v12.5                      c0,3.1,0,5.9-4.1,5.9c-3.7,0-4.1-3.2-4.1-6V7.8c0-1.6-0.4-6.9-5.5-6.9h-6.8c-0.2,0-0.4,0.2-0.5,0.4c0,0.2,0.1,0.5,0.3,0.6                      c2.1,0.9,2.4,3.4,2.4,5.9v14.4c0,2.9,0.2,5.3,2.5,7.5c2.4,2.3,5.5,2.7,7.7,2.7c3.2,0,6.2-1.3,8.3-3.5c0.1,0.4,0.3,0.9,0.7,1.4                      c0.9,1,2.3,1.5,4.3,1.5c2.1,0,3.7,0,4.9,0c0,0,0,0,0,0h3.9c2.1,0,4.4-1.4,5.1-3.1c0.4-0.9,0.9-2.3,1.3-3.2l1.1-2.8h9.2l1.5,4.1                      c1.3,3.4,3.5,5,7.2,5c1.4,0,2.9,0,4.1,0c0,0,0,0,0,0h6.6c5.2,0,5.2-4.7,5.2-7v-4.6l3.6,5.8c2,3.4,6.5,5.8,10.7,5.8                      c0.3,0,0.5,0,0.8,0l4.3-0.3c0.2,0,0.4-0.2,0.5-0.4S164.8,30.7,164.6,30.6z M149.5,10.2c0,2.4-1.8,4.5-4.4,5.2V6.2                      c0.9,0,1.9,0.1,2.6,0.6C148.8,7.5,149.5,8.8,149.5,10.2z M118.3,17.5h-5.4l2.6-7.1L118.3,17.5z"></path>
          <path class="st0333" d="M74.8,33.7c-3.9-1-6.2-4.1-5.5-7.3c0-0.2,0-0.4-0.2-0.5s-0.4-0.1-0.5,0C63,29.1,58,30.6,53.8,30.2                      c8.8-0.5,15-6.3,15-14.1C68.8,8.2,62.4,0,51.5,0C41,0,33.3,6.8,33.3,16.1c0,7.5,4.7,13.5,13.1,16.7c5.1,2,11.9,2.8,17.9,2.8                      c4,0,7.7-0.4,10.5-1c0.2-0.1,0.4-0.3,0.4-0.5C75.2,33.9,75.1,33.7,74.8,33.7z M52,29.9C52,29.9,52,29.9,52,29.9                      c-1.6-0.3-3.1-1-4.3-2.1c-4.9-4-5.5-11.6-3.7-16.6c1.5-4.1,4.4-6.4,7.9-6.4c3.7,0,6.8,3.1,7.8,8c1.3,5.7-0.5,13.3-7.5,16.5                      C52,29.4,51.9,29.7,52,29.9z"></path>
        </g>
      </svg>`
      header.bgImage = htmlDecode(text("Svg code", defaultSvgValue))
    }

    const headingColorLabel = "Choose Background Color"
    const headingColorDefaultValue = "#ffb10e"
    header.headerStyle.backgroundColor = text(
      headingColorLabel,
      headingColorDefaultValue
    )
    // header.headerStyle.position = radios(
    //   `Position`,
    //   { fixed: `fixed`, relative: `relative` },
    //   `fixed`
    // )

    header.headerType = select(
      "Header Type",
      ["default", "header--center"],
      "default"
    )
    if (header.headerType == "default") {
      header.isSearchRquired = radios(
        `Search required`,
        {
          Yes: "yes",
          No: "no",
        },
        "no"
      )
    }
    const subMenuLabel = "Sub Menu"
    const subMenuOptions = {
      Yes: "yes",
      No: "no",
    }
    const subMenuDefaultValue = "no"
    const subMenuRequired = radios(
      subMenuLabel,
      subMenuOptions,
      subMenuDefaultValue
    )

    const menuListLabel = "Menu List Number"
    const menuListDefault = 5
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
    let createObject = (label, labelName, to, submenu, subMenuRequired) => {
      return {
        label,
        labelName,
        to,
        submenu,
        subMenuRequired,
      }
    }
    for (let i = 0; i < menuListOutput; i++) {
      let subMenuList = [
        { label: "Dry Dog Foods", to: "/" },
        { label: "Wet Dog Foods", to: "/" },
        { label: "Dog Treats", to: "/" },
        { label: "All Dog Foods", to: "/" },
      ]
      let newObj = createObject(
        `Menu ${i + 1}`,
        `Menu ${i + 1}`,
        `/`,
        subMenuList,
        subMenuRequired
      )
      menuInput.push(newObj)
      menuInput[i].label = text(
        `${menuInput[i].labelName}`,
        `${menuInput[i].label}`
      )
    }
    header.data = menuInput
    return <Header {...header} logoImage={header.bgImage} />
  })
