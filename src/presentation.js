import React, { PureComponent } from 'react'

class Presentation extends PureComponent {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id="i-am-presentation">
        {this.props.message}
      </div>
    )
  }
}

export default Presentation