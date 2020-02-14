import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';
import Select from "../../src/components/atoms/select"
const data = [1, 2, 3, 4, 5, 6, 7];
storiesOf("atoms/Select", module)
.addDecorator(withA11y)
.add("default", () => <Select options={data} />)
