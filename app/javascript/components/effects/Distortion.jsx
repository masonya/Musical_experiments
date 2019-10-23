import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'distortion'

    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeDistortionValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect green">
        <div className="Title">
          <h3>Distortion</h3>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          property="wet"
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>Distortion</p>
        <Slider
          name={name}
          property="distortion"
          min="0"
          max="100"
          value={effect.distortion}
          handleValueChange={changeDistortionValue}
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
