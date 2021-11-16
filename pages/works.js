import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbServNote from '../public/images/works/servNote11.png'
import thumbVetDharma from '../public/images/works/vetDharma_01.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mv={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="servNote" title="Service Notebook" thumbnail={thumbServNote}>
                        Technology Store
                    </WorkGridItem>
                </Section>
                <Section>
          <WorkGridItem
            id="vetDharma"
            title="Cliníca Veterinaria Vet Dharma"
            thumbnail={thumbVetDharma}
          >
            Veterinary clinic
          </WorkGridItem>
        </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works