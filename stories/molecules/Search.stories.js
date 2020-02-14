import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import Search from "../../src/components/molecules/search/search"

storiesOf("molecules/Search", module)
.addDecorator(withA11y)
.add("default", () => 
<Search searchActive="search--active" />)
