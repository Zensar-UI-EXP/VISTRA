import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, radios, select } from "@storybook/addon-knobs"
import BannerCarousel from "../../src/components/organisms/bannerCarousel/bannerCarousel"
import { withA11y } from '@storybook/addon-a11y';

storiesOf("organisms/BannerCarousel", module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add("default", () => {
    const defaultData = [
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__2-e636edb6b6dd93c02b6cbda3e806affa.jpg",
      },
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__1-3c6a146697468b4567d6765f1fa2280a.jpg",
      },
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__3-b479124e3b557361a08b23a05eecc60f.jpg",
      },
      {
        imge:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__4-70aed6a2264d081c3bbba9805a043288.jpg",
      },
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__5-5953e3da3f9fcc0c00ed822f379c2e5f.jpg",
      },
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__6-94a219276a96ab9cbbfc31813df9bbaf.jpg",
      },
      {
        image:
          "https://upbeat-hawking-79b2b3.netlify.com/static/banner__carousal__7-7b8277fc4965a3cdd6f95ca3ee6a4872.jpg",
      },
    ]
    const bannerListNumberOption = {
      range: false,
      min: 2,
      max: 7,
      step: 1,
    }
    const bannerListLabel = "Number of Banner"
    const bannerListDefault = 2
    let bannerListOutput = number(
      bannerListLabel,
      bannerListDefault,
      bannerListNumberOption
    )
    let data = []
    const bannerLabel = "Text on Banner"
    const bannerOptions = {
      Yes: "yes",
      No: "no",
    }
    for (var i = 0; i < bannerListOutput; i++) {
      data[i] = { image: text(`Image ${i + 1}`, defaultData[i].image) }
      data[i].isText = radios(`Text on Banner ${i + 1}`, bannerOptions, "no")
      if (data[i].isText == "yes") {
        data[i].heroText = text(`Hero Text ${i + 1}`, `Hero Text ${i + 1}`)
        data[i].subText = text(`Sub Text ${i + 1}`, `Sub Text ${i + 1}`)
        data[i].textAlign = select(
          `Text align ${i + 1}`,
          [
            "bannercarousel--left",
            "bannercarousel--center",
            "bannercarousel--right",
          ],
          "bannercarousel--center"
        )
        data[i].isButton = radios(
          `Button required ${i + 1}`,
          bannerOptions,
          "no"
        )
        if (data[i].isButton == "yes") {
          data[i].btnLabel = text(`Label ${i + 1}`, "Default Button")
          data[i].btnClassName = select(
            `Button ${i + 1}`,
            ["btn", "btn--transparent", "btn--blue"],
            "btn"
          )
        }
      }
    }

    return <BannerCarousel data={data} />
  })
