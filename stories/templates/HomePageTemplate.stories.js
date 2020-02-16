// import React from "react";
// import { storiesOf } from "@storybook/react";
// import {
//   withKnobs,
//   color,
//   select,
//   number,
//   text,
//   radios,
//   optionsKnob as options
// } from "@storybook/addon-knobs";
// import { withA11y } from "@storybook/addon-a11y";

// import Header from "../../src/components/organisms/header/header";
// import BannerCarousel from "../../src/components/organisms/bannerCarousel/bannerCarousel";
// import Title from "../../src/components/atoms/title/title";
// import Reviewproduct from "../../src/components/molecules/reviewproduct/reviewproduct";
// import Card from "../../src/components/molecules/grid/grid";
// import Image from "../../src/components/atoms/source/source";
// import FullWidthImage from "../../src/components/molecules/fullWidthImage";
// import Exploreproduct from "../../src/components/molecules/exploreproduct/exploreproduct";
// import Footer from "../../src/components/organisms/footer/footer";
// import appData from "../../src/assets/app";
// import SEO from "../../src/components/organisms/seo";

// let changeCount = 0;
// storiesOf("templates/Home Page Template", module)
//   .addDecorator(withA11y)
//   .addDecorator(withKnobs)
//   .add("default", () => {
//     const headerGroupName = "Header Component";
//     let header = {
//       headerStyle: {}
//     };
//     header.isImageLink = radios(
//       `Logo Type`,
//       { "image url": `yes`, svg: `no` },
//       `yes`,
//       headerGroupName
//     );
//     let htmlDecode = input => {
//       var e = document.createElement("div");
//       e.innerHTML = input;
//       return e.childNodes[0].nodeValue;
//     };
//     if (header.isImageLink == "yes") {
//       header.bgImage = text(
//         "Image url",
//         appData.header.logoImage,
//         headerGroupName
//       );
//     } else {
//       header.bgImage = htmlDecode(
//         text("Svg code", appData.header.bgImage, headerGroupName)
//       );
//     }

//     let pagebackgroundColor = text(
//       "Page background color",
//       "#ffb10e",
//       headerGroupName
//     );

//     const headingColorLabel = "Choose Background Color";
//     const headingColorDefaultValue = "#ffb10e";
//     header.headerStyle.backgroundColor = text(
//       headingColorLabel,
//       appData.header.headerStyle.backgroundColor,
//       headerGroupName
//     );
//     const headingFontColorLabel = "Font Color";
//     const headingFontColorDefaultValue = "#ffb10e";
//     header.fontColor = text(
//       headingFontColorLabel,
//       appData.header.fontColor,
//       headerGroupName
//     );
//     // header.headerStyle.position = radios(
//     //   `Position`,
//     //   { fixed: `fixed`, relative: `relative` },
//     //   appData.header.headerStyle.position,
//     //   headerGroupName
//     // )
//     // header.isSearchRquired = radios(
//     //   `Search required`,
//     //   {
//     //     Yes: "yes",
//     //     No: "no",
//     //   },
//     //   "no",
//     //   headerGroupName
//     // )
//     header.headerType = select(
//       "Header Type",
//       ["default", "header--center"],
//       "default",
//       headerGroupName
//     );
//     if (header.headerType == "default") {
//       header.isSearchRquired = radios(
//         `Search required`,
//         {
//           Yes: "yes",
//           No: "no"
//         },
//         "yes",
//         headerGroupName
//       );
//     }
//     const subMenuLabel = "Sub Menu";
//     const subMenuOptions = {
//       Yes: "yes",
//       No: "no"
//     };
//     const subMenuDefaultValue = header.headerType !== "default" ? "yes" : "no";
//     const subMenuRequired = radios(
//       subMenuLabel,
//       subMenuOptions,
//       subMenuDefaultValue,
//       headerGroupName
//     );

//     const menuListLabel = "Menu List Number";
//     const menuListDefault = 7;
//     const menuListNumberOption = {
//       range: false,
//       min: 3,
//       max: 10,
//       step: 1
//     };
//     let menuListOutput = number(
//       menuListLabel,
//       menuListDefault,
//       menuListNumberOption,
//       headerGroupName
//     );
//     let menuInput = [];
//     let createObject = (label, labelName, to, submenu, subMenuRequired) => {
//       return {
//         label,
//         labelName,
//         to,
//         submenu,
//         subMenuRequired
//       };
//     };
//     for (let i = 0; i < menuListOutput; i++) {
//       let newObj = createObject(
//         appData.header.data[i] ? appData.header.data[i].label : `Menu ${i + 1}`,
//         `Menu ${i + 1}`,
//         `/`,
//         appData.header.data[i]
//           ? appData.header.data[i].submenu
//           : [{ label: "Sub Menu", to: "/" }],
//         subMenuRequired
//       );
//       menuInput.push(newObj);
//       menuInput[i].label = text(
//         `${menuInput[i].labelName}`,
//         `${menuInput[i].label}`,
//         headerGroupName
//       );
//     }
//     const menuSpacingLabel = "Menu Spacing";
//     const menuSpacingDefaultValue = "5";
//     const menuSpacingOption = {
//       range: true,
//       min: 5,
//       max: 100,
//       step: 5
//     };
//     const menuSpacing = number(
//       menuSpacingLabel,
//       menuSpacingDefaultValue,
//       menuSpacingOption,
//       headerGroupName
//     );
//     header.data = menuInput;

//     const carouselGroupName = "Banner Carousel Component";
//     const carouselComponentLabel = "Do you want the banner carousel component?";
//     const generalOptions = {
//       Yes: "yes",
//       No: "No"
//     };
//     const inlineRadioOptionObj = {
//       display: "inline-radio"
//     };
//     let carouselComponent = options(
//       carouselComponentLabel,
//       generalOptions,
//       generalOptions.Yes,
//       inlineRadioOptionObj,
//       carouselGroupName
//     );
//     let bannerData = { data: [] };
//     if (carouselComponent === generalOptions.Yes) {
//       const bannerListNumberOption = {
//         range: false,
//         min: 2,
//         max: 7,
//         step: 1
//       };
//       const bannerListLabel = "Number of Banner";
//       const bannerListDefault = 7;
//       let bannerListOutput = number(
//         bannerListLabel,
//         bannerListDefault,
//         bannerListNumberOption,
//         carouselGroupName
//       );
//       const bannermaxLabel = "banner max width";
//       const bannermaxDefaultValue = "100";
//       const bannermaxOption = {
//         range: true,
//         min: 0,
//         max: 100,
//         step: 5
//       };
//       bannerData.maxWidth = number(
//         bannermaxLabel,
//         bannermaxDefaultValue,
//         bannermaxOption,
//         carouselGroupName
//       );

//       const bannerOptions = {
//         Yes: "yes",
//         No: "no"
//       };

//       for (var i = 0; i < bannerListOutput; i++) {
//         bannerData.data[i] = {
//           image: text(
//             `Image ${i + 1}`,
//             "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg",
//             carouselGroupName
//           )
//         };
//         bannerData.data[i].isText = radios(
//           `Text on Banner ${i + 1}`,
//           bannerOptions,
//           "no",
//           carouselGroupName
//         );
//         if (bannerData.data[i].isText == "yes") {
//           bannerData.data[i].heroText = text(
//             `Hero Text ${i + 1}`,
//             `Hero Text ${i + 1}`,
//             carouselGroupName
//           );
//           bannerData.data[i].subText = text(
//             `Sub Text ${i + 1}`,
//             `Sub Text ${i + 1}`,
//             carouselGroupName
//           );
//           bannerData.data[i].textAlign = select(
//             `Text align ${i + 1}`,
//             [
//               "bannercarousel--left",
//               "bannercarousel--center",
//               "bannercarousel--right"
//             ],
//             "bannercarousel--center"
//           );
//           bannerData.data[i].isButton = radios(
//             `Button required ${i + 1}`,
//             bannerOptions,
//             "no",
//             carouselGroupName
//           );

//           if (bannerData.data[i].isButton == "yes") {
//             bannerData.data[i].btnLabel = text(
//               `Label ${i + 1}`,
//               "Default Button",
//               carouselGroupName
//             );
//             bannerData.data[i].btnClassName = select(
//               `Button ${i + 1}`,
//               ["btn", "btn--transparent", "btn--blue"],
//               "btn"
//             );
//           }
//         }
//       }
//     }

//     const videoGroupName = "Video Component";
//     const videoComponentLabel = "Do you want the Video component?";
//     let videoComponent = options(
//       videoComponentLabel,
//       generalOptions,
//       generalOptions.No,
//       inlineRadioOptionObj,
//       videoGroupName
//     );
//     let videoBanner = {};
//     if (videoComponent === generalOptions.Yes) {
//       videoBanner.sourceType = "video";
//       const videoSrcLabel = "Video Source Path";
//       const defaultVideoPath =
//         "https://aquarian.co.uk/wp-content/uploads/2018/04/home_final.mp4";
//       videoBanner.videoSourcePath = text(
//         videoSrcLabel,
//         defaultVideoPath,
//         videoGroupName
//       );
//       const videoAutoPlayLabel = "Auto Play";
//       const videoAutoPlayOptions = {
//         Yes: "yes",
//         No: "no"
//       };
//       videoBanner.videoAutoPlay = options(
//         videoAutoPlayLabel,
//         videoAutoPlayOptions,
//         videoAutoPlayOptions.Yes,
//         inlineRadioOptionObj,
//         videoGroupName
//       );
//       const videoControlsLabel = "Video Controls";
//       const videoControlsOptions = {
//         Yes: "yes",
//         No: "no"
//       };
//       videoBanner.videoControls = options(
//         videoControlsLabel,
//         videoControlsOptions,
//         videoControlsOptions.No,
//         inlineRadioOptionObj,
//         videoGroupName
//       );
//       const videoLoopLabel = "Loop the video";
//       const videoLoopOptions = {
//         Yes: "yes",
//         No: "no"
//       };
//       videoBanner.videoLoop = options(
//         videoLoopLabel,
//         videoLoopOptions,
//         videoLoopOptions.Yes,
//         inlineRadioOptionObj,
//         videoGroupName
//       );
//       videoBanner.imageWithContent = "no";
//       videoBanner.contentAlignment = "imagecont--leftcenter";
//       videoBanner.imageWithHeading = "Please enter your source heading";
//       videoBanner.imageWithSubHeading = "Please enter your image sub heading";
//       videoBanner.imageWithButton = "no";
//       videoBanner.headingColorValue = "#ffffff";
//       videoBanner.subHeadingColorValue = "#ffffff";
//       videoBanner.imageButton = "Default Button";
//       videoBanner.buttonType = "btn";
//     }

//     const cardLayout1ComponentGroupName = "Card Layout 1";
//     const cardLayout1ComponentLabel = "Do you want the card component?";
//     let cardLayout1Component = options(
//       cardLayout1ComponentLabel,
//       generalOptions,
//       generalOptions.Yes,
//       inlineRadioOptionObj,
//       cardLayout1ComponentGroupName
//     );
//     let cardWithText,
//       numberOfCardOutput = 2;
//     if (cardLayout1Component === generalOptions.Yes) {
//       cardWithText = {
//         cardType: select(`Card Type`, [1, 2], 1, cardLayout1ComponentGroupName),
//         cards: []
//       };

//       for (let i = 0; i < numberOfCardOutput; i++) {
//         cardWithText.cards[i] = {};
//         if (cardWithText.cardType == 1) {
//           cardWithText.cards[i].image = text(
//             `1st Card Type Image ${i + 1}`,
//             `https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg`,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].titleLabel = text(
//             `1st Card Type Heading Text ${i + 1}`,
//             appData.overlayCard.cards[i].titleLabel,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].overlay = text(
//             `1st Card Type Sub Text ${i + 1}`,
//             appData.overlayCard.cards[i].overlay,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].btnLabel = text(
//             `1st Card Type Button Text ${i + 1}`,
//             appData.overlayCard.cards[i].btnLabel,
//             cardLayout1ComponentGroupName
//           );
//         } else {
//           cardWithText.cards[i].image = text(
//             `2nd Card Type Image ${i + 1}`,
//             `https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg`,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].titleLabel = text(
//             `2nd Card Type Heading Text ${i + 1}`,
//             appData.cardWithText.cards[i].titleLabel,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].btnLabel = text(
//             `2nd Card Type Button Text ${i + 1}`,
//             appData.cardWithText.cards[i].btnLabel,
//             cardLayout1ComponentGroupName
//           );
//           cardWithText.cards[i].info = [
//             text(
//               `2nd Card Type Sub Text line(1) - ${i + 1}`,
//               appData.cardWithText.cards[i].info[0],
//               cardLayout1ComponentGroupName
//             ),
//             text(
//               `2nd Card Type Sub Text line(2) - ${i + 1}`,
//               appData.cardWithText.cards[i].info[1],
//               cardLayout1ComponentGroupName
//             )
//           ];
//         }
//       }
//     }

//     const cardLayout2ComponentGroupName = "Card Layout 2";
//     const cardLayout2ComponentLabel = "Do you want second card component?";
//     let cardLayout2Component = options(
//       cardLayout2ComponentLabel,
//       generalOptions,
//       generalOptions.Yes,
//       inlineRadioOptionObj,
//       cardLayout2ComponentGroupName
//     );
//     let cardWithText2,
//       numberOfCardOutput2 = 2;
//     if (cardLayout2Component === generalOptions.Yes) {
//       cardWithText2 = {
//         cardType: select(
//           `Card Type 2`,
//           [1, 2],
//           2,
//           cardLayout2ComponentGroupName
//         ),
//         cards: [],
//         gridStyle: {
//           marginBottom: `${number(
//             "bottom spacing",
//             "20",
//             {
//               range: true,
//               min: 5,
//               max: 200,
//               step: 5
//             },
//             cardLayout2ComponentGroupName
//           )}px`
//         }
//       };
//       for (let i = 0; i < numberOfCardOutput2; i++) {
//         cardWithText2.cards[i] = {};
//         if (cardWithText2.cardType == 1) {
//           cardWithText2.cards[i].image = text(
//             `New 1st Card Type Image ${i + 1}`,
//             `https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg`,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].titleLabel = text(
//             `New 1st Card Type Heading Text ${i + 1}`,
//             appData.overlayCard.cards[i].titleLabel,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].overlay = text(
//             `New 1st Card Type Sub Text ${i + 1}`,
//             appData.overlayCard.cards[i].overlay,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].btnLabel = text(
//             `New 1st Card Type Button Text ${i + 1}`,
//             appData.cardWithText.cards[i].btnLabel,
//             cardLayout2ComponentGroupName
//           );
//         } else {
//           cardWithText2.cards[i].image = text(
//             `New 2nd Card Type Image ${i + 1}`,
//             `https://upbeat-hawking-79b2b3.netlify.com/static/723013-1-mars-ped-780-x-465_v2-b5b0766b5827e8443c7622ab616330c6.jpg`,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].titleLabel = text(
//             `New 2nd Card Type Heading Text ${i + 1}`,
//             appData.cardWithText.cards[i].titleLabel,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].btnLabel = text(
//             `New 2nd Card Type Button Text ${i + 1}`,
//             appData.cardWithText.cards[i].btnLabel,
//             cardLayout2ComponentGroupName
//           );
//           cardWithText2.cards[i].info = [
//             text(
//               `New 2nd Card Type Text line(1) - ${i + 1}`,
//               appData.cardWithText.cards[i].info[0],
//               cardLayout2ComponentGroupName
//             ),
//             text(
//               `New 2nd Card Type Text line(2) - ${i + 1}`,
//               appData.cardWithText.cards[i].info[1],
//               cardLayout2ComponentGroupName
//             )
//           ];
//         }
//       }
//     }

//     const imageComponentGroupName = "Image Component";
//     const imageComponentLabel = "Do you want image component?";
//     let imageComponent = options(
//       imageComponentLabel,
//       generalOptions,
//       generalOptions.Yes,
//       inlineRadioOptionObj,
//       imageComponentGroupName
//     );
//     const sourceType = "image";

//     let contentAlignment,
//       imageWithHeading,
//       imageWithSubHeading,
//       imageWithContent,
//       imageWithButton,
//       headingColorValue,
//       subHeadingColorValue,
//       imageButton,
//       buttonType,
//       srcPath,
//       videoAutoPlay,
//       videoControls,
//       videoLoop,
//       contentStyle = {},
//       imageContentStyle = {},
//       imageStyle = {},
//       imageBanner = {};
//     if (imageComponent === generalOptions.Yes) {
//       const imageLabel = "Image source Path";
//       imageBanner.imageSourcePath = text(
//         imageLabel,
//         `https://www.pedigree.com/images/default-source/full-width-images/dog-with-boy.jpg?sfvrsn=84ff6f49_2`,
//         imageComponentGroupName
//       );
//       srcPath = imageBanner.imageSourcePath;

//       const imageWithContentLabel = "Image with content";
//       const imageWithContentOptions = {
//         Yes: "yes",
//         No: "no"
//       };

//       imageBanner.imageWithContent = options(
//         imageWithContentLabel,
//         imageWithContentOptions,
//         imageWithContentOptions.No,
//         inlineRadioOptionObj,
//         imageComponentGroupName
//       );
//       imageBanner.imageMaxWidth = number(
//         "Max width of image",
//         "1600px",
//         {
//           range: true,
//           min: 0,
//           max: 100,
//           step: 5
//         },
//         imageComponentGroupName
//       );

//       if (imageBanner.imageWithContent === "yes") {
//         const contentAlignmentLabel = "Align Content";
//         const contentAlignmentOptions = [
//           "imagecont--leftcenter",
//           "imagecont--middle",
//           "imagecont--rightcenter"
//         ];
//         imageBanner.contentAlignment = select(
//           contentAlignmentLabel,
//           contentAlignmentOptions,
//           "imagecont--rightcenter",
//           imageComponentGroupName
//         );

//         const imageWithHeadingLabel = "Image Heading";
//         imageBanner.imageWithHeading = text(
//           imageWithHeadingLabel,
//           "Heading",
//           imageComponentGroupName
//         );

//         const headingColorLabel = "Choose Heading Color";
//         const headingColorDefaultValue = "#ffffff";
//         imageBanner.headingColorValue = text(
//           headingColorLabel,
//           headingColorDefaultValue,
//           imageComponentGroupName
//         );

//         const imageWithSubHeadingLabel = "Image Sub Heading";
//         imageBanner.imageWithSubHeading = text(
//           imageWithSubHeadingLabel,
//           "Description",
//           imageComponentGroupName
//         );

//         const subHeadingColorLabel = "Choose sub Heading Color";
//         const subHeadingColorDefaultValue = "#ffffff";
//         imageBanner.subHeadingColorValue = text(
//           subHeadingColorLabel,
//           subHeadingColorDefaultValue,
//           imageComponentGroupName
//         );

//         const imageWithButtonLabel = "Button on Image";
//         const imageWithButtonOptions = {
//           Yes: "yes",
//           No: "no"
//         };
//         const imageWithButtonValue = "no";
//         imageBanner.imageWithButton = radios(
//           imageWithButtonLabel,
//           imageWithButtonOptions,
//           imageWithButtonValue,
//           imageComponentGroupName
//         );
//         imageBanner.contentStyle = JSON.parse(
//           htmlDecode(
//             text("Content Style", JSON.stringify({}), imageComponentGroupName)
//           )
//         );
//         imageBanner.imageContentStyle = JSON.parse(
//           htmlDecode(
//             text("Section Style", JSON.stringify({}), imageComponentGroupName)
//           )
//         );
//         imageBanner.imageStyle = JSON.parse(
//           htmlDecode(
//             text("Image Style", JSON.stringify({}), imageComponentGroupName)
//           )
//         );
//         if (imageBanner.imageWithButton === "yes") {
//           const imageButtonLabel = "Button Label";
//           imageBanner.imageButton = text(
//             imageButtonLabel,
//             appData.image.buttonLabel,
//             imageComponentGroupName
//           );

//           const buttonTypesLabel = "Button Types";
//           const buttonTypesOptions = [
//             "btn",
//             "btn--transparent",
//             "btn--blue",
//             "btn--guide"
//           ];
//           imageBanner.buttonType = select(
//             buttonTypesLabel,
//             buttonTypesOptions,
//             "btn",
//             imageComponentGroupName
//           );
//         }
//       }
//     }

//     const exploreComponentGroupName = "Explore Component";
//     const exploreComponentLabel = "Do you want image component?";
//     let exploreComponent = options(
//       exploreComponentLabel,
//       generalOptions,
//       generalOptions.No,
//       inlineRadioOptionObj,
//       exploreComponentGroupName
//     );
//     let exploreData = {};
//     if (exploreComponent === generalOptions.Yes) {
//       exploreData = {
//         label: text(
//           `Explore Heading`,
//           appData.explore.label,
//           exploreComponentGroupName
//         ),
//         lists: []
//       };
//       const numberOfListDefault = 4;
//       const numberOfListOption = {
//         range: false,
//         min: 1,
//         max: 5,
//         step: 1
//       };
//       const numberOfListOutput = number(
//         `Number of cards`,
//         numberOfListDefault,
//         numberOfListOption,
//         exploreComponentGroupName
//       );

//       let htmlDecode = input => {
//         var e = document.createElement("div");
//         e.innerHTML = input;
//         return e.childNodes[0].nodeValue;
//       };

//       for (let i = 0; i < numberOfListOutput; i++) {
//         exploreData.lists[i] = {};
//         exploreData.lists[i].label = text(
//           `label ${i + 1}`,
//           `label ${i + 1}`,
//           //   appData.explore.lists[i].label,
//           exploreComponentGroupName
//         );
//         exploreData.lists[i].svg = htmlDecode(
//           text(
//             `Svg Image ${i + 1}`,
//             appData.explore.lists[i].svg,
//             exploreComponentGroupName
//           )
//         );
//       }
//     }
//     console.log(exploreData);

//     const footerGroupName = "Footer";
//     const footerLabel = "Number of Footer";
//     const footerDefault = 2;
//     const footerOption = {
//       range: false,
//       min: 1,
//       max: 2,
//       step: 1
//     };
//     const footerOutput = number(
//       footerLabel,
//       footerDefault,
//       footerOption,
//       footerGroupName
//     );
//     const footer = [];
//     for (var j = 0; j < footerOutput; j++) {
//       const menuListLabel = `Footer ${j + 1} - Menu List Number ${j + 1}`;
//       const menuListDefault = j == 0 ? 7 : j === 1 ? 8 : 3;
//       const menuListNumberOption = {
//         range: false,
//         min: 5,
//         max: 10,
//         step: 1
//       };
//       let menuListOutput = number(
//         menuListLabel,
//         menuListDefault,
//         menuListNumberOption,
//         footerGroupName
//       );
//       footer.push({ menuListOutput: menuListOutput, navigation: [] });
//       let navigation = [];
//       for (let i = 0; i < footer[j].menuListOutput; i++) {
//         footer[j].navigation.push({
//           label: appData.footer[j].navigation[i].label,
//           labelName: `Footer ${j + 1} - Menu ${i + 1}`,
//           to: `/`
//         });
//         footer[j].navigation[i].label = text(
//           `${footer[j].navigation[i].labelName}`,
//           `${footer[j].navigation[i].label}`,
//           footerGroupName
//         );
//       }
//       footer[j]["className"] = select(
//         `Navigation Type ${j + 1}`,
//         ["footernav--link", "footernav--underlinelink"],
//         j === 1 ? "footernav--underlinelink" : "footernav--link",
//         footerGroupName
//       );
//     }
//     let socialMedia = radios(
//       `Social Media`,
//       { yes: "yes", no: "no" },
//       "yes",
//       footerGroupName
//     );

//     let finalOutPutProps = {
//       header: header,
//       bannerData: bannerData,
//       foodLabel: appData.foodLabel,
//       reviewrproduct: appData.reviewrproduct,
//       videoBanner: videoBanner,
//       defaultVideoPath: videoBanner.videoSourcePath,
//       cardWithText: cardWithText,
//       cardWithText2: cardWithText2,
//       srcPath: srcPath,
//       image: {
//         heading: imageWithHeading,
//         description: imageWithSubHeading,
//         buttonLabel: imageButton
//       },
//       imageBanner: imageBanner,
//       exploreData: exploreData,
//       footer: footer,
//       socialMedia: socialMedia
//     };

//     let allComponentGroup = `Header, Footer, SEO, appData, ${
//       carouselComponent === generalOptions.Yes
//         ? `BannerCarousel, Title, Reviewproduct, `
//         : ""
//     }
//     ${imageComponent == generalOptions.Yes ? `FullWidthImage, ` : ""}
//     ${videoComponent === generalOptions.Yes ? `Image, ` : ""}
//     ${
//       cardLayout1Component === generalOptions.Yes ||
//       cardLayout2Component === generalOptions.Yes
//         ? `Card, `
//         : ""
//     }${exploreComponent === generalOptions.Yes ? `Exploreproduct, ` : ""}
//     `;

//     let defaultCode = `
//             import React from 'react'
//             import { ${allComponentGroup.trim()} } from "../index"
//             const SecondPage = () => {
//             document.body.style.background = '${pagebackgroundColor}'
//             const extractedProps = ${JSON.stringify(finalOutPutProps)}
//             return (
//                 <>

//                   <SEO title="Home" />
//                   <Header
//                     {...extractedProps.header}
//                     menuSpacing={extractedProps.menuSpacing}
//                     logoImage={extractedProps.header.bgImage}
//                   /> <div className="home">${
//                     carouselComponent === generalOptions.Yes
//                       ? `
//                       <BannerCarousel data={extractedProps.bannerData.data} maxWidth={extractedProps.bannerData.maxWidth} />
//                       <Title {...appData.foodLabel} />
//                       <Reviewproduct {...appData.reviewrproduct} />
//                     `
//                       : ""
//                   }
//                   ${
//                     videoComponent === generalOptions.Yes
//                       ? `<Image
//                       src={extractedProps.videoBanner.videoSourcePath}
//                       sourceType={extractedProps.videoBanner.sourceType}
//                       imageWithContent={extractedProps.videoBanner.imageWithContent}
//                       imageWithHeading={extractedProps.videoBanner.imageWithHeading}
//                       headingColorValue={extractedProps.videoBanner.headingColorValue}
//                       imageWithSubHeading={extractedProps.videoBanner.imageWithSubHeading}
//                       subHeadingColorValue={extractedProps.videoBanner.subHeadingColorValue}
//                       imageWithButton={extractedProps.videoBanner.imageWithButton}
//                       imageButton={extractedProps.videoBanner.imageButton}
//                       buttonType={extractedProps.videoBanner.buttonType}
//                       contentAlignment={extractedProps.videoBanner.contentAlignment}
//                       contentStyle={extractedProps.videoBanner.contentStyle}
//                       imageContentStyle={extractedProps.videoBanner.imageContentStyle}
//                       imageStyle={extractedProps.videoBanner.imageStyle}
//                     />`
//                       : ""
//                   }
//                   ${
//                     cardLayout1Component === generalOptions.Yes
//                       ? `<Card {...extractedProps.cardWithText} />`
//                       : ""
//                   }
//                   ${
//                     cardLayout2Component === generalOptions.Yes
//                       ? `<Card {...extractedProps.cardWithText2} />`
//                       : ""
//                   }
//                   ${
//                     imageComponent === generalOptions.Yes
//                       ? `<FullWidthImage
//                       src={extractedProps.imageBanner.imageSourcePath}
//                       sourceType={extractedProps.imageBanner.sourceType}
//                       imageWithContent={extractedProps.imageBanner.imageWithContent}
//                       imageWithHeading={extractedProps.imageBanner.imageWithHeading}
//                       headingColorValue={extractedProps.imageBanner.headingColorValue}
//                       imageWithSubHeading={extractedProps.imageBanner.imageWithSubHeading}
//                       subHeadingColorValue={extractedProps.imageBanner.subHeadingColorValue}
//                       imageWithButton={extractedProps.imageBanner.imageWithButton}
//                       imageButton={extractedProps.imageBanner.imageButton}
//                       buttonType={extractedProps.imageBanner.buttonType}
//                       contentAlignment={extractedProps.imageBanner.contentAlignment}
//                       contentStyle={extractedProps.imageBanner.contentStyle}
//                       maxWidth={extractedProps.imageBanner.imageMaxWidth}
//                       imageContentStyle={extractedProps.imageBanner.imageContentStyle}
//                       imageStyle={extractedProps.imageBanner.imageStyle}

//                     />`
//                       : ""
//                   }
//                   ${
//                     exploreComponent === generalOptions.Yes
//                       ? `<Exploreproduct {...extractedProps.exploreData} />`
//                       : ""
//                   }
//                   <Footer data={extractedProps.footer} socialMedia={extractedProps.socialMedia} /></div>
//                 </>
//               )
//             }
//             export default SecondPage;`;
//     let codeOuputLabel = changeCount
//       ? `Code Output ${changeCount}`
//       : `Code Output`;
//     let codeOutput = text(codeOuputLabel, defaultCode, "Code");
//     changeCount++;
//     document.body.style.background = pagebackgroundColor;
//     return (
//       <>
//         <Header
//           {...header}
//           menuSpacing={menuSpacing}
//           logoImage={header.bgImage}
//         />
//         <div className="home">
//           {carouselComponent === generalOptions.Yes ? (
//             <>
//               <BannerCarousel
//                 data={bannerData.data}
//                 maxWidth={bannerData.maxWidth}
//               />
//               <Title {...appData.foodLabel} />
//               <Reviewproduct {...appData.reviewrproduct} />
//             </>
//           ) : (
//             ""
//           )}

//           {videoComponent === generalOptions.Yes ? (
//             <Image
//               src={videoBanner.videoSourcePath}
//               sourceType={videoBanner.sourceType}
//               imageWithContent={videoBanner.imageWithContent}
//               imageWithHeading={videoBanner.imageWithHeading}
//               headingColorValue={videoBanner.headingColorValue}
//               imageWithSubHeading={videoBanner.imageWithSubHeading}
//               subHeadingColorValue={videoBanner.subHeadingColorValue}
//               imageWithButton={videoBanner.imageWithButton}
//               imageButton={videoBanner.imageButton}
//               buttonType={videoBanner.buttonType}
//               contentAlignment={videoBanner.contentAlignment}
//               contentStyle={contentStyle}
//               imageContentStyle={imageContentStyle}
//               imageStyle={imageStyle}
//             />
//           ) : (
//             ""
//           )}
//           {cardLayout1Component === generalOptions.Yes ? (
//             <Card {...cardWithText} />
//           ) : (
//             ""
//           )}
//           {cardLayout2Component === generalOptions.Yes ? (
//             <Card {...cardWithText2} />
//           ) : (
//             ""
//           )}
//           {imageComponent === generalOptions.Yes ? (
//             <FullWidthImage
//               src={imageBanner.imageSourcePath}
//               sourceType={imageBanner.sourceType}
//               imageWithContent={imageBanner.imageWithContent}
//               imageWithHeading={imageBanner.imageWithHeading}
//               headingColorValue={imageBanner.headingColorValue}
//               imageWithSubHeading={imageBanner.imageWithSubHeading}
//               subHeadingColorValue={imageBanner.subHeadingColorValue}
//               imageWithButton={imageBanner.imageWithButton}
//               imageButton={imageBanner.imageButton}
//               buttonType={imageBanner.buttonType}
//               contentAlignment={imageBanner.contentAlignment}
//               contentStyle={imageBanner.contentStyle}
//               imageContentStyle={imageBanner.imageContentStyle}
//               maxWidth={imageBanner.imageMaxWidth}
//               imageStyle={imageBanner.imageStyle}
//             />
//           ) : (
//             ""
//           )}
//           {exploreComponent === generalOptions.Yes ? (
//             <Exploreproduct {...exploreData} />
//           ) : (
//             ""
//           )}
//           <Footer data={footer} socialMedia={socialMedia} />
//         </div>
//       </>
//     );
//   });
