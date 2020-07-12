import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { MatcherArt } from "./matcher-art"

declare var module

storiesOf("MatcherArt", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <MatcherArt text="MatcherArt" />
      </UseCase>
    </Story>
  ))
