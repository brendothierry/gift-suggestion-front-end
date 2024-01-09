import { Container, Content } from './styles'
import {
    FaTimes,
    FaRegSun,
    FaUserAlt,
    FaRegCalendarAlt,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container sidebar={active}>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SidebarItem Icon={FaUserAlt} Text="Perfil" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Adicionar um aniversariante"/>
                <SidebarItem Icon={FaRegSun} Text="Configurações" />
            </Content>
        </Container>
    )
}

export default Sidebar;