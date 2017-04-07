import React, { Component } from 'react'
import { Panel, Form, Button, } from 'react-bootstrap'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { handleSubmit } from '../../actions'

import InputControl from '../../components/InputControl'
import SelectControl from '../../components/SelectControl'
import CustomModal from '../../components/CustomModal'

class LoginPage extends Component {

  constructor() {
    super()

    this.state = {
      isShowModal: false,
    }
  }

  onHandleModalClose = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    })
  }

  handleLoginSubmit = (event) => {

    event.preventDefault()

    //debugger

    const userInfo = {
      userId: event.target.elements[0].value,
      password: event.target.elements[1].value,
      company: event.target.elements[2].value,
    }

    this.setState({
      isShowModal: true,
    })

    this.props.handleSubmit(userInfo)
  }

  render() {
    const { userInfo, companyList } = this.props

    return (
      <div className="container">
        <Panel header="使用者登入" bsStyle="danger">
          <Form horizontal onSubmit={(event) => this.handleLoginSubmit(event)}>
            <InputControl id="userText"
                          type="text"
                          label="請輸入 ID"
                          placeholder="使用者帳號"
                          icon="user" />
            <InputControl id="passwordText"
                          type="password"
                          label="請輸入 密碼"
                          placeholder="使用者密碼"
                          icon="lock" />
            <SelectControl id="companySelect"
                           label="請選取公司"
                           placeholder="選取公司..."
                           selectList={companyList} />
            <hr />
            <Button type="submit">登入</Button>

            <CustomModal isShow={this.state.isShowModal}
                         title="登入使用者資訊"
                         content={
                           <div>
                             <h5>登入者：<span className="modalFont">{userInfo.userId}</span></h5>
                             {'\n'}
                             <h5>選擇公司：<span className="modalFont">{userInfo.company}</span></h5>
                           </div>
                         }
                         onHide={this.onHandleModalClose}>
              <Button onClick={this.onHandleModalClose}>取消</Button>
              <Button onClick={this.onHandleModalClose}>確定</Button>
            </CustomModal>

          </Form>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: {
    userId: state.userLoginInfo.get('userId'),
    company: state.userLoginInfo.get('company'),
  },
  companyList: state.stockData,
})

const mapDispatchToProps = (dispatch) =>
  (bindActionCreators({ handleSubmit }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)