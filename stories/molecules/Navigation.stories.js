import React, { useEffect, useState } from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, radios } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import Navigation from "../../src/components/molecules/navigation/navigation"
import appData from "../../src/assets/app"

storiesOf("molecules/Navigation", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add("default", () => {
        const subMenuLabel = 'Sub Menu';
        const subMenuOptions = {
            Yes: 'yes',
            No: 'no'
        };
        const subMenuDefaultValue = 'no';
        const subMenuRequired = radios(subMenuLabel, subMenuOptions, subMenuDefaultValue);

        const menuListLabel = 'Menu List Number';
        const menuListDefault = 7
        const menuListNumberOption = {
            range: false,
            min: 3,
            max: 10,
            step: 1,
        };
        let menuListOutput = number(menuListLabel, menuListDefault, menuListNumberOption);
        let menuInput = [];
        let createObject = (label, labelName, to, submenu, subMenuRequired) => {
            return {
                label,
                labelName,
                to,
                submenu,
                subMenuRequired 
            };
        }
        for (let i = 0; i < menuListOutput; i++) {
            let subMenuList = [
                { label: "Dry Dog Foods", to: "/" },
                { label: "Wet Dog Foods", to: "/" },
                { label: "Dog Treats", to: "/" },
                { label: "All Dog Foods", to: "/" },
            ];
            let newObj = createObject(
                appData.header.data[i] ? appData.header.data[i].label : `Menu ${i + 1}`,
                `Menu ${i + 1}`,
                `/`,
                appData.header.data[i]
                  ? appData.header.data[i].submenu
                  : [{ label: "Sub Menu", to: "/" }],
                subMenuRequired
            )
            menuInput.push(newObj);
            menuInput[i].label = text(`${menuInput[i].labelName}`, `${menuInput[i].label}`)
        }

        const menuSpacingLabel = "Menu Spacing";
        const menuSpacingDefaultValue = "5";
        const menuSpacingOption = {
            range: true,
            min: 5,
            max: 50,
            step: 5,
        };
        const menuSpacing = number(menuSpacingLabel, menuSpacingDefaultValue, menuSpacingOption);


        return (
            <Navigation 
                data={menuInput}
                menuSpacing={menuSpacing}
                toggle="" 
                mobiToggle="" />
        )
})
