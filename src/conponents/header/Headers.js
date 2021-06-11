import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import './Header.css'
import { Layout, Avatar, Menu, Dropdown, Button } from 'antd'
import { UserOutlined, DownOutlined } from '@ant-design/icons'

const { Header } = Layout


const Headers = () => {
  const auth = useSelector((state) => state.auth)
  const { reader, isLogged } = auth

   const handleLogout = async () => {
     try {
       await axios.get('/reader/logout')
       localStorage.removeItem('firstLogin')
       window.location.href = '/'
     } catch (err) {
       window.location.href = '/'
     }
  }
  
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">Thông tin cá nhân</Link>
        </Menu.Item>
        <Menu.Item>
          {/* {isLogged ? <Link to="/">Đăng xuất</Link> : userLink()} */}
          <Link to="/" onClick={handleLogout}>
            Đăng xuất
          </Link>
        </Menu.Item>
      </Menu>
    )
  return (
    <Header className="site-layout-background">
      <Link>
        <p>{reader.name}</p>
        <Avatar icon={<UserOutlined />} />
      </Link>
      <Dropdown overlay={menu} placement="bottomRight" arrow>
        <DownOutlined />
      </Dropdown>
    </Header>
  )
}

export default Headers
