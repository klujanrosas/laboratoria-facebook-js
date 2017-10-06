import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { attemptLogout, attemptRequestDataFromToken } from '../actions'
import { Container, TimelineContent } from '../components/Container'
import { Timeline } from '../components/Timeline'
import { TintedHeader } from '../components/Header'
import { FlatButton } from '../components/Button'
import { Label } from '../components/Label'
import { PostCreationWidget, PostDisplayWidget } from '../components/Widget'


class TimelineScreen extends Component {
  componentDidMount() {
    this.props.attemptRequestDataFromToken()
  }

  renderLabel() {
    if (!this.props.userInfo) {
      return (
        <Label
          content="Cargando..."
          color="white"
          size="m"
        />
      )
    }
    return (
      <Label
        content={this.props.userInfo.name}
        color="white"
        size="xl"
      />
    )
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <Timeline>
          <TintedHeader>
            {this.renderLabel()}
            <FlatButton
              label="cerrar sesión"
              onPress={() => this.props.attemptLogout()}
            />
          </TintedHeader>
          {this.props.userInfo && <TimelineContent>
            <PostCreationWidget />
            <PostDisplayWidget posts={this.props.userPosts[this.props.userInfo.token]} />
          </TimelineContent>
          }
        </Timeline>
      </Container>
    )
  }
}

TimelineScreen.propTypes = {
  attemptRequestDataFromToken: PropTypes.func,
  attemptLogout: PropTypes.func,
  userPosts: PropTypes.object,
  userInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  const { user } = state.UserAuthentication
  const { userInfo, isLoading, errors, userPosts } = state.Timeline
  return {
    user,
    userInfo,
    isLoading,
    errors,
    userPosts
  }
}

export default connect(
  mapStateToProps,
  {
    attemptLogout,
    attemptRequestDataFromToken
  }
)(TimelineScreen)

