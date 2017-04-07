import React, { PropTypes } from 'react'
import SelectControl from '../SelectControl';

const UserList = ({ users, onChange }) => (
  <div>
    <SelectControl id="selectUser"
                   label="請選取"
                   selectList={users}
                   onChange={onChange} />
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired),
  onChange: PropTypes.func,
}

export default UserList
