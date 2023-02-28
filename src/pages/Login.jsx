import React, {useContext} from 'react'
import MyButton from '../UI/button'
import { AuthContext } from '../context';
import MyInput from '../UI/input/input'

const Login = () => {
    const {isAuth, setAuth} = useContext(AuthContext)

    const login = (e) =>{
      e.preventDefault();
      setAuth(true)
      localStorage.setItem('auth', 'true')
    }
  return (
    <div style={{padding: '0 15px 0 0'}}>
        <h1 style={{marginTop:30}}>
            Login Page
        </h1>
        <form onSubmit={login}>
            <MyInput type='text' placeholder='User name' />
            <MyInput type='password' placeholder='User password' />
            <MyButton>Login</MyButton>
        </form>


    </div>
  )
}

export default Login