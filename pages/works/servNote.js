import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Service Notebook">
            <Container>
                <Title>
                    Service Notebook <Badge>2021</Badge>
                </Title>
                <P>
                    Technology store based on Prestashop platform
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://servicenotebook.cl/'>
                        https://servicenotebook.cl/ <ExternalLinkIcon mx="2px" />
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
                </List>
                <WorkImage src="/images/works/servNote_01.png" alt="servNote" />
                <WorkImage src="/images/works/servNote_02.png" alt="servNote" />

            </Container>
        </Layout>
    )
}

export default Work