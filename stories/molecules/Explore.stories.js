import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Exploreproduct from "../../src/components/molecules/exploreproduct/exploreproduct"

storiesOf("molecules/Explore", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("default", () => {
    const exploreData = {
      label: text(`Explore Heading`, `Heading`),
      lists: [],
    }
    const defaultSource = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 259.8 259.8" xml:space="preserve"> <style type="text/css"> .st0106 { fill: #66C302; } .st1106 { filter: url(#Adobe_OpacityMaskFilter); } .st2106 { fill: #FFFFFF; } .st3106 { opacity: 0.4; mask: url(#SVGID_1_); } .st4106 { opacity: 0.4; fill: #231F20; } </style> <g id="Layer_2"> <g> <rect class="st0106" width="259.8" height="259.8"></rect> </g> <g class="st1106"> <rect class="st2106" y="5" width="259.8" height="259.8"></rect> </g> <g class="st3106"> <path class="st4106" d="M259.3,207.3V70.9C218.7,70.3,139.7,73,84.1,99c-78,36.4-70.2,47.8-70.2,47.8c6.9,9.9,16.4,16.7,24.4,21.1                  l6.7,27.4c2.6-10.2,3-17.6,2.3-23c4.3,1.8,7.1,2.6,7.1,2.6C86.6,190.8,178.8,202,259.3,207.3z M156.4,118.2                  c26.6,34.8-6.8,58.2-6.8,58.2C173.5,149.9,156.4,118.2,156.4,118.2z M103.9,113.5c8,0,14.6,6.5,14.6,14.6s-6.5,14.6-14.6,14.6                  c-8,0-14.6-6.5-14.6-14.6S95.8,113.5,103.9,113.5z"></path> </g> </g> </svg>`

    const numberOfListDefault = 4
    const numberOfListOption = {
      range: false,
      min: 1,
      max: 5,
      step: 1,
    }
    const numberOfListOutput = number(
      `Number of cards`,
      numberOfListDefault,
      numberOfListOption
    )

    let htmlDecode = input => {
      var e = document.createElement("div")
      e.innerHTML = input
      return e.childNodes[0].nodeValue
    }

    for (let i = 0; i < numberOfListOutput; i++) {
      exploreData.lists[i] = {}
      exploreData.lists[i].label = text(`label ${i + 1}`, `Label on svg image`)
      exploreData.lists[i].svg = htmlDecode(
        text(`Svg Image ${i + 1}`, defaultSource)
      )
    }

    return <Exploreproduct {...exploreData} />
  })
