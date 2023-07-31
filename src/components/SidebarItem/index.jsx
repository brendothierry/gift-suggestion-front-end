import { Container } from './styles'

const SidebarItem = ({ Icon, Text, Url }) => {
  return (
    <Container>
      <Icon />
      {Text}
      {Url}
    </Container>
  )
}

export default SidebarItem