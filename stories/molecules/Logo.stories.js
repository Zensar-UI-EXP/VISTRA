import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import Logo from "../../src/components/molecules/logo/logo"

const logoLabelName = "Change logo";
const defaultValue = "https://www.mars.com/sites/g/files/jydpyr316/files/Mars%20Wordmark%20RGB%20Blue.png";

storiesOf("molecules/Logo", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add("default", () => <Logo
    bgImage={text(logoLabelName, defaultValue)}
    />)
