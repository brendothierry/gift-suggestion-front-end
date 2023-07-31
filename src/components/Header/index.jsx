import { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../Images/logo.svg';

const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Container>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <div className="logo-container">
                <img className="logo-navbar" src={logo} />
            </div>
        </Container>
    )
}

export default Header;