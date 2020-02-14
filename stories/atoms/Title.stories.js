import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import Title from "../../src/components/atoms/title/title"

storiesOf("atoms/Title", module)
  .addDecorator(withA11y)
  .add("default", () => (
  <Title label="Default title" />
))
