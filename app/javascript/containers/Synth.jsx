import _ from "lodash";
import React from "react";
import Tone from "tone";

import * as parts from "../tunes/parts";
import * as synths from "../tunes/synths";
import * as sequences from "../tunes/sequences";

import PlaySwitch from "../components/PlaySwitch";
import ToggleSwitch from "../components/ToggleSwitch";
import Distortion from "../components/effects/Distortion";
import FeedbackDelay from "../components/effects/FeedbackDelay";
import BitCrusher from "../components/effects/BitCrusher";
import Reverb from "../components/effects/Reverb";
import Tremolo from "../components/effects/Tremolo";
import Freeverb from "../components/effects/Freeverb";
import JcReverb from "../components/effects/JcReverb";

import PolySynth from "../components/synths/PolySynth";
import ToneSynth from "../components/synths/ToneSynth";

export default class Synth extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.wet);

    let ambientSynth = synths.toneSynth();
    let leadSynth = synths.polySynth();

    let autoFilter = new Tone.AutoFilter({
      frequency: 1,
      type: "sine",
      depth: 1,
      baseFrequency: 200,
      octaves: 2.6,
      filter: {
        type: "lowpass",
        rolloff: -12,
        Q: 1
      }
    });

    let autoPanner = new Tone.AutoPanner({
      frequency: 15,
      type: "sine",
      depth: 1
    });

    let autoWah = new Tone.AutoWah({
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: {
        attack: 0.3,
        release: 0.5
      }
    });

    let bitCrusher = new Tone.BitCrusher({
      bits: 0
    });

    let chebyshev = new Tone.Chebyshev({
      order: 50,
      oversample: "none"
    });

    let chorus = new Tone.Chorus({
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      type: "sine",
      spread: 180
    });

    let convolver = new Tone.Convolver({
      onload: Tone.noOp,
      normalize: true
    });

    let distortion = new Tone.Distortion({
      distortion: 0,
      oversample: "4x"
    });

    let feedbackDelay = new Tone.FeedbackDelay({
      delayTime: "4n",
      maxDelay: 0.8
    });

    let feedbackEffect = new Tone.FeedbackEffect({
      feedback: 0.125
    });

    let freeverb = new Tone.Freeverb({
      roomSize: 0.7,
      dampening: 3000
    });

    let jcReverb = new Tone.JCReverb({
      roomSize: 0.5
    });

    let phaser = new Tone.Phaser({
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    });

    let pingPongDelay = new Tone.PingPongDelay({
      delayTime: 0.25,
      maxDelayTime: 1
    });

    let pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0
    });

    let reverb = new Tone.Reverb({
      decay: 0,
      preDelay: 0
    });

    let stereoWidener = new Tone.StereoWidener({
      width: 0.5
    });

    let tremolo = new Tone.Tremolo({
      frequency: 10,
      type: "sine",
      depth: 0,
      spread: 360
    });

    let vibrato = new Tone.Vibrato({
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: "sine"
    });

    autoFilter.wet.value = 0;
    autoPanner.wet.value = 0;
    autoWah.wet.value = 0;
    bitCrusher.wet.value = 0;
    chebyshev.wet.value = 0;
    chorus.wet.value = 0;
    convolver.wet.value = 0;
    distortion.wet.value = 0;
    feedbackDelay.wet.value = 0;
    feedbackEffect.wet.value = 0;
    freeverb.wet.value = 0;
    jcReverb.wet.value = 0;
    phaser.wet.value = 0;
    pingPongDelay.wet.value = 0;
    pitchShift.wet.value = 0;
    reverb.wet.value = 0;
    stereoWidener.wet.value = 0;
    tremolo.wet.value = 0;
    vibrato.wet.value = 0;

    let synth = new Tone.PolySynth();
    let synth1 = new Tone.Synth();
    let synth2 = new Tone.Synth();
    let synth3 = new Tone.Synth();
    let synth4 = new Tone.Synth();

    synth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    );

    synth2.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    );

    let loop1 = new Tone.Loop(function(time) {
      ambientSynth.triggerAttackRelease("C2", "8n", time);
    }, "4n");

    let loop2 = new Tone.Loop(function(time) {
      ambientSynth.triggerAttackRelease("E2", "16n", time);
    }, "4n");

    let loop3 = new Tone.Loop(function(time) {
      leadSynth.triggerAttackRelease("C4", "1m", time);
    }, "1m");

    let loop4 = new Tone.Loop(function(time) {
      leadSynth.triggerAttackRelease("A2", "16n", time);
    }, "4n");

    ambientSynth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    );

    leadSynth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    );

    this.state = {
      ambientSynth,
      leadSynth,
      lastChange: Date.now(),
      timeout: 0,
      autoFilter: {
        effect: autoFilter,
        wet: 0,
        on: false
      },
      autoPanner: {
        effect: autoPanner,
        wet: 0,
        on: false
      },
      autoWah: {
        effect: autoWah,
        wet: 0,
        on: false
      },
      bitCrusher: {
        effect: bitCrusher,
        wet: 0,
        on: false
      },
      chebyshev: {
        effect: chebyshev,
        wet: 0,
        on: false
      },
      chorus: {
        effect: chorus,
        wet: 0,
        on: false
      },
      convolver: { convolver },
      distortion: {
        effect: distortion,
        wet: 0,
        on: false
      },
      feedbackDelay: {
        effect: feedbackDelay,
        wet: 0,
        on: false
      },
      feedbackEffect: {
        effect: feedbackEffect,
        wet: 0,
        on: false
      },
      freeverb: {
        effect: freeverb,
        wet: 0,
        on: false
      },
      jcReverb: {
        effect: jcReverb,
        wet: 0,
        on: false
      },
      phaser: {
        effect: phaser,
        wet: 0,
        on: false
      },
      pingPongDelay: { pingPongDelay },
      pitchShift: {
        effect: pitchShift,
        wet: 0,
        on: false
      },
      reverb: {
        effect: reverb,
        wet: 0,
        on: false
      },
      stereoWidener: {
        effect: stereoWidener,
        wet: 0,
        on: false
      },
      tremolo: {
        effect: tremolo,
        wet: 0,
        on: false
      },
      vibrato: {
        effect: vibrato,
        wet: 0,
        on: false
      },
      synth: {
        instrument: synth,
        on: false
      },
      synth2: {
        instrument: synth2,
        on: false
      },
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },

      part1: {
        part: parts.part1(leadSynth),
        on: false
      },
      part2: {
        part: parts.part2(leadSynth),
        on: false
      },
      part3: {
        part: parts.part3(leadSynth),
        on: false
      },
      sequence1: {
        sequence: sequences.sequence1(leadSynth),
        on: false,
        addNotes1: false,
        addNotes2: false,
        addNotes3: false,
        addNotes4: false,
        addNotes5: false,
        addNotes6: false,
        id: 0
      },
      sequence2: {
        sequence: sequences.sequence2(leadSynth),
        on: false,
        a1: false,
        a2: false,
        a3: false,
        a4: false,
        a5: false,
        b1: false,
        b2: false,
        b3: false,
        b4: false,
        b5: false,
        c1: false,
        c2: false,
        c3: false,
        c4: false,
        c5: false
      }
    };

    _.bindAll(
      this,
      "generateRandom",
      "getRandomArbitrary",
      "toggleLoop",
      "changeEffectWetValue",
      "changeDistortionValue",
      "togglEffect",
      "changeFeedbackDelayValue",
      "changeBitCrusherValue",
      "changeReverbValue",
      "changeTremoloFrequencyValue",
      "changeTremoloDepthValue",
      "changeFreeverbRoomSizeValue",
      "changeJcReverbValue",
      "changeReverbPreDelayValue",
      "changeSynthValue",
      "togglePart",
      "toggleSeq",
      "copyAll",
      "toggleNote1",
      "toggleNote2",
      "toggleNote3",
      "toggleNote4",
      "toggleNote5",
      "toggleNote6",
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5"
    );
  }

  changeSynthValue(synthName, effectName, value) {
    let synth = this.state[synthName];
    let envelope = synth.instrument.envelope;
    envelope[effectName] = value;

    this.setState({
      [`${effectName}`]: {
        oscillator: synth.instrument.oscillator,
        envelope: envelope
      }
    });
  }

  componentDidMount() {
    // this.generateRandom()

    let { effect, wet, on } = this.state.distortion;

    console.log(this.props);

    effect.wet.value = on ? this.props.distortion.wet : 0;
    effect.distortion = this.props.distortion.effect.distortion;

    this.setState({
      distortion: {
        wet: this.props.distortion.wet,
        effect,
        on
      }
    });
  }

  copyAll() {
    const { distortion } = this.state;
    const data = {
      distortion: {
        effect: {
          distortion: distortion.effect.distortion
        },
        wet: distortion.wet,
        on: distortion.on
      }
    };
    console.log(JSON.stringify(data));
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  generateRandom() {
    const { lastChange, timeout } = this.state;

    if (Date.now() - lastChange >= timeout) {
      const random = this.getRandomArbitrary(100, 3000);
      this.setState({
        lastChange: Date.now(),
        timeout: random
      });

      this.changeDistortionValue("distortion", random / 30);
    }

    setTimeout(() => this.generateRandom(), timeout);
  }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName];

    on == true ? loop.stop() : loop.start("0m");

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    });
  }

  togglePart(partName) {
    let { part, on } = this.state[partName];

    if (on == true) {
      part.stop();
    } else {
      part.start(0);
      console.log("yo");
      part.loop = true;
    }

    this.setState({
      [`${partName}`]: {
        part: part,
        on: !on
      }
    });

    Tone.Transport.bpm.value = 115;
    Tone.Transport.start();
  }

  toggleSeq(seqName) {
    let { sequence, on } = this.state[seqName];

    if (on == true) {
      sequence.stop();
    } else {
      sequence.start();
      console.log("yo");
    }

    this.setState({
      [`${seqName}`]: {
        sequence: sequence,
        on: !on
      }
    });

    Tone.Transport.bpm.value = 115;
    Tone.Transport.start();
  }

  toggleNote1(seqName) {
    let { sequence, addNotes1, on } = this.state[seqName];

    if (sequence.addNotes1 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes1 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, [["G3", "G3", "G3"], ["Eb4", "Eb4"]]);
      sequence.addNotes1 = true;
    }
    addNotes1 = !addNotes1;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes1
      }
    });
  }

  toggleNote2(seqName) {
    let { sequence, addNotes2, on } = this.state[seqName];

    if (sequence.addNotes2 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes2 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, [["G4", "F#4"], ["F4"], ["E4", "Eb4", "D4"]]);
      sequence.addNotes2 = true;
    }
    addNotes2 = !addNotes2;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes2
      }
    });
  }

  toggleNote3(seqName) {
    let { sequence, addNotes3, on } = this.state[seqName];

    if (sequence.addNotes3 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes3 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, [["G4"], ["E4", "D4"]]);
      sequence.addNotes3 = true;
    }
    addNotes3 = !addNotes3;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes3
      }
    });
  }

  toggleNote4(seqName) {
    let { sequence, addNotes4, on } = this.state[seqName];

    if (sequence.addNotes4 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes4 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, ["C4", "D4", "C4"]);
      sequence.addNotes4 = true;
    }
    addNotes4 = !addNotes4;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes4
      }
    });
  }

  toggleNote5(seqName) {
    let { sequence, addNotes5, on } = this.state[seqName];

    if (sequence.addNotes5 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes5 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, [["E4", "D4"], ["A4"]]);
      sequence.addNotes5 = true;
    }
    addNotes5 = !addNotes5;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes5
      }
    });
  }

  toggleNote6(seqName) {
    let { sequence, addNotes6, on } = this.state[seqName];

    if (sequence.addNotes6 == true) {
      sequence.remove(1);
      sequence.add(1, ["C3", "C3"]);
      sequence.addNotes6 = false;
    } else {
      sequence.remove(1);
      sequence.add(1, ["A4", "B4", "A4"]);
      sequence.addNotes6 = true;
    }
    addNotes6 = !addNotes6;

    this.setState({
      [`${seqName}`]: {
        sequence,
        on,
        addNotes6
      }
    });
  }

  A1(seqName) {
    let save = this.state[seqName];
    let { sequence, a1, on } = save;

    if (sequence.a1 == true) {
      sequence.remove(0);
      sequence.a1 = false;
    } else {
      sequence.add(0, ["G4"]);
      sequence.a1 = true;
    }
    save.a1 = !save.a1;

    this.setState({
      [`${seqName}`]: save
    });
  }

  A2(seqName) {
    let save = this.state[seqName];
    let { sequence, a2, on } = save;

    if (sequence.a2 == true) {
      sequence.remove(1);
      sequence.a2 = false;
    } else {
      sequence.add(1, ["G4"]);
      sequence.a2 = true;
    }
    save.a2 = !save.a2;

    this.setState({
      [`${seqName}`]: save
    });
  }

  A3(seqName) {
    let save = this.state[seqName];
    let { sequence, a3, on } = save;

    if (sequence.a3 == true) {
      sequence.remove(2);
      sequence.a3 = false;
    } else {
      sequence.add(2, ["G4"]);
      sequence.a3 = true;
    }
    save.a3 = !save.a3;

    this.setState({
      [`${seqName}`]: save
    });
  }

  A4(seqName) {
    let save = this.state[seqName];
    let { sequence, a4, on } = save;

    if (sequence.a4 == true) {
      sequence.remove(3);
      sequence.a4 = false;
    } else {
      sequence.add(3, ["G4"]);
      sequence.a4 = true;
    }
    save.a4 = !save.a4;

    this.setState({
      [`${seqName}`]: save
    });
  }

  A5(seqName) {
    let save = this.state[seqName];
    let { sequence, a5, on } = save;

    if (sequence.a5 == true) {
      sequence.remove(4);
      sequence.a5 = false;
    } else {
      sequence.add(4, ["G4"]);
      sequence.a5 = true;
    }
    save.a5 = !save.a5;

    this.setState({
      [`${seqName}`]: save
    });
  }

  B1(seqName) {
    let save = this.state[seqName];
    let { sequence, b1, on } = save;

    if (sequence.b1 == true) {
      sequence.remove(0);
      sequence.b1 = false;
    } else {
      sequence.add(0, ["E4"]);
      sequence.b1 = true;
    }
    save.b1 = !save.b1;

    this.setState({
      [`${seqName}`]: save
    });
  }

  B2(seqName) {
    let save = this.state[seqName];
    let { sequence, b2, on } = save;

    if (sequence.b2 == true) {
      sequence.remove(1);
      sequence.b2 = false;
    } else {
      sequence.add(1, ["E4"]);
      sequence.b2 = true;
    }
    save.b2 = !save.b2;

    this.setState({
      [`${seqName}`]: save
    });
  }

  B3(seqName) {
    let save = this.state[seqName];
    let { sequence, b3, on } = save;

    if (sequence.b3 == true) {
      sequence.remove(2);
      sequence.b3 = false;
    } else {
      sequence.add(2, ["E4"]);
      sequence.b3 = true;
    }
    save.b3 = !save.b3;

    this.setState({
      [`${seqName}`]: save
    });
  }

  B4(seqName) {
    let save = this.state[seqName];
    let { sequence, b4, on } = save;

    if (sequence.b4 == true) {
      sequence.remove(3);
      sequence.b4 = false;
    } else {
      sequence.add(3, ["E4"]);
      sequence.b4 = true;
    }
    save.b4 = !save.b4;

    this.setState({
      [`${seqName}`]: save
    });
  }

  B5(seqName) {
    let save = this.state[seqName];
    let { sequence, b5, on } = save;

    if (sequence.b5 == true) {
      sequence.remove(4);
      sequence.b5 = false;
    } else {
      sequence.add(4, ["E4"]);
      sequence.b5 = true;
    }
    save.b5 = !save.b5;

    this.setState({
      [`${seqName}`]: save
    });
  }

  C1(seqName) {
    let save = this.state[seqName];
    let { sequence, c1, on } = save;

    if (sequence.c1 == true) {
      sequence.remove(0);
      sequence.c1 = false;
    } else {
      sequence.add(0, ["D4"]);
      sequence.c1 = true;
    }
    save.c1 = !save.c1;

    this.setState({
      [`${seqName}`]: save
    });
  }

  C2(seqName) {
    let save = this.state[seqName];
    let { sequence, c2, on } = save;

    if (sequence.c2 == true) {
      sequence.remove(1);
      sequence.c2 = false;
    } else {
      sequence.add(1, ["D4"]);
      sequence.c2 = true;
    }
    save.c2 = !save.c2;

    this.setState({
      [`${seqName}`]: save
    });
  }

  C3(seqName) {
    let save = this.state[seqName];
    let { sequence, c3, on } = save;

    if (sequence.c3 == true) {
      sequence.remove(2);
      sequence.c3 = false;
    } else {
      sequence.add(2, ["D4"]);
      sequence.c3 = true;
    }
    save.c3 = !save.c3;

    this.setState({
      [`${seqName}`]: save
    });
  }

  C4(seqName) {
    let save = this.state[seqName];
    let { sequence, c4, on } = save;
    if (sequence.c4 == true) {
      sequence.remove(3);
      sequence.c4 = false;
    } else {
      sequence.add(3, ["D4"]);
      sequence.c4 = true;
    }
    save.c4 = !save.c4;

    this.setState({
      [`${seqName}`]: save
    });
  }

  C5(seqName) {
    let save = this.state[seqName];
    let { sequence, c5, on } = save;

    if (sequence.c5 == true) {
      sequence.remove(4);
      sequence.c5 = false;
    } else {
      sequence.add(4, ["D4"]);
      sequence.c5 = true;
    }

    save.c5 = !save.c5;

    this.setState({
      [`${seqName}`]: save
    });
  }

  togglEffect(effectName) {
    let { effect, wet, on } = this.state[effectName];

    effect.wet.value = on == true ? 0 : wet;
    on = !on;

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    });
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName];

    effect.wet.value = on == true ? value : 0;

    wet = value;

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    });
  }

  changeDistortionValue(effectName, value) {
    let { effect, wet, on } = this.state.distortion;

    effect.distortion = value;

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    });
  }

  changeFeedbackDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.feedbackDelay;

    effect.maxDelay = value;

    this.setState({
      feedbackDelay: {
        effect,
        wet,
        on
      }
    });
  }

  changeBitCrusherValue(effectName, value) {
    let { effect, wet, on } = this.state.bitCrusher;

    effect.bits = value;

    this.setState({
      bitCrusher: {
        effect,
        wet,
        on
      }
    });
  }

  changeJcReverbValue(effectName, value) {
    let { effect, wet, on } = this.state.jcReverb;

    effect.roomSize = value;

    this.setState({
      jcReverb: {
        effect,
        wet,
        on
      }
    });
  }

  changeReverbValue(effectName, value) {
    let { effect, wet, on } = this.state.reverb;

    effect.decay = value;

    this.setState({
      reverb: {
        effect,
        wet,
        on
      }
    });
  }

  changeReverbPreDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.reverb;

    effect.preDelay = value;

    this.setState({
      reverb: {
        effect,
        wet,
        on
      }
    });
  }

  changeFreeverbRoomSizeValue(effectName, value) {
    let { effect, wet, on } = this.state.freeverb;

    effect.roomSize.value = value;

    this.setState({
      freeverb: {
        effect,
        wet,
        on
      }
    });
  }

  changeTremoloFrequencyValue(effectName, value) {
    let { effect, wet, on } = this.state.tremolo;

    effect.frequency.value = value;

    this.setState({
      tremolo: {
        effect,
        wet,
        on
      }
    });
  }

  changeTremoloDepthValue(effectName, value) {
    let { effect, wet, on } = this.state.tremolo;

    effect.depth.value = value;

    this.setState({
      tremolo: {
        effect,
        wet,
        on
      }
    });
  }

  render() {
    let {
      distortion,
      synth,
      synth2,
      loop1,
      loop2,
      loop3,
      loop4,

      part1,
      part2,
      part3,
      sequence1,
      sequence2,
      ambientSynth,
      leadSynth
    } = this.state;
    let {
      togglEffect,
      changeSynthValue,
      togglePart,
      toggleSeq,
      toggleNote1,
      toggleNote2,
      toggleNote3,
      toggleNote4,
      toggleNote5,
      toggleNote6,
      A1,
      A2,
      A3,
      A4,
      A5,
      B1,
      B2,
      B3,
      B4,
      B5,
      C1,
      C2,
      C3,
      C4,
      C5
    } = this;

    return (
      <div>
        <div className="main">
          <div className="Container">
            <h1>Sequenser. Add the notes!</h1>

            <div className="addNotes">
              <div className="addNotesToggle">
                <PolySynth
                  synth="leadSynth"
                  instrument={ambientSynth}
                  on={sequence1.on}
                  togglePlay={() => toggleSeq("sequence1")}
                  changeSynthValue={changeSynthValue}
                />
              </div>
              <div className="addNotesA1">
                <ToggleSwitch
                  value="E4 D4 A4"
                  current={sequence1.addNotes5}
                  handleClick={() => this.toggleNote5("sequence1")}
                />
              </div>

              <div className="addNotesA2">
                <ToggleSwitch
                  value="G4 E4 D4"
                  current={sequence1.addNotes3}
                  handleClick={() => this.toggleNote3("sequence1")}
                />
              </div>

              <div className="addNotesA3">
                <ToggleSwitch
                  value="G4 F#4 F4 E4 Eb4 D4"
                  current={sequence1.addNotes2}
                  handleClick={() => this.toggleNote2("sequence1")}
                />
              </div>

              <div className="addNotesB1">
                <ToggleSwitch
                  value="C4 D4 C4"
                  current={sequence1.addNotes4}
                  handleClick={() => this.toggleNote4("sequence1")}
                />
              </div>

              <div className="addNotesA3">
                <ToggleSwitch
                  value="G3 G3 G3 Eb4 Eb4"
                  current={sequence1.addNotes1}
                  handleClick={() => this.toggleNote1("sequence1")}
                />
              </div>

              <div className="addNotesB1">
                <ToggleSwitch
                  value="A4 B4 A4"
                  current={sequence1.addNotes6}
                  handleClick={() => this.toggleNote6("sequence1")}
                />
              </div>
            </div>
            <div className="header">
              <h1>Sequenser. Make the rhythm!</h1>
            </div>
            <div className="newNotes">
              <div className="addNotesToggle">
                <PolySynth
                  synth="leadSynth"
                  instrument={ambientSynth}
                  on={sequence2.on}
                  togglePlay={() => toggleSeq("sequence2")}
                  changeSynthValue={changeSynthValue}
                />
              </div>

              <div className="newNotesA1">
                <ToggleSwitch
                  value="G4"
                  current={sequence2.a1}
                  handleClick={() => this.A1("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="G4"
                  current={sequence2.a2}
                  handleClick={() => this.A2("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="G4"
                  current={sequence2.a3}
                  handleClick={() => this.A3("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="G4"
                  current={sequence2.a4}
                  handleClick={() => this.A4("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="G4"
                  current={sequence2.a5}
                  handleClick={() => this.A5("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="E4"
                  current={sequence2.b1}
                  handleClick={() => this.B1("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="E4"
                  current={sequence2.b2}
                  handleClick={() => this.B2("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="E4"
                  current={sequence2.b3}
                  handleClick={() => this.B3("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="E4"
                  current={sequence2.b4}
                  handleClick={() => this.B4("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="E4"
                  current={sequence2.b5}
                  handleClick={() => this.B5("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="D4"
                  current={sequence2.c1}
                  handleClick={() => this.C1("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="D4"
                  current={sequence2.c2}
                  handleClick={() => this.C2("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="D4"
                  current={sequence2.c3}
                  handleClick={() => this.C3("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="D4"
                  current={sequence2.c4}
                  handleClick={() => this.C4("sequence2")}
                />
              </div>
              <div className="newNotesA1">
                <ToggleSwitch
                  value="D4"
                  current={sequence2.c5}
                  handleClick={() => this.C5("sequence2")}
                />
              </div>
            </div>

            <div className="header">
              <h1>Parts. Do experiments!</h1>
              <h2></h2>
            </div>
            <div className="parts">
              <div className="part0"></div>
              <div className="part1">
                <h3>Part 1</h3>
                <div className="togglePart">
                  <PolySynth
                    synth="leadSynth"
                    instrument={ambientSynth}
                    on={part1.on}
                    togglePlay={() => togglePart("part1")}
                    changeSynthValue={changeSynthValue}
                  />
                </div>
              </div>

              <div className="part2">
                <h3>Part 2</h3>
                <div className="togglePart">
                  <PolySynth
                    synth="leadSynth"
                    instrument={ambientSynth}
                    on={part2.on}
                    togglePlay={() => togglePart("part2")}
                    changeSynthValue={changeSynthValue}
                  />
                </div>
              </div>
              <div className="part3">
                <h3>Part 3</h3>
                <div className="togglePart">
                  <PolySynth
                    synth="leadSynth"
                    instrument={ambientSynth}
                    on={part3.on}
                    togglePlay={() => togglePart("part3")}
                    changeSynthValue={changeSynthValue}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="EffectContainer">
            <Distortion
              {...this.state.distortion}
              togglEffect={() => togglEffect("distortion")}
              changeEffectWetValue={this.changeEffectWetValue}
              changeDistortionValue={this.changeDistortionValue}
            />

            <FeedbackDelay
              {...this.state.feedbackDelay}
              togglEffect={() => togglEffect("feedbackDelay")}
              changeEffectWetValue={this.changeEffectWetValue}
              changeFeedbackDelayValue={this.changeFeedbackDelayValue}
            />
            <BitCrusher
              {...this.state.bitCrusher}
              togglEffect={() => togglEffect("bitCrusher")}
              changeEffectWetValue={this.changeEffectWetValue}
              changeBitCrusherValue={this.changeBitCrusherValue}
            />
            <Freeverb
              {...this.state.freeverb}
              togglEffect={() => togglEffect("freeverb")}
              changeEffectWetValue={this.changeEffectWetValue}
              changeFreeverbRoomSizeValue={this.changeFreeverbRoomSizeValue}
            />
          </div>
        </div>
      </div>
    );
  }
}
