import React from 'react'
import { useState } from 'react'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const SignUp = () => {
  return (
    <div>
        <Input size="large" placeholder="User Name" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="Password" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input size="small" placeholder="Comfirm PAssword" prefix={<UserOutlined />} />

    </div>
  )
}

export default SignUp