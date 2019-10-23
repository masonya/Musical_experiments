import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class jcReverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'jcReverb'
    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeJcReverbValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect blue">
        <div className="Title">
          <h1>JcReverb</h1>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>roomSize</p>
        <Slider
          name={name}
          min="0"
          max="8"
          value={effect.roomSize}
          handleValueChange={changeJcReverbValue}
        />
        <ToggleSwitch value="Play" current={on} handleClick={togglEffect} />
      </div>
    )
  }
}
