import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Timeline } from '../components/Timeline'

class TimelineScreen extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <Timeline />
      </Container>
    )
  }
}

export default TimelineScreen

