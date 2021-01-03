import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router-dom'

function Logout() {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const history = useHistory()
    const onSuccess = () => {
        console.log('Logout made successfully')
        localStorage.clear()
        history.push('/')
        alert('Logout made successfully ✌')
    }

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout
