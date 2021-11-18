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
            <Heading as="h3" fontSize={20} mv={4} my={5}>
                Portafolio
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="servNote" title="Service Notebook" thumbnail={thumbServNote}>
                        Tienda de tecnología
                    </WorkGridItem>
                </Section>
                <Section>
          <WorkGridItem
            id="vetDharma"
            title="Cliníca Veterinaria Vet Dharma"
            thumbnail={thumbVetDharma}
          >
            Cliníca Veterinaria
          </WorkGridItem>
        </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works