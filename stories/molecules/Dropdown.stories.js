import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';
import appData from "../../src/assets/app"
import Dropdown from "../../src/components/molecules/dropdown/dropdown"

storiesOf("molecules/Dropdown", module)
.addDecorator(withA11y)
.add("default", () => {
    return <Dropdown options={appData.reviewrproduct.options} />
})
