import React from "react"
import { storiesOf } from "@storybook/react"
import Image from "../../src/components/atoms/source/source"
import {
  withKnobs,
  text,
  radios,
  color,
  select,
  optionsKnob as options,
} from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';

import appData from "../../src/assets/app"

storiesOf("atoms/Source", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("default", () => {
    const inlineRadioOptionObj = {
      display: "inline-radio",
    }
    const sourceTypeLabel = "Source Type"
    const sourceOptions = {
      image: "image",
      video: "video",
    }
    const sourceType = options(
      sourceTypeLabel,
      sourceOptions,
      sourceOptions.image,
      inlineRadioOptionObj
    )

    let contentAlignment,
      imageWithHeading,
      imageWithSubHeading,
      imageWithContent,
      imageWithButton,
      headingColorValue,
      subHeadingColorValue,
      videoSourcePath,
      imageButton,
      buttonType,
      srcPath,
      videoAutoPlay,
      videoControls,
      videoLoop,
      contentStyle = {},
      imageContentStyle = {},
      imageStyle = {}
    if (sourceType === sourceOptions.image) {
      const imageLabel = "Image source Path"
      let imageSourcePath = text(
        imageLabel,
        `https://aquarian.co.uk/wp-content/uploads/2018/04/guide2fish_fish-5.png`
      )
      srcPath = imageSourcePath

      const imageWithContentLabel = "source with content"
      const imageWithContentOptions = {
        Yes: "yes",
        No: "no",
      }

      imageWithContent = options(
        imageWithContentLabel,
        imageWithContentOptions,
        imageWithContentOptions.Yes,
        inlineRadioOptionObj
      )

      if (imageWithContent === "yes") {
        const contentAlignmentLabel = "Align Content"
        const contentAlignmentOptions = [
          "imagecont--leftcenter",
          "imagecont--middle",
          "imagecont--rightcenter",
        ]
        contentAlignment = select(
          contentAlignmentLabel,
          contentAlignmentOptions,
          "imagecont--rightcenter"
        )

        const imageWithHeadingLabel = "source Heading"
        imageWithHeading = text(
          imageWithHeadingLabel,
          appData.fullWithImage.imageWithHeading
        )

        const headingColorLabel = "Choose Heading Color"
        const headingColorDefaultValue = "#ffffff"
        headingColorValue = text(headingColorLabel, headingColorDefaultValue)

        const imageWithSubHeadingLabel = "source Sub Heading"
        imageWithSubHeading = text(
          imageWithSubHeadingLabel,
          appData.fullWithImage.imageWithSubHeading
        )

        const subHeadingColorLabel = "Choose sub Heading Color"
        const subHeadingColorDefaultValue = "#ffffff"
        subHeadingColorValue = text(
          subHeadingColorLabel,
          subHeadingColorDefaultValue
        )

        const imageWithButtonLabel = "Button on source"
        const imageWithButtonOptions = {
          Yes: "yes",
          No: "no",
        }
        const imageWithButtonValue = "yes"
        imageWithButton = radios(
          imageWithButtonLabel,
          imageWithButtonOptions,
          imageWithButtonValue
        )
        function htmlDecode(input) {
          var e = document.createElement("div")
          e.innerHTML = input
          return e.childNodes[0].nodeValue
        }
        contentStyle = JSON.parse(
          htmlDecode(
            text(
              "Content Style",
              JSON.stringify({ position: "relative", padding: 30 })
            )
          )
        )
        imageContentStyle = JSON.parse(
          htmlDecode(
            text(
              "Section Style",
              JSON.stringify({ background: "#00A6DC", overflow: "hidden" })
            )
          )
        )
        imageStyle = JSON.parse(
          htmlDecode(
            text(
              "Image Style",
              JSON.stringify({
                position: "absolute",
                left: -96,
                width: "60%",
                marginTop: "calc((100vw / 10) * -1)",
              })
            )
          )
        )
        if (imageWithButton === "yes") {
          const imageButtonLabel = "Button Label"
          imageButton = text(imageButtonLabel, appData.image.buttonLabel)

          const buttonTypesLabel = "Button Types"
          const buttonTypesOptions = [
            "btn",
            "btn--transparent",
            "btn--blue",
            "btn--guide",
          ]
          buttonType = select(
            buttonTypesLabel,
            buttonTypesOptions,
            "btn--guide"
          )
        }
      }
    } else {
      const videoSrcLabel = "Video Source Path"
      videoSourcePath = text(videoSrcLabel, appData.defaultVideoPath)
      srcPath = videoSourcePath

      const videoAutoPlayLabel = "Video comp - Auto Play"
      const videoAutoPlayOptions = {
        Yes: "yes",
        No: "no",
      }
      videoAutoPlay = options(
        videoAutoPlayLabel,
        videoAutoPlayOptions,
        videoAutoPlayOptions.Yes,
        inlineRadioOptionObj
      )

      const videoControlsLabel = "Video comp - Controls"
      const videoControlsOptions = {
        Yes: "yes",
        No: "no",
      }
      videoControls = options(
        videoControlsLabel,
        videoControlsOptions,
        videoControlsOptions.No,
        inlineRadioOptionObj
      )

      const videoLoopLabel = "Video comp -loop the video"
      const videoLoopOptions = {
        Yes: "yes",
        No: "no",
      }
      videoLoop = options(
        videoLoopLabel,
        videoLoopOptions,
        videoLoopOptions.Yes,
        inlineRadioOptionObj
      )

      imageWithContent = "no"
      contentAlignment = "imagecont--leftcenter"
      //   imageWithHeading = "Please enter your source heading"
      //   imageWithSubHeading = "Please enter your image sub heading"
      imageWithButton = "no"
      headingColorValue = "#ffffff"
      subHeadingColorValue = "#ffffff"
      imageButton = "Default Button"
      buttonType = "btn"
    }

    return (
      <Image
        src={srcPath}
        sourceType={sourceType}
        imageWithContent={imageWithContent}
        imageWithHeading={imageWithHeading}
        headingColorValue={headingColorValue}
        imageWithSubHeading={imageWithSubHeading}
        subHeadingColorValue={subHeadingColorValue}
        imageWithButton={imageWithButton}
        imageButton={imageButton}
        buttonType={buttonType}
        contentAlignment={contentAlignment}
        videoAutoPlay={videoAutoPlay}
        videoControls={videoControls}
        videoLoop={videoLoop}
        contentStyle={contentStyle}
        imageContentStyle={imageContentStyle}
        imageStyle={imageStyle}
      />
    )
  })
