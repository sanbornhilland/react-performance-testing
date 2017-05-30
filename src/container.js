import React, { Component } from 'react'
import Presentation from './presentation'
import Clock from './clock'
import Perf from 'react-addons-perf'

Perf.start()

export default class Container extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: 0,
      message: 'Hello World',
    }
  }

  render() {
    // Pass the full state object to both components
    // Note we are going to use Presentation 7x because
    // it mimics the HelpPopUp situation
    return (
      <div id="i-am-the-container">
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Presentation {...this.state} />
        <Clock {...this.state} />
      </div>
    )
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => {
        if (this.state.time >= 200) {
          clearInterval(this.timeId)

          this.setState({time: 'Done'})

          Perf.stop()
          Perf.printWasted()

          return
        }

        this.tick()
      },
      20
    )
  }

  tick() {
    this.setState({time: ++this.state.time})
  }
}
