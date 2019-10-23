import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

// import * as sequence from '../sequence'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    _.bindAll(this)
  }

  render() {
    return (
      <div>
        <div className="checkbox">
          <div className="check">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div className="check">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div className="check">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
        </div>
      </div>
    )
  }
}
