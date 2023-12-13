import { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../Images/logo.svg';
import notification from '../../Images/notification.svg'
import notificationOn from '../../Images/notificationOn.svg'

const Header = () => {
    return (
        <Container>
            <div className="logo-container">
                <img className="logo-navbar" src={logo} />
            </div>
        </Container>
    )
}

export default Header;