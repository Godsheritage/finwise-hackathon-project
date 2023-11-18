import React from 'react'
import { useState } from 'react'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const LogIn = ({setUserName, userName, setPass, pass, Login,setLogin }) => {

  
  const [LoginPass,setLoginPass ] = useState()
  const [LoginUserName ,setLoginUserName ] = useState()
  const HandleLogInSubmission = () => {
        if (LoginUserName == Login && LoginPass == pass ){
        console.log(LoginPass)
        setLogin(true)
    }
    
  }
  
  return (
    <div>
        <Input size="large" placeholder="UserName" id = "User" prefix={<UserOutlined/>}  onChange = { (event) => setLoginUserName(event.target.value) }/>
      <br />
      <br />
      <Input size="large" placeholder="Password" id = "User" prefix={<UserOutlined />} onChange = {(event) => setLoginPass(event.target.value) } />
      <br />
      <br/>
      <Button type="primary" onClick={HandleLogInSubmission}>Create Account!</Button>

     
    </div>
  )
}

export default LogIn