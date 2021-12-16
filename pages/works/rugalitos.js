import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Tienda de Mascotas Rugalitos">
            <Container>
                <Title>
                    Rugalitos <Badge>2021</Badge>
                </Title>
                <P>
                Tienda de mascotas creada sobre la plataforma Prestashop                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://rugalitos.cl/'>
                        https://rugalitos.cl/ <ExternalLinkIcon mx="2px" />
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
                <WorkImage src="/images/works/thumbRugalitos.png" alt="rugalitos" />
                <WorkImage src="/images/works/vetDharma_02.png" alt="rugalitos" />

            </Container>
        </Layout>
    )
}

export default Work