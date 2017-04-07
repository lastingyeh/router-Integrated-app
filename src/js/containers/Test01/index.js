// @flow
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../../actions'

import UserList from '../../components/User/user-list'
import UserDetail from '../../components/User/user-detail'

import {
  Grid,
  Row,
} from 'react-bootstrap'

const Test01Page = ({ userData, selectUser, activeUser, }) => {

  const userSelectList = userData.map((user, index) => (
    {
      value: user.id,
      name: `${user.first} ${user.last}`
    }
  ))

  const onHandleSelectChange = (e) => {
    const user = userData.find(user => user.id === parseInt(e.target.value, 10))
    selectUser(user)
  }

  return (
    <Grid>
      <Row>
        <UserList users={userSelectList}
                  onChange={(e) => onHandleSelectChange(e)} />
      </Row>
      <Row className="user-detail">
        <UserDetail user={activeUser} />
      </Row>
    </Grid>
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
  activeUser: state.activeUser.getIn(['activeUser']),
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ selectUser }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Test01Page)
