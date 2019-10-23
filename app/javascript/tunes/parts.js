import Tone from 'tone'

function part1(synth) {
  let part = new Tone.Part(
    function(time, note) {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    },
    [
      {
        time: '0:0:0',
        noteName: 'C4',
        velocity: 0.5,
        duration: '16n'
      },
      {
        time: '0:1:3',
        noteName: 'E4',
        velocity: 0.5,
        duration: '16n'
      },
      {
        time: '1:2:2',
        noteName: 'A4',
        velocity: 0.5,
        duration: '16n'
      },
      {
        time: '0:3:0',
        noteName: 'G4',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:0:0',
        noteName: 'E4',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:1:0',
        noteName: 'F4',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:2:0',
        noteName: 'A4',
        velocity: 1,
        duration: '16n'
      },
      {
        time: '1:3:0',
        noteName: 'D4',
        velocity: 1,
        duration: '16n'
      }
    ]
  )

  return part
}

function part2(synth) {
  let part = new Tone.Part(
    function(time, note) {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    },
    [
      {
        time: '0:0:0',
        noteName: 'C3',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '0:1:0',
        noteName: 'E3',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '0:2:0',
        noteName: 'A2',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '0:3:0',
        noteName: 'G2',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '1:0:0',
        noteName: 'E2',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '1:1:0',
        noteName: 'F2',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '1:2:0',
        noteName: 'A2',
        velocity: 1,
        duration: '32n'
      },
      {
        time: '1:3:0',
        noteName: 'D3',
        velocity: 1,
        duration: '32n'
      }
    ]
  )

  return part
}

function part3(synth) {
  // let part = new Tone.Sequence(
  //   function(time, note) {
  //     synth.triggerAttackRelease(note, '8n', time)
  //   },
  //   ['C2', ['C3', 'C3'], 'C4', 'C5']
  // ).start(0)

  var part = new Tone.Part(
    function(time, note) {
      console.log(note)
      //the notes given as the second element in the array
      //will be passed in as the second argument
      synth.triggerAttackRelease(note, '8n', time)
    },
    [[0, 'C2'], ['0:2', 'C3'], ['0:3:2', 'G2']]
  )

  // setTimeout(function() {
  //   part.remove(1)
  //   part.add(1, [['G4', 'F#4'], ['F4'], ['E4', 'Eb4', 'D4']])
  // }, 4000)

  // setTimeout(function() {
  //   part.remove(1)
  //   part.add(1, [['G3', 'G3', 'G3'], ['Eb4', 'Eb4']])
  // }, 8000)
  //
  // setTimeout(function() {
  //   part.remove(1)
  //   part.add(1, [['G4'], ['E4', 'D4']])
  // }, 12000)

  //
  // setTimeout(function() {
  //   seq.remove(1)
  //   seq.add(1, ['C4', 'D4', 'C4'])
  // }, 16000)
  //
  // setTimeout(function() {
  //   seq.remove(1)
  //   seq.add(1, ['C3', 'C3'])
  // }, 20000)
  //
  // setTimeout(function() {
  //   seq.removeAll()
  // }, 24000)

  // let part = new Tone.Part(
  // function(time, note) {
  //   synth.triggerAttackRelease(
  //     note.noteName,
  //     note.duration,
  //     time,
  //     note.velocity
  //   )
  // },
  // [
  //   {
  //     time: '0:0:0',
  //     noteName: 'C5',
  //     velocity: 0.3,
  //     duration: '32n'
  //   },
  //   {
  //     time: '0:1:3',
  //     noteName: 'E5',
  //     velocity: 0.3,
  //     duration: '32n'
  //   },
  //   {
  //     time: '1:2:2',
  //     noteName: 'A5',
  //     velocity: 0.3,
  //     duration: '32n'
  //   }
  // {
  //   time: '0:3:0',
  //   noteName: 'G5',
  //   velocity: 1,
  //   duration: '32n'
  // },
  // {
  //   time: '1:0:0',
  //   noteName: 'E4',
  //   velocity: 1,
  //   duration: '32n'
  // },
  // {
  //   time: '1:1:0',
  //   noteName: 'F4',
  //   velocity: 1,
  //   duration: '32n'
  // },
  // {
  //   time: '1:2:0',
  //   noteName: 'A5',
  //   velocity: 1,
  //   duration: '32n'
  // },
  // {
  //   time: '1:3:0',
  //   noteName: 'D5',
  //   velocity: 1,
  //   duration: '32n'
  // }
  //   ]
  // )

  return part
}

// part1.start(0)
// part1.loop = true
// part1.loopEnd = '8m'
//
// part2.start(0)
// part2.loop = true
// part2.loopEnd = '2m'
//
// part3.start(0)
// part3.loop = true
// part3.loopEnd = '2m'

export { part1, part2, part3 }
