import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import Reviewproduct from "../../src/components/molecules/reviewproduct/reviewproduct"

storiesOf("molecules/Reviewproduct", module)
.addDecorator(withA11y)
.add("default", () => 
<Reviewproduct />)
