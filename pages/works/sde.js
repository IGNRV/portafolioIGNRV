import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Sesión de evaluación">
            <Container>
                <Title>
                    Sesión de Evaluación <Badge>2021</Badge>
                </Title>
                <P>
                Pagina web hecha en base a Wordpress
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://sesiondeevaluacion.cl/'>
                        https://sesiondeevaluacion.cl/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>OS</Meta>
                        <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, HTML, CSS, PHP, MySQL</span>
                    </ListItem>
                    <ListItem>
                        <Meta>App</Meta>
                        <span>Easy! Appointments</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/Sde.png" alt="servNote" />
                <WorkImage src="/images/works/Sde2.png" alt="servNote" />

            </Container>
        </Layout>
    )
}

export default Work