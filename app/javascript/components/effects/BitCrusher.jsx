import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'bitCrusher'
    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeBitCrusherValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect orange">
        <div className="Title">
          <h3>BitCrusher</h3>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>Bits</p>
        <Slider
          name={name}
          min="0"
          max="8"
          value={effect.bits}
          handleValueChange={changeBitCrusherValue}
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
