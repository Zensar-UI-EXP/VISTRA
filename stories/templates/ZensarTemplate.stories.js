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
import InfoLayout from "../../src/components/organisms/infoLayout/infoLayout";
import TrendingCardView from "../../src/components/organisms/trendingCardView/trendingCardView";
import ConnectLayout from "../../src/components/organisms/connectLayout/connectLayout";
import LongCard from "../../src/components/organisms/longCard/longCard"
import appData from "../../src/assets/app";
import ListFooter from "../../src/components/organisms/listFooter/listFooter";
import SpotLight from "../../src/components/organisms/spotLight/spotLight";
import QuestionLayout from "../../src/components/organisms/questionLayout/questionLayout"

import SEO from "../../src/components/organisms/seo";

let changeCount = 0;
storiesOf("templates/Zensar Template", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    const headerGroupName = "Header";
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
        let newObj = createObject(`Top Lite Menu ${i + 1}`,
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

    const carouselGroupName = "Banner Slider";
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
    let bannerChoiceOptions = {
      option1: "Carousal Slider",
      option2: "Spotlight Slider"
    }
    if (carouselComponent === generalOptions.Yes) {
      let bannerChoiceLabel = "Choose the banner slider behaviours";
      bannerData.bannerChoice = options(
        bannerChoiceLabel,
        bannerChoiceOptions,
        bannerChoiceOptions.option1,
        inlineRadioOptionObj,
        carouselGroupName
      );
      const bannerListNumberOption = {
        range: false,
        min: 2,
        max: 7,
        step: 1
      };
      const bannerListLabel = "Number of Banner";
      const bannerListDefault = 6;
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
            appData.banner.data[i].image,
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
          if(bannerData.bannerChoice == "Spotlight Slider") {
            bannerData.data[i].header = text(
              `Header ${i + 1}`,
              `${appData.banner.data[i]? appData.banner.data[i].header : `Header Text ${i + 1}`}`,
              carouselGroupName
            );
            bannerData.data[i].subHeader = text(
              `Sub Header ${i + 1}`,
              `${appData.banner.data[i]? appData.banner.data[i].subHeader : `Sub Header Text ${i + 1}`}`,
              carouselGroupName
            );
            bannerData.data[i].description = text(
              `Description ${i + 1}`,
              `${appData.banner.data[i]? appData.banner.data[i].description : `Description Text ${i + 1}`}`,
              carouselGroupName
            );
          } else {
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
          }
          
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

            if(bannerData.bannerChoice == "Spotlight Slider") {
              bannerData.data[i].buttonText = text(
                `Label ${i + 1}`,
                "Default Button",
                carouselGroupName
              );
            } else {
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
    }
    const infoLayoutGroupName = "Information";
    const infoLayoutComponentLabel = "Do you want the information message component?";
    let infoLayoutComponent = options(
      infoLayoutComponentLabel,
      generalOptions,
      generalOptions.No,
      inlineRadioOptionObj,
      infoLayoutGroupName
    );
    let infoLayoutData = {};
    if (infoLayoutComponent === generalOptions.Yes) {
      let backgroundColor = htmlDecode(
        text("Background Color", appData.infoLayout.overallCustomStyle.background, infoLayoutGroupName)
      );
      let contentWidth = htmlDecode(
        number("Width of the container", appData.infoLayout.contentCustomStyle.width, {
            range: true,
            min: 0,
            max: 100,
            step: 5
          }, 
          infoLayoutGroupName)
      );
      infoLayoutData.overallCustomStyle = {background: backgroundColor};
      infoLayoutData.contentCustomStyle = {width: contentWidth + "%"};
      infoLayoutData.desc = htmlDecode(
        text("Type message desplay in the layout", appData.infoLayout.desc, infoLayoutGroupName)
      );
    }

    const card1GroupName = "Card";
    const card1ComponentLabel = "Do you want the card component layout1?";
    let card1Component = options(
      card1ComponentLabel,
      generalOptions,
      generalOptions.Yes,
      inlineRadioOptionObj,
      card1GroupName
    );
    let card1data = {};
    if (card1Component === generalOptions.Yes) {
      let backgroundColor = htmlDecode(
        text("Background Color", appData.trendcard.overallCustomStyle.background, card1GroupName)
      );
      let contentWidth = htmlDecode(
        number("Width of the container", 90, {
            range: true,
            min: 0,
            max: 100,
            step: 5
          }, 
          card1GroupName)
      );
      card1data.overallCustomStyle = {background: backgroundColor};
      card1data.contentCustomStyle = {width: contentWidth + "%"};
      card1data.heading = htmlDecode(
        text("Card Heading", appData.trendcard.heading, card1GroupName)
      );
      let headingFontColor = htmlDecode(
        text("Heading Font Color", appData.trendcard.headingCustomStyle.color, card1GroupName)
      );
      card1data.headingCustomStyle = {color: headingFontColor};
      let headingBorderAlignOptions = ["Top Left", "Top Right", "Bottom Left", "Bottom Right"];
      let boderClassList = ["border-top--left", "border-top--right", "border-bot--left", "border-bot--right"]
      let headingBorderAlign = select(
        "Heading border alignment",
        headingBorderAlignOptions,
        headingBorderAlignOptions[2],
        card1GroupName
      );
      card1data.headingBorderAlign = boderClassList[headingBorderAlignOptions.indexOf(headingBorderAlign)];

      let innerWidth = htmlDecode(
        number("Width of the inner container", 90, {
            range: true,
            min: 0,
            max: 100,
            step: 5
          }, 
          card1GroupName)
      );
      card1data.cardListCustomStyle = {width: innerWidth + "%"};
      const cardLayoutOptions = {
        layout1: "Layout 1",
        layout2: "Layout 2"
      };
      let selectCardLayout = options(
        "Select the card layout",
        cardLayoutOptions,
        cardLayoutOptions.layout1,
        inlineRadioOptionObj,
        card1GroupName
      );
      card1data.customClass = selectCardLayout === cardLayoutOptions.layout2 ? "trendcard--secondlayout" : "";
      let cardBackgroundColor = htmlDecode(
        text("Card Background Color", appData.trendcard.cardCustomStyle.background, card1GroupName)
      );
      card1data.cardCustomStyle = {background: cardBackgroundColor};
      let cardFontColor = htmlDecode(
        text("Card Font Color", appData.trendcard.cardCustomStyle.color, card1GroupName)
      );
      card1data.cardCustomStyle = {background: cardBackgroundColor, color: cardFontColor};
      let cardListLabelbg = htmlDecode(
        text("Card List Label BG", appData.trendcard.cardListLabelCustomStyle.background, card1GroupName)
      );
      card1data.cardListLabelCustomStyle = {background: cardListLabelbg};
      let cardListDateColor = htmlDecode(
        text("Card List Date Font color", appData.trendcard.cardDateCustomStyle.color, card1GroupName)
      );
      card1data.cardDateCustomStyle = {color: cardListDateColor};
      let cardListDetailDescColor = htmlDecode(
        text("Card List Detail Description Font color", appData.trendcard.cardDetailDescCustomStyle.color, card1GroupName)
      );
      card1data.cardDetailDescCustomStyle = {color: cardListDetailDescColor};
      let cardListLinkColor = htmlDecode(
        text("Card List Link Font color", appData.trendcard.cardLinkCustomStyle.color, card1GroupName)
      );
      card1data.cardLinkCustomStyle = {color: cardListLinkColor};

      let totalNoOfCards = htmlDecode(
        number(" Total number Of cards", 6, {
            range: false,
            min: 2,
            max: 6,
            step: 1
          }, 
          card1GroupName)
      );
      card1data.cardlist = [];
      for (let indexNumber = 0; indexNumber < totalNoOfCards; indexNumber++){
        card1data.cardlist[indexNumber] = {};
        let cardnumber = indexNumber+1;
        card1data.cardlist[indexNumber].image = htmlDecode(
          text(`Card${cardnumber} image`, appData.trendcard.cardlist[indexNumber].image, card1GroupName)
        );
        card1data.cardlist[indexNumber].cardDescription = htmlDecode(
          text(`Card${cardnumber} Description`, appData.trendcard.cardlist[indexNumber].cardDescription, card1GroupName)
        );
        card1data.cardlist[indexNumber].cardDate = htmlDecode(
          text(`Card${cardnumber} Date`, appData.trendcard.cardlist[indexNumber].cardDate || `Card${cardnumber} Date`, card1GroupName)
        );
        card1data.cardlist[indexNumber].cardLabel = htmlDecode(
          text(`Card${cardnumber} Label`, appData.trendcard.cardlist[indexNumber].cardLabel || `Card${cardnumber} Date`, card1GroupName)
        );
        if (indexNumber == 0 || indexNumber == 3 || indexNumber == 4) {
          card1data.cardlist[indexNumber].cardDetailDescription = htmlDecode(
            text(`Card${cardnumber} Detail Description`, appData.trendcard.cardlist[indexNumber].cardDetailDescription, card1GroupName)
          );
        }
        card1data.cardlist[indexNumber].link = htmlDecode(
          text(`Card${cardnumber} Link`, appData.trendcard.cardlist[indexNumber].link, card1GroupName)
        );
        
      }
    }

    const connectLayoutGroupName = "Connect";
    const connectLayoutComponentLabel = "Do you want the Connect Layout component?";
    let connectLayoutComponent = options(
      connectLayoutComponentLabel,
      generalOptions,
      generalOptions.Yes,
      inlineRadioOptionObj,
      connectLayoutGroupName
    );
    let connectLayoutdata = {};
    if (connectLayoutComponent === generalOptions.Yes) {
      let backgroundColor = htmlDecode(
        text("Connect Layout Background", appData.connectlayout.overallCustomStyle.background, connectLayoutGroupName)
      );
      connectLayoutdata.overallCustomStyle = {background: backgroundColor};
      let contentWidth = htmlDecode(
        number("onnect Layout Width", 90, {
            range: true,
            min: 0,
            max: 100,
            step: 5
          }, 
          connectLayoutGroupName)
      );
      connectLayoutdata.contentCustomStyle = {width: contentWidth + "%"};
      connectLayoutdata.heading = htmlDecode(
        text("Heading", appData.connectlayout.heading, connectLayoutGroupName)
      );
      let headingFontSize = htmlDecode(
        number("Heading Font Size", 54, {
            range: true,
            min: 14,
            max: 100,
            step: 2
          }, 
          connectLayoutGroupName)
      );
      connectLayoutdata.headingCustomStyle = { "font-size": headingFontSize + "px"};
      connectLayoutdata.description = htmlDecode(
        text("Description", appData.connectlayout.description, connectLayoutGroupName)
      );
      let descriptionFontSize = htmlDecode(
        number("Description Font Size", 24, {
            range: true,
            min: 14,
            max: 100,
            step: 2
          }, 
          connectLayoutGroupName)
      );
      connectLayoutdata.descriptionCustomStyle = { "font-size": descriptionFontSize + "px"};
      connectLayoutdata.buttonLabel = htmlDecode(
        text("Button Label", appData.connectlayout.buttonLabel, connectLayoutGroupName)
      );
      let buttonBg = htmlDecode(
        text("Button Background", appData.connectlayout.overallCustomStyle.background, connectLayoutGroupName)
      );
      connectLayoutdata.buttonCustomStyle = {background: buttonBg};
      const imageVideoLabel = "Do you want image (or) video?";
      const imageVideoOptions = ["Image", "Video"]
      connectLayoutdata.imageVideo = options(
        imageVideoLabel,
        imageVideoOptions,
        imageVideoOptions[0],
        inlineRadioOptionObj,
        connectLayoutGroupName
      );
      if (connectLayoutdata.imageVideo === imageVideoOptions[0]){
        connectLayoutdata.image = htmlDecode(
          text("image", appData.connectlayout.image, connectLayoutGroupName)
        );
      } else {
        connectLayoutdata.videoSrc = htmlDecode(
          text("video", appData.connectlayout.videoSrc, connectLayoutGroupName)
        );
      }
      connectLayoutdata.btnClassName = "btn--transparent";
    }


    const longCardGroupName = "Two Card";
    const  longCardComponentLabel = "Do you want the two card component?";
    let longCardComponent = options(
      longCardComponentLabel,
      generalOptions,
      generalOptions.No,
      inlineRadioOptionObj,
      longCardGroupName
    );
    let createLongObject = (header, description, link, imageUrl, image) => {
      return {
        header,
        description,
        link,
        imageUrl,
        image
      };
    };
  
    const longCard = {
      list: []
    }
  const cardList = []
  if(longCardComponent === generalOptions.Yes) {

    for (var i = 0; i < 2; i++) {
          
        let newObj = createLongObject(
          appData.longCard.list[i] ? appData.longCard.list[i].header : `Header ${i + 1}`,
          appData.longCard.list[i] ? appData.longCard.list[i].description : `Description ${i + 1}`,
          appData.longCard.list[i] ? appData.longCard.list[i].link:`Link Text ${i + 1}`,
          appData.longCard.list[i] ? appData.longCard.list[i].imageUrl:``,
          appData.longCard.list[i].image
        );
        cardList.push(newObj)
        cardList[i].header = text(
          `Header ${i + 1}`,
          appData.longCard.list[i].header,
          longCardGroupName
        );
        cardList[i].description = text(
          `Description ${i + 1}`,
          appData.longCard.list[i].description,
          longCardGroupName
        );
        cardList[i].link = text(
          `Link ${i + 1}`,
          appData.longCard.list[i].link,
          longCardGroupName
        );
        cardList[i].imageUrl = text(`Image ${i + 1}`,appData.longCard.list[i].imageUrl, longCardGroupName)
        longCard.list = cardList;
      }
    }

    const questionLayoutGroupName = "Question Layout";
    const  questionLayoutComponentLabel = "Do you want the question layout component?";
    let questionLayoutComponent = options(
      questionLayoutComponentLabel,
      generalOptions,
      generalOptions.No,
      inlineRadioOptionObj,
      questionLayoutGroupName
    );
    var questionLayout = {
      leftcontent: {},
      rightcontent: {},
      overallCustomStyle: {},
      contentCustomStyle: {}
    }
    questionLayout.leftcontent.heading = text(
      `Left Header`,
      appData.questionLayout.leftcontent.heading,
      questionLayoutGroupName
    );
    questionLayout.leftcontent.description = text(
      `Left Description`,
      appData.questionLayout.leftcontent.description,
      questionLayoutGroupName
    );
    questionLayout.leftcontent.buttonLabel = text(
      `Left Button Label`,
      appData.questionLayout.leftcontent.buttonLabel,
      questionLayoutGroupName
    );
    questionLayout.leftcontent.callLink = text(
      `Left Call Link`,
      appData.questionLayout.leftcontent.callLink,
      questionLayoutGroupName
    );
    questionLayout.rightcontent.heading = text(
      `Right Header`,
      appData.questionLayout.rightcontent.heading,
      questionLayoutGroupName
    );
    questionLayout.rightcontent.description = text(
      `Right Description`,
      appData.questionLayout.rightcontent.description,
      questionLayoutGroupName
    );
    questionLayout.rightcontent.buttonLabel = text(
      `Right Button Label`,
      appData.questionLayout.rightcontent.buttonLabel,
      questionLayoutGroupName
    );
    questionLayout.rightcontent.callLink = text(
      `Right Call Link`,
      appData.questionLayout.rightcontent.callLink,
      questionLayoutGroupName
    );
    questionLayout.overallCustomStyle.background = text(
      `list Footer Background`,
      `${appData.questionLayout.overallCustomStyle.background}`,
      questionLayoutGroupName
    )
    questionLayout.contentCustomStyle.width  = text(
      `list Footer content width`,
      `${appData.questionLayout.contentCustomStyle.width}`,
      questionLayoutGroupName
    )

    const ListFooterGroupName = "List Footer";
    const sectionListLabel = "Number of List Footer"
    const sectionListDefault = 4
    const sectionListOption = {
      range: false,
      min: 1,
      max: 5,
      step: 1,
    }
    const sectionListOutput = number(sectionListLabel, sectionListDefault, sectionListOption, ListFooterGroupName)
    const sectionList = []
    for (var j = 0; j < sectionListOutput; j++) {
      sectionList.push({ heading: (appData.listFooter.sectionList[j] ? appData.listFooter.sectionList[j].heading : `Header ${ j + 1}`), linklist: [] })
      sectionList[j].heading = text(
            `Header ${ j + 1}`,
            `${ sectionList[j].heading}`,
            ListFooterGroupName
          )
      const menuListDefault = 3
      const menuListNumberOption = {
        range: false,
        min: 3,
        max: 10,
        step: 1,
      }
      let menuListOutput = number(
        `Header ${ j + 1} - Number of List`,
        menuListDefault,
        menuListNumberOption,
        ListFooterGroupName
      )
      for (let i = 0; i < menuListOutput; i++) {
        sectionList[j].linklist.push(appData.listFooter.sectionList[j] ? appData.listFooter.sectionList[j].linklist[i]: `Header ${ j + 1} - List  ${ i + 1} `)
        sectionList[j].linklist[i] = text(
          `Header ${ j + 1} - List  ${ i + 1} `,
          `${sectionList[j].linklist[i]}`,
          ListFooterGroupName
        )
      }
    }

    var listFooterBackground = text(
      `list Footer Background`,
      `${appData.listFooter.overallCustomStyle.background}`,
      ListFooterGroupName
    )
    var listFootercontentCustomStyle = text(
      `list Footer content width`,
      `${appData.listFooter.contentCustomStyle.width}`,
      ListFooterGroupName
    )
    var listFooter =  {
      overallCustomStyle: { background:  listFooterBackground },
      contentCustomStyle: { width: listFootercontentCustomStyle },
      sectionList:sectionList
    }

    let finalOutPutProps = {
      header: header,
      bannerData: bannerData,
      longCard: longCard,
      listFooter: listFooter
    };

    let allComponentGroup = `Header, SEO, appData, ${
      carouselComponent === generalOptions.Yes ? `BannerCarousel, ` : ""
    }`;

    let defaultCode = `
            import React from 'react'
            import { ${allComponentGroup.trim()} } from "../index"
            const SecondPage = () => {
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
    // document.body.style.background = pagebackgroundColor;
    return (
      <>
        <Header
          {...header}
          menuSpacing={menuSpacing}
          logoImage={header.bgImage}
        />
        <div className="home">
          {carouselComponent === generalOptions.Yes && bannerData.bannerChoice === bannerChoiceOptions.option1 ? (
            <>
              <BannerCarousel
                data={bannerData.data}
                maxWidth={bannerData.maxWidth}
              />
            </>
          ) : (
            ""
          )}
          {carouselComponent === generalOptions.Yes && bannerData.bannerChoice === bannerChoiceOptions.option2 ? (
            <>
              <SpotLight data={bannerData.data} />
            </>
          ) : (
            ""
          )}
          {infoLayoutComponent === generalOptions.Yes ? (
            <>
              <InfoLayout {...infoLayoutData} />
            </>
          ) : (
            ""
          )}
          {card1Component === generalOptions.Yes ? (
            <>
              <TrendingCardView {...card1data} />
            </>
          ) : (
            ""
          )}
          {longCardComponent === generalOptions.Yes ? (
            <>
              <LongCard {...longCard}  />
            </>
          ) : (
            ""
          )}
          {connectLayoutComponent === generalOptions.Yes ? (
            <>
              <ConnectLayout {...connectLayoutdata} />
            </>
          ) : (
            ""
          )}
          {questionLayoutComponent === generalOptions.Yes ? (
            <>
              <QuestionLayout {...questionLayout} />
            </>
          ) : (
            ""
          )}
          <ListFooter {...listFooter}
        />
        </div>
      </>
    );
  });
