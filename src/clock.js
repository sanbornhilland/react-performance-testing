import React, { Component } from 'react'

const Clock = (props) => {
  return (
    <div id="i-am-clock">
      {props.time}
    </div>
  )
}

export default Clock
