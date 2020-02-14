import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';
import Icon from "../../src/components/atoms/icon"

storiesOf("atoms/Icon", module)
.addDecorator(withA11y)
.add("searchIcon", () => <Icon className="glyphicon-search navigation__search" />)
