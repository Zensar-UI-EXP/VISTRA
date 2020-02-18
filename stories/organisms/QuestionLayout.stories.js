import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, number, text, select, radios } from "@storybook/addon-knobs"
import { withA11y } from '@storybook/addon-a11y';
import appData from "../../src/assets/app";
import QuestionLayout from "../../src/components/organisms/questionLayout/questionLayout"

storiesOf("organisms/Question Card", module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add("default", () => {
    
    var questionLayout = {
      leftcontent: {},
      rightcontent: {},
      overallCustomStyle: {},
      contentCustomStyle: {}
    }
    questionLayout.leftcontent.heading = text(
      `Left Header`,
      appData.questionLayout.leftcontent.heading,
    );
    questionLayout.leftcontent.description = text(
      `Left Description`,
      appData.questionLayout.leftcontent.description,
    );
    questionLayout.leftcontent.buttonLabel = text(
      `Left Button Label`,
      appData.questionLayout.leftcontent.buttonLabel,
    );
    questionLayout.leftcontent.callLink = text(
      `Left Call Link`,
      appData.questionLayout.leftcontent.callLink,
    );
    questionLayout.rightcontent.heading = text(
      `Right Header`,
      appData.questionLayout.rightcontent.heading,
    );
    questionLayout.rightcontent.description = text(
      `Right Description`,
      appData.questionLayout.rightcontent.description,
    );
    questionLayout.rightcontent.buttonLabel = text(
      `Right Button Label`,
      appData.questionLayout.rightcontent.buttonLabel,
    );
    questionLayout.rightcontent.callLink = text(
      `Right Call Link`,
      appData.questionLayout.rightcontent.callLink,
    );
    questionLayout.overallCustomStyle.background = text(
      `list Footer Background`,
      `${appData.questionLayout.overallCustomStyle.background}`
    )
    questionLayout.contentCustomStyle.width  = text(
      `list Footer content width`,
      `${appData.questionLayout.contentCustomStyle.width}`
    )
    
    return <QuestionLayout {...questionLayout}  />
  })
