// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Test02Page = () => (<div>Test02</div>)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Test02Page)
