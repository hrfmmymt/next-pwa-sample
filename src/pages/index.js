import 'isomorphic-fetch'
import React from 'react'
import withRedux from 'next-redux-wrapper'

import Todo from '../components/Todo'

import initStore from '../utils/store'

class Index extends React.Component {
  render() {
    return (
      <Todo />
    )
  }
}

export default withRedux(initStore)(Index)
