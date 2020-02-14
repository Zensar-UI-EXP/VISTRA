import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import Submenu from "../../src/components/molecules/submenu/submenu"

const subMenuData = [
        { label: "Dry Dog Foods", to: "/" },
        { label: "Wet Dog Foods", to: "/" },
        { label: "Dog Treats", to: "/" },
        { label: "All Dog Foods", to: "/" },
    ];

storiesOf("molecules/Submenu", module)
.addDecorator(withA11y)
.add("default", () => 
<Submenu submenu={subMenuData} showSubMenuClass="submenu--show"/>)
