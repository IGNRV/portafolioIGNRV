import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Clínica Veterinaria Vet Dharma">
            <Container>
                <Title>
                    Clínica Veterinaria Vet Dharma <Badge>2021</Badge>
                </Title>
                <P>
                Veterinary clinic with time scheduling based on Santiago de Chile since 2020
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://vetdharma.cl/'>
                        https://vetdharma.cl/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
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
                <WorkImage src="/images/works/vetDharma_01.png" alt="servNote" />
                <WorkImage src="/images/works/vetDharma_02.png" alt="servNote" />

            </Container>
        </Layout>
    )
}

export default Work