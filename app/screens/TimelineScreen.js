import React, { Component } from 'react'

import { Container } from '../components/Container'
import { Timeline } from '../components/Timeline'
import { TintedHeader } from '../components/Header'

class TimelineScreen extends Component {
  render() {
    console.log(this.props)
    return (
      <Container>
        <Timeline>
          <TintedHeader />
        </Timeline>
      </Container>
    )
  }
}

export default TimelineScreen

