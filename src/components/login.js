import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { refreshTokenSetup } from '../utils/refreshToken'

function Login () {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const history = useHistory()
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj)
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        )
        refreshTokenSetup(res)
        localStorage.setItem('userKey', '1234')
        localStorage.setItem('name', res.profileObj.name)
        history.push('/home')
    }

    useEffect(()=>{
        const userKey = localStorage.getItem('userKey')
        if (userKey) {
            history.push('/home')
        }
    },[])

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢 `
        )
    }

    return (
        <div style={{marginTop: '5%'}}>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login
