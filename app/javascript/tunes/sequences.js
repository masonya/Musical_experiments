import Tone from 'tone'

function sequence1(synth) {
  var sequence = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, '8n', time)
      console.log(note)
    },
    ['C2', ['C3', 'C3'], 'C4', 'C5']
  )
  return sequence
}

function sequence2(synth) {
  var sequence = new Tone.Sequence(
    function(time, note) {
      synth.triggerAttackRelease(note, '8n', time)
      console.log(note)
    },
    [[], [], [], [], []]
  )

  return sequence
}

export { sequence1, sequence2 }
