import { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../Images/logo.svg';
import notification from '../../Images/notification.svg'
import notificationOn from '../../Images/notificationOn.svg'

const Header = ({ showSiderbar }) => {
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar  = () => setSidebar(!sidebar)

    return (
        <Container>
            {showSiderbar && <FaBars onClick={ toggleSidebar } />}
            {sidebar && <Sidebar active={setSidebar} />}
            <div className="logo-container">
                <img className="logo-navbar" src={logo} />
            </div>
            <div className='container-notification'>
                <img className="notification" src={notification} />
            </div>
        </Container>
    )
}

export default Header;