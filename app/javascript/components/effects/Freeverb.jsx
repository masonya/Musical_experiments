import React from 'react'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'

export default class Freeverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'freeverb'
    const {
      effect,
      wet,
      on,
      changeEffectWetValue,
      changeFreeverbRoomSizeValue,
      togglEffect
    } = this.props

    return (
      <div className="Effect blue">
        <div className="Title">
          <h3>Freeverb</h3>
        </div>
        <p>Wet</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={wet}
          handleValueChange={changeEffectWetValue}
        />
        <p>RoomSize</p>
        <Slider
          name={name}
          min="0"
          max="1"
          value={effect.roomSize}
          handleValueChange={changeFreeverbRoomSizeValue}
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
