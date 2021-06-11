import { Link } from 'react-router-dom'
import { useState } from 'react'
import google from '../../assets/images/google.png'
import logo from '../../assets/images/favicon.png'

import axios from 'axios'
import './account.css'

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

const Login = () => {
  const [reader, setReader] = useState(initialState)
  const { email, password, err, success } = reader

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setReader({ ...reader, [name]: value, err: '', success: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('./reader/login', { email, password })
      console.log('res................', res)
    } catch (error) {
      err.response.data.msg &&
        setReader({
          ...reader,
          err: err.response.data.msg,
          success: ''
        })
    }
  }
  return (
    <div className="contain">
      <p className="tip">
        <img src={logo} alt="" />
        Truyện Online
      </p>
      <div className="cont">
        <div className="form sign-in" onSubmit={handleSubmit}>
          <h2>Chào mừng đến với Admin</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </label>
          <label>
            <span>Mật khẩu</span>
            <input
              type="password"
              value={password}
              name="password"
              onChange={handleChangeInput}
            />
          </label>
          <button type="submit" className="submit">
            Đăng nhập
          </button>
          <div className="abc">
            <button type="button" className="fb-btn">
              <span>facebook</span>
            </button>
            <button type="button" className="fb-btn">
              <img className="google" src={google} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
