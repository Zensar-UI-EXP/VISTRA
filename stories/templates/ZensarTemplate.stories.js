import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  color,
  select,
  number,
  text,
  radios,
  optionsKnob as options
} from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import Header from "../../src/components/organisms/header/header";
import BannerCarousel from "../../src/components/organisms/bannerCarousel/bannerCarousel";
import Title from "../../src/components/atoms/title/title";
import Reviewproduct from "../../src/components/molecules/reviewproduct/reviewproduct";
import Card from "../../src/components/molecules/grid/grid";
import Image from "../../src/components/atoms/source/source";
import FullWidthImage from "../../src/components/molecules/fullWidthImage";
import Exploreproduct from "../../src/components/molecules/exploreproduct/exploreproduct";
import Footer from "../../src/components/organisms/footer/footer";
import appData from "../../src/assets/app";
import SEO from "../../src/components/organisms/seo";

let changeCount = 0;
storiesOf("templates/Zensar Template", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    const headerGroupName = "Header Component";
    let header = {
      headerStyle: {}
    };
    header.isImageLink = radios(
      `Logo Type`,
      { "image url": `yes`, svg: `no` },
      `yes`,
      headerGroupName
    );
    let htmlDecode = input => {
      var e = document.createElement("div");
      e.innerHTML = input;
      return e.childNodes[0].nodeValue;
    };
    if (header.isImageLink == "yes") {
      header.bgImage = text(
        "Image url",
        appData.header.logoImage,
        headerGroupName
      );
    } else {
      header.bgImage = htmlDecode(
        text("Svg code", appData.header.bgImage, headerGroupName)
      );
      //https://www.vistra.com//themes/custom/vistra/logo.svg
    }

    let pagebackgroundColor = text(
      "Page background color",
      "#ffb10e",
      headerGroupName
    );

    const headingColorLabel = "Background Style";
    const headingColorDefaultValue = "#ffb10e";
    header.headerStyle = JSON.parse(
      htmlDecode(
        text(
          headingColorLabel,
          JSON.stringify(appData.header.headerStyle),
          headerGroupName
        )
      )
    );
    const headingFontColorLabel = "Font Color";
    const headingFontColorDefaultValue = "#ffb10e";
    header.fontColor = text(
      headingFontColorLabel,
      appData.header.fontColor,
      headerGroupName
    );
    // header.headerStyle.position = radios(
    //   `Position`,
    //   { fixed: `fixed`, relative: `relative` },
    //   appData.header.headerStyle.position,
    //   headerGroupName
    // )
    // header.isSearchRquired = radios(
    //   `Search required`,
    //   {
    //     Yes: "yes",
    //     No: "no",
    //   },
    //   "no",
    //   headerGroupName
    // )

    header.headerType = select(
      "Header Type",
      ["default", "header--center"],
      "default",
      headerGroupName
    );
    if (header.headerType == "default") {
      header.isSearchRquired = radios(
        `Search required`,
        {
          Yes: "yes",
          No: "no"
        },
        "no",
        headerGroupName
      );
    }
    const subMenuLabel = "Sub Menu";
    const subMenuOptions = {
      Yes: "yes",
      No: "no"
    };
    const subMenuDefaultValue = header.headerType !== "default" ? "yes" : "no";
    const subMenuRequired = "no";
    // radios(
    //   subMenuLabel,
    //   subMenuOptions,
    //   subMenuDefaultValue,
    //   headerGroupName
    // );

    const menuListLabel = "Menu List Number";
    const menuListDefault = 7;
    const menuListNumberOption = {
      range: false,
      min: 3,
      max: 10,
      step: 1
    };
    let menuListOutput = number(
      menuListLabel,
      menuListDefault,
      menuListNumberOption,
      headerGroupName
    );
    let menuInput = [];
    let createObject = (label, labelName, to, submenu, subMenuRequired) => {
      return {
        label,
        labelName,
        to,
        submenu,
        subMenuRequired
      };
    };

    for (let i = 0; i < menuListOutput; i++) {
      let newObj = createObject(
        appData.header.data[i] ? appData.header.data[i].label : `Menu ${i + 1}`,
        `Menu ${i + 1}`,
        `/`,
        appData.header.data[i]
          ? appData.header.data[i].submenu
          : [{ label: "Sub Menu", to: "/" }],
        subMenuRequired
      );
      menuInput.push(newObj);
      menuInput[i].label = text(
        `${menuInput[i].labelName}`,
        `${menuInput[i].label}`,
        headerGroupName
      );
    }
    const menuSpacingLabel = "Menu Spacing";
    const menuSpacingDefaultValue = "5";
    const menuSpacingOption = {
      range: true,
      min: 5,
      max: 100,
      step: 5
    };
    const menuSpacing = number(
      menuSpacingLabel,
      menuSpacingDefaultValue,
      menuSpacingOption,
      headerGroupName
    );
    header.data = menuInput;

    let logoCustomStyle = JSON.parse(
      htmlDecode(
        text(
          `Header Logo style`,
          `${JSON.stringify(appData.header.logoCustomStyle)}`,
          headerGroupName
        )
      )
    );

    let menuLiteInput = [];
    header.isLiteNavigation = radios(
      `Top Lite navigation required`,
      {
        Yes: "yes",
        No: "no"
      },
      "no",
      headerGroupName
    );

    header.logoCustomStyle = logoCustomStyle;
    if (header.isLiteNavigation == "yes") {
      const menuLiteNavigationLabel = "Top Lite Menu List Number";
      const menuLiteListDefault = 4;
      const menuLiteOption = {
        range: false,
        min: 3,
        max: 10,
        step: 1
      };
      let menuLiteOutput = number(
        menuLiteNavigationLabel,
        menuLiteListDefault,
        menuLiteOption,
        headerGroupName
      );
      for (let i = 0; i < menuLiteOutput; i++) {
        let newObj = createObject(
          appData.header.liteNav[i]
            ? appData.header.liteNav[i].label
            : `Top Lite Menu ${i + 1}`,
          `Top Lite Menu ${i + 1}`,
          `/`,
          appData.header.liteNav[i]
            ? appData.header.liteNav[i].submenu
            : [{ label: "Sub Menu", to: "/" }],
          subMenuRequired
        );
        menuLiteInput.push(newObj);
        menuLiteInput[i].label = text(
          `${menuLiteInput[i].labelName}`,
          `${menuLiteInput[i].label}`,
          headerGroupName
        );
      }
      header.liteNav = menuLiteInput;
      let liteNavigationStyle = text(
        `Top Lite Menu`,
        `${JSON.stringify(appData.header.liteNavigationStyle)}`,
        headerGroupName
      );
      header.liteNavigationStyle = JSON.parse(htmlDecode(liteNavigationStyle));

      let liteFontColor = text(
        `Top Lite Font color`,
        `${appData.header.liteFontColor}`,
        headerGroupName
      );
      header.liteFontColor = liteFontColor;
    }

    const carouselGroupName = "Banner Carousel Component";
    const carouselComponentLabel = "Do you want the banner carousel component?";
    const generalOptions = {
      Yes: "yes",
      No: "No"
    };
    const inlineRadioOptionObj = {
      display: "inline-radio"
    };
    let carouselComponent = options(
      carouselComponentLabel,
      generalOptions,
      generalOptions.Yes,
      inlineRadioOptionObj,
      carouselGroupName
    );
    let bannerData = { data: [] };
    if (carouselComponent === generalOptions.Yes) {
      const bannerListNumberOption = {
        range: false,
        min: 2,
        max: 7,
        step: 1
      };
      const bannerListLabel = "Number of Banner";
      const bannerListDefault = 7;
      let bannerListOutput = number(
        bannerListLabel,
        bannerListDefault,
        bannerListNumberOption,
        carouselGroupName
      );
      const bannermaxLabel = "banner max width";
      const bannermaxDefaultValue = "100";
      const bannermaxOption = {
        range: true,
        min: 0,
        max: 100,
        step: 5
      };
      bannerData.maxWidth = number(
        bannermaxLabel,
        bannermaxDefaultValue,
        bannermaxOption,
        carouselGroupName
      );

      const bannerOptions = {
        Yes: "yes",
        No: "no"
      };

      for (var i = 0; i < bannerListOutput; i++) {
        bannerData.data[i] = {
          image: text(
            `Image ${i + 1}`,
            "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg",
            carouselGroupName
          )
        };
        bannerData.data[i].isText = radios(
          `Text on Banner ${i + 1}`,
          bannerOptions,
          "no",
          carouselGroupName
        );
        if (bannerData.data[i].isText == "yes") {
          bannerData.data[i].heroText = text(
            `Hero Text ${i + 1}`,
            `Hero Text ${i + 1}`,
            carouselGroupName
          );
          bannerData.data[i].subText = text(
            `Sub Text ${i + 1}`,
            `Sub Text ${i + 1}`,
            carouselGroupName
          );
          bannerData.data[i].textAlign = select(
            `Text align ${i + 1}`,
            [
              "bannercarousel--left",
              "bannercarousel--center",
              "bannercarousel--right"
            ],
            "bannercarousel--center"
          );
          bannerData.data[i].isButton = radios(
            `Button required ${i + 1}`,
            bannerOptions,
            "no",
            carouselGroupName
          );

          if (bannerData.data[i].isButton == "yes") {
            bannerData.data[i].btnLabel = text(
              `Label ${i + 1}`,
              "Default Button",
              carouselGroupName
            );
            bannerData.data[i].btnClassName = select(
              `Button ${i + 1}`,
              ["btn", "btn--transparent", "btn--blue"],
              "btn"
            );
          }
        }
      }
    }

    let finalOutPutProps = {
      header: header,
      bannerData: bannerData
    };

    let allComponentGroup = `Header, SEO, appData, ${
      carouselComponent === generalOptions.Yes ? `BannerCarousel, ` : ""
    }`;

    let defaultCode = `
            import React from 'react'
            import { ${allComponentGroup.trim()} } from "../index"
            const SecondPage = () => {
            document.body.style.background = '${pagebackgroundColor}'
            const extractedProps = ${JSON.stringify(finalOutPutProps)}
            return (
                <>

                  <SEO title="Home" />
                  <Header
                    {...extractedProps.header}
                    menuSpacing={extractedProps.menuSpacing}
                    logoImage={extractedProps.header.bgImage}
                  /> <div className="home">${
                    carouselComponent === generalOptions.Yes
                      ? `
                      <BannerCarousel data={extractedProps.bannerData.data} maxWidth={extractedProps.bannerData.maxWidth} />
                      <Title {...appData.foodLabel} />
                      <Reviewproduct {...appData.reviewrproduct} />
                    `
                      : ""
                  }
                </>
              )
            }
            export default SecondPage;`;
    let codeOuputLabel = changeCount
      ? `Code Output ${changeCount}`
      : `Code Output`;
    let codeOutput = text(codeOuputLabel, defaultCode, "Code");
    changeCount++;
    document.body.style.background = pagebackgroundColor;
    return (
      <>
        <Header
          {...header}
          menuSpacing={menuSpacing}
          logoImage={header.bgImage}
        />
        <div className="home">
          {carouselComponent === generalOptions.Yes ? (
            <>
              <BannerCarousel
                data={bannerData.data}
                maxWidth={bannerData.maxWidth}
              />
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  });
