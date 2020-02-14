import React from "react"
import { storiesOf } from "@storybook/react"
import { withA11y } from '@storybook/addon-a11y';

import Link from "../../src/components/atoms/link"

storiesOf("atoms/Link", module)
.addDecorator(withA11y)
.add("default", () => <Link />)
