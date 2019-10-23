import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

// import * as parts from '../tunes/parts'
import * as synths from '../../tunes/synths'
import * as sequences from '../../tunes/sequences'

// import PlaySwitch from '../components/PlaySwitch'
// import Distortion from '../components/effects/Distortion'
// import FeedbackDelay from '../components/effects/FeedbackDelay'
// import BitCrusher from '../components/effects/BitCrusher'
// import Reverb from '../components/effects/Reverb'
// import Tremolo from '../components/effects/Tremolo'
// import Freeverb from '../components/effects/Freeverb'
// import JcReverb from '../components/effects/JcReverb'

import PolySynth from '../synths/PolySynth'
import ToneSynth from '../synths/ToneSynth'

export default class addNotes extends React.Component {
  constructor(props) {
    super(props)

    let ambientSynth = synths.toneSynth()
    let leadSynth = synths.polySynth()

    // let synth = new Tone.PolySynth()
    // let synth1 = new Tone.Synth()
    // let synth2 = new Tone.Synth()
    // let synth3 = new Tone.Synth()
    // let synth4 = new Tone.Synth()

    this.state = {
      ambientSynth,
      leadSynth,
      // lastChange: Date.now(),
      // timeout: 0,
      // autoFilter: {
      //   effect: autoFilter,
      //   wet: 0,
      //   on: false
      // },
      // autoPanner: {
      //   effect: autoPanner,
      //   wet: 0,
      //   on: false
      // },
      // autoWah: {
      //   effect: autoWah,
      //   wet: 0,
      //   on: false
      // },
      // bitCrusher: {
      //   effect: bitCrusher,
      //   wet: 0,
      //   on: false
      // },
      // chebyshev: {
      //   effect: chebyshev,
      //   wet: 0,
      //   on: false
      // },
      // chorus: {
      //   effect: chorus,
      //   wet: 0,
      //   on: false
      // },
      // convolver: { convolver },
      // distortion: {
      //   effect: distortion,
      //   wet: 0,
      //   on: false
      // },
      // feedbackDelay: {
      //   effect: feedbackDelay,
      //   wet: 0,
      //   on: false
      // },
      // feedbackEffect: {
      //   effect: feedbackEffect,
      //   wet: 0,
      //   on: false
      // },
      // freeverb: {
      //   effect: freeverb,
      //   wet: 0,
      //   on: false
      // },
      // jcReverb: {
      //   effect: jcReverb,
      //   wet: 0,
      //   on: false
      // },
      // phaser: {
      //   effect: phaser,
      //   wet: 0,
      //   on: false
      // },
      // pingPongDelay: { pingPongDelay },
      // pitchShift: {
      //   effect: pitchShift,
      //   wet: 0,
      //   on: false
      // },
      // reverb: {
      //   effect: reverb,
      //   wet: 0,
      //   on: false
      // },
      // stereoWidener: {
      //   effect: stereoWidener,
      //   wet: 0,
      //   on: false
      // },
      // tremolo: {
      //   effect: tremolo,
      //   wet: 0,
      //   on: false
      // },
      // vibrato: {
      //   effect: vibrato,
      //   wet: 0,
      //   on: false
      // },
      // synth: {
      //   instrument: synth,
      //   on: false
      // },
      // synth2: {
      //   instrument: synth2,
      //   on: false
      // },
      // // pattern: {
      // //   pattern: pattern,
      // //   on: false
      // // },
      // loop1: {
      //   loop: loop1,
      //   on: false
      // },
      // loop2: {
      //   loop: loop2,
      //   on: false
      // },
      // loop3: {
      //   loop: loop3,
      //   on: false
      // },
      // loop4: {
      //   loop: loop4,
      //   on: false
      // },
      //
      // part1: {
      //   part: parts.part1(leadSynth),
      //   on: false
      // },
      // part3: {
      //   part: parts.part3(leadSynth),
      //   on: false
      // },
      sequence1: {
        sequence: sequences.sequence1(leadSynth),
        on: false,
        addNotes: false,
        id: 0
      },
      sequence2: {
        sequence: sequences.sequence2(leadSynth),
        on: false,
        addNotes: false,
        id: 0
      }
    }

    _.bindAll(
      this,
      'generateRandom',
      'getRandomArbitrary',
      'toggleLoop',
      'changeEffectWetValue',
      'changeDistortionValue',
      'togglEffect',
      'changeFeedbackDelayValue',
      'changeBitCrusherValue',
      'changeReverbValue',
      'changeTremoloFrequencyValue',
      'changeTremoloDepthValue',
      'changeFreeverbRoomSizeValue',
      'changeJcReverbValue',
      'changeReverbPreDelayValue',
      'changeSynthValue',
      'togglePart',
      'copyAll'
    )
  }

  toggleSeq(seqName) {
    let { sequence, on } = this.state[seqName]

    if (on == true) {
      sequence.stop()
    } else {
      sequence.start(0)
      console.log('yo')
      sequence.loop = true
    }

    this.setState({
      [`${seqName}`]: {
        sequence: sequence,
        on: !on
      }
    })

    Tone.Transport.bpm.value = 115
    Tone.Transport.start()
  }

  toggleNote1(seqName) {
    let { sequence, addNotes, on, id } = this.state[seqName]
    sequence.id = 1

    if (addNotes == true) {
      sequence.remove(1)
      sequence.add(1, ['C3', 'C3'])
    } else {
      sequence.remove(1)
      sequence.add(1, [['G3', 'G3', 'G3'], ['Eb4', 'Eb4']])
    }
    addNotes = !addNotes

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  toggleNote2(seqName) {
    let { sequence, addNotes, on, id } = this.state[seqName]
    sequence.id = 2

    if (addNotes == true) {
      sequence.remove(1)
      sequence.add(1, ['C3', 'C3'])
    } else {
      sequence.remove(1)
      sequence.add(1, [['G4', 'F#4'], ['F4'], ['E4', 'Eb4', 'D4']])
    }
    addNotes = !addNotes

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  toggleNote3(seqName) {
    let { sequence, addNotes, on, id } = this.state[seqName]
    sequence.id = 3

    if (addNotes == true) {
      sequence.remove(1)
      sequence.add(1, ['C3', 'C3'])
    } else {
      sequence.remove(1)
      sequence.add(1, [['G4'], ['E4', 'D4']])
    }
    addNotes = !addNotes

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  toggleNote4(seqName) {
    let { sequence, addNotes, on, id } = this.state[seqName]
    sequence.id = 4

    if (addNotes == true) {
      sequence.remove(1)
      sequence.add(1, ['C3', 'C3'])
    } else {
      sequence.remove(1)
      sequence.add(1, ['C4', 'D4', 'C4'])
    }
    addNotes = !addNotes

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  toggleNote5(sequence2) {
    let { sequence, addNotes, on, id } = this.state.sequence2
    sequence.id = 5

    if (addNotes == true) {
      sequence.remove(1)
    } else {
      sequence.remove(1)
      sequence.add(1, ['C4'])
    }
    addNotes = !addNotes

    this.setState({
      sequence2: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  toggleNote6(sequence2) {
    let { sequence, addNotes, on, id } = this.state.sequence2
    sequence.id = 6

    if (addNotes == true) {
      sequence.remove(2)
    } else {
      sequence.remove(2)
      sequence.add(2, ['D4'])
    }
    addNotes = !addNotes

    this.setState({
      sequence2: {
        sequence,
        on,
        addNotes,
        id
      }
    })
  }

  render() {
    let { sequence1, sequence2, ambientSynth, leadSynth } = this.state
    let {
      toggleSeq,
      toggleNote1,
      toggleNote2,
      toggleNote3,
      toggleNote4,
      toggleNote5,
      toggleNote6
    } = this

    return (
      <div>
        <div className="EffectContainer">
          <PolySynth
            synth="leadSynth"
            instrument={ambientSynth}
            on={sequence1.on}
            togglePlay={() => toggleSeq('sequence1')}
            changeSynthValue={changeSynthValue}
          />
          <PolySynth
            synth="leadSynth"
            instrument={ambientSynth}
            on={sequence2.on}
            togglePlay={() => toggleSeq('sequence2')}
            changeSynthValue={changeSynthValue}
          />
          <p>add notes 1</p>
          <PlaySwitch
            name="play"
            id={sequence1.id}
            value={sequence1.addNotes}
            handleToggleClick={() => this.toggleNote1('sequence1')}
          />
          <p>add notes 2</p>
          <PlaySwitch
            name="play"
            id={sequence1.id}
            value={sequence1.addNotes}
            handleToggleClick={() => this.toggleNote2('sequence1')}
          />
          <p>add notes 3</p>
          <PlaySwitch
            name="play"
            id={sequence1.id}
            value={sequence1.addNotes}
            handleToggleClick={() => this.toggleNote3('sequence1')}
          />
          <p>add notes 4</p>
          <PlaySwitch
            name="play"
            id={sequence1.id}
            value={sequence1.addNotes}
            handleToggleClick={() => this.toggleNote4('sequence1')}
          />
          <p>add notes 5</p>
          <PlaySwitch
            name="play"
            id={sequence2.id}
            value={sequence2.addNotes}
            handleToggleClick={() => this.toggleNote5('sequence2')}
          />
          <p>add notes 6</p>
          <PlaySwitch
            name="play"
            id={sequence2.id}
            value={sequence2.addNotes}
            handleToggleClick={() => this.toggleNote6('sequence2')}
          />
        </div>
      </div>
    )
  }
}
