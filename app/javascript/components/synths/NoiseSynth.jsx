import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export let instrument = new Tone.NoiseSynth({
  noise: {
    type: 'white'
  },
  envelope: {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.005
  }
})

export default class NoiseSynth extends React.Component {
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
    const { attack, decay, sustain, release } = instrument.envelope

    return (
      <div className="Effect">
        <ToggleSwitch value="Synth" current={on} handleClick={togglePlay} />

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Attack</h2>
            <Slider
              name={synth}
              property="attack"
              min="0"
              max="1"
              value={attack}
              handleValueChange={this.handleValueChange}
            />

            <h2>Decay</h2>
            <Slider
              name={synth}
              property="decay"
              min="0"
              max="1"
              value={decay}
              handleValueChange={this.handleValueChange}
            />

            <h2>Sustain</h2>
            <Slider
              name={synth}
              property="sustain"
              min="0"
              max="1"
              value={sustain}
              handleValueChange={this.handleValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
