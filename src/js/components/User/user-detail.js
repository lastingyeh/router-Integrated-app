import React, { PropTypes, } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Thumbnail,
  Grid,
  Row,
  Col,
} from 'react-bootstrap'

const UserDetail = ({ user }) => {

  if (!user) {
    return null
  }

  const userName = `${user.first} ${user.last}`

  return (
    <ListGroup>
      <ListGroupItem>
        <Grid>
          <Row>
            <Col sm={2} xs={4}>
              <Thumbnail src={user.thumbnail} alt="no gif" />
            </Col>
            <Col sm={10} xs={6}>
              <h4>{userName}</h4>
              <Col>
                <h4>Age: {user.age}</h4>
              </Col>
              <Col>
                <h5> {user.description}</h5>
              </Col>
            </Col>
          </Row>

        </Grid>
      </ListGroupItem>
    </ListGroup>
  )
}

UserDetail.propTypes = {
  user: PropTypes.object,
}

export default UserDetail
