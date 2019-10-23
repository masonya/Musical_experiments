import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class FeedbackDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'feedbackDelay'
    const {
      effect,
      on,
      changeEffectWetValue,
      changeDistortionValue,
      changeFeedbackDelayValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect yellow">
        <div className="Title">
          <h3>Delay</h3>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.wet.value}
          handleValueChange={changeEffectWetValue}
        />
        <p>Max Delay</p>
        <Slider
          name={name}
          min="0"
          max="100"
          value={effect.maxDelay}
          handleValueChange={changeFeedbackDelayValue}
        />
        <div className="circle">
          <PlaySwitch
            name="play"
            value={on}
            current={on}
            handleToggleClick={togglEffect}
          />
        </div>
      </div>
    )
  }
}
