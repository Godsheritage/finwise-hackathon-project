import React from 'react'
import { useState } from 'react'
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const SignUp = ({setUserName, userName, setPass, pass}) => {
  const [firstName,setFirstName ] = useState()
  const [lastName,setLastName ] = useState()
  const [email,setEmail] = useState()
  const [confirmPassword,setConfirmPassword ] = useState()

  const [signUpInfo, setSignUpInfo]  = useState({'firstname': firstName, 'lastname': lastName , 'username': userName, 'email': email, 'password':pass, "confirmPassword" : confirmPassword})
  
  const handleSubmission= (event) => {
    // Set the 'firstName' state with the new value entered by the user
    
    // Log the event target value to the console
    setSignUpInfo({'firstname': firstName, 'lastname': lastName , 'username': userName, 'email': email, 'password':pass, "confirmPassword" : confirmPassword})
    console.log(userName, pass)
    
  };

  

  return (
    <div>
  
      <Input size="large" placeholder="First Name" id = "User" prefix={<UserOutlined/>}  onChange = { (event) => setFirstName(event.target.value) }/>
      <br />
      <br />
      <Input size="large" placeholder="Last Name" id = "User" prefix={<UserOutlined />} onChange = {(event) => setLastName(event.target.value) } />
      <br />
      <br />
      <Input size="large" placeholder="Email" id = "User" prefix={<UserOutlined />} onChange = {(event) => setEmail(event.target.value)}/>
      <br />
      <br />
      <Input size="large" placeholder="User Name" id = "User" prefix={<UserOutlined />} onChange= {(event) => setUserName(event.target.value)} />
      <br />
      <br />
      <Input placeholder="Password" id = "Pass" prefix={<UserOutlined />} type="password"  onChange={(event) => setPass(event.target.value)} />
      <br />
      <br />
      <Input size="small" placeholder="Comfirm Password" prefix={<UserOutlined />} onChange={(event) => setConfirmPassword(event.target.value)}/>
      <br />
      <br />
      <Button type="primary" onClick= {handleSubmission }>Create Account!</Button>
    
    </div>
  )
}

export default SignUp