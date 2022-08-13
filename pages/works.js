import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbServNote from '../public/images/works/servNote11.png'
import thumbVetDharma from '../public/images/works/vetDharma_01.png'
import thumbSde from '../public/images/works/Sde.png'
import thumbHada from '../public/images/works/thumbHada.png'
import thumbRugalitos from '../public/images/works/thumbRugalitos.jpg'
import thumbGalp from '../public/images/works/thumbGalp.png'

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mv={4} my={5}>
                Portafolio
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <WorkGridItem
            id="rugalitos"
            title="Tienda de Mascotas Rugalitos"
            thumbnail={thumbRugalitos}
          >
            Rugalitos
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sde"
            title="Sesión de Evaluación"
            thumbnail={thumbSde}
          >
            Asesoria ERP
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hada"
            title="Tienda de Ropa Hada de las Compras"
            thumbnail={thumbHada}
          >
            Hada de las Compras
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="galp"
            title="Servicio de construcción de galpones y estructuras"
            thumbnail={thumbGalp}
          >
            Galpones y Estructuras
          </WorkGridItem>
        </Section>
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
