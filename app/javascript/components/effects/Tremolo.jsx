import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'tremolo'
    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeTremoloFrequencyValue,
      changeTremoloDepthValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect pink">
        <div className="Title">
          <h1>Tremolo</h1>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>Frequency</p>
        <Slider
          name={name}
          min="0"
          max="20"
          value={effect.frequency}
          handleValueChange={changeTremoloFrequencyValue}
        />
        <p>Depth</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.depth}
          handleValueChange={changeTremoloDepthValue}
        />
        <ToggleSwitch value="Play" current={on} handleClick={togglEffect} />
      </div>
    )
  }
}
