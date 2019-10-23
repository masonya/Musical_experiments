import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeReverbValue,
      togglEffect,
      changeReverbPreDelayValue
    } = this.props

    return (
      <div className="Effect lilac">
        <div className="Title">
          <h1>Reverb</h1>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>Decay</p>
        <Slider
          name={name}
          min="0"
          max="2"
          value={effect.decay}
          handleValueChange={changeReverbValue}
        />
        <p>PreDelay</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.preDelay}
          handleValueChange={changeReverbPreDelayValue}
        />
        <ToggleSwitch value="Play" current={on} handleClick={togglEffect} />
      </div>
    )
  }
}
