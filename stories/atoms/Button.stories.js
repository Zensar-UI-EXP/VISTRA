import React from "react"
import { storiesOf } from "@storybook/react"
import {
  withKnobs,
  select,
  text,
  radios,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Button from "../../src/components/atoms/button/button"

let changeCount = 0

storiesOf("atoms/Button", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    const buttonKnobLabel = "Button Label"
    const buttonKnobDefault = "Default Button"
    let buttonLabel = text(buttonKnobLabel, buttonKnobDefault, "Settings")

    const buttonLists = ["btn", "btn--transparent", "btn--blue"]
    let buttonClassName = select(
      "Button List",
      buttonLists,
      buttonLists[0],
      "Settings"
    )
    const styleNumberOption = {
      range: true,
      min: 1,
      max: 100,
      step: 1,
    }
    let btnPadding = number(
      "Button Padding",
      "5",
      styleNumberOption,
      "Settings"
    )
    let btnMargin = number("Button Margin", "5", styleNumberOption, "Settings")
    let borderRadius = number(
      "Border Radius",
      "5",
      styleNumberOption,
      "Settings"
    )
    let fontSize = number("Font Size", "18", styleNumberOption, "Settings")
    let color = text("Color", "#000", "Settings")
    let ouput = ouput || []
    let defaultCode = `
        import React from 'react'
        import Button from '<--button component path-->'
        const <--Name of the new component --> = () => {
          return (
            <Button label="${buttonLabel}" className="${buttonClassName}" />
    )}`
    let ouputLabel = changeCount ? `Changed Output ${changeCount}` : `Output`
    ouput[changeCount] = text(ouputLabel, defaultCode, "Code")
    changeCount++
    let btnStyle = {
      padding: `${btnPadding}px`,
      margin: `${btnMargin}px`,
      borderRadius: `${borderRadius}px`,
      fontSize: `${fontSize}px`,
      color: `${color}`,
    }
    return (
      <Button
        label={buttonLabel}
        className={buttonClassName}
        style={btnStyle}
      />
    )
  })
