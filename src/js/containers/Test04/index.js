// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Test04Page = () => (<div>Pull-Right Test04</div>)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Test04Page)