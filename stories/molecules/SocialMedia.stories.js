import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import SocialMedia from "../../src/components/molecules/socialMedia/socialMedia"

storiesOf("molecules/SocialMedia", module)
.addDecorator(withA11y)
.add("default", () => 
<SocialMedia />)
