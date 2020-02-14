import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import Input from "../../src/components/atoms/input"

const inputTypeList = ["text", "password", "search", "date"];

storiesOf("atoms/Input", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add("default", () => <Input 
    placeholder="Search" 
    type={select('Input Types', inputTypeList, 'text')} 
    className="search__input" 
    />)
