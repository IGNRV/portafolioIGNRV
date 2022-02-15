import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tienda de Ropa Hada de las Compras">
            <Container>
                <Title>
                    Hada de las Compras <Badge>2022</Badge>
                </Title>
                <P>
                Sitio web Ecommerce para Tienda de ropa hecho en base a Wordpress</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://hadadelascompras.cl/'>
                        https://hadadelascompras.cl/ <ExternalLinkIcon mx="2px" />
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
                </List>
                <WorkImage src="/images/works/thumbHada.png" alt="hadadelascompras" />
            </Container>
        </Layout>
    )
}

export default Work
