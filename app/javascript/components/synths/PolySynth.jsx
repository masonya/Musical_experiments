import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../PlaySwitch'
import ToggleSwitch from '../ToggleSwitch'
import Slider from '../Slider'
import Knob from '../Knob'
// import ButtonSet from '../ButtonSet'

export default class PolySynth extends React.Component {
  constructor(props) {
    super(props)
    _.bindAll(this, 'handleValueChange')
  }

  handleValueChange(name, property, value) {
    const { changeSynthValue } = this.props
    changeSynthValue(name, property, value)
  }

  render() {
    const { synth, on, togglePlay } = this.props
    // const { attack, decay, sustain, release } = instrument.envelope

    return (
      <div>
        <PlaySwitch
          name="play"
          value={on}
          current={on}
          handleToggleClick={togglePlay}
        />

        <div className="controlsContainer">
          <div className="controlsRow"></div>
        </div>
      </div>
    )
  }
}
