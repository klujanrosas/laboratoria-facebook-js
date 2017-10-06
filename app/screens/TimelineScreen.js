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
      console.log('not logged in')
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
  userPosts: PropTypes.shape,
  userInfo: PropTypes.shape,
  user: PropTypes.shape(),
}

const mapStateToProps = (state) => {
  const { user } = state.UserAuthentication
  const { userInfo, isLoading, errors, userPosts } = state.Timeline
  console.log(userPosts)
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

