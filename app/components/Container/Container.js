import React from 'react'

const Container = ({ children }) => {
  return React.Children.only(children)
}

export default Container
