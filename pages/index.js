import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, List, ListItem, SimpleGrid, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { 
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoDiscord,
	IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
	return ( 
		<Layout>
		<Container>
		<Box display={{ md: 'flex' }}>
		  <Box flexGrow={1}>
		    <Heading as="h2" variant="page-title">
		      Ignacio Rodríguez Villarroel
		    </Heading>
	        <p>Contador / Programador</p>
		  </Box>
		  <Box 
		  flexShrink={0} 
		  mt={{base: 4, md:3}} 
		  ml={{md: 6}} 
		  align="center"
		  >
			  Con más de tres años de experiencia en el campo de la informática y contabilidad, he tenido la oportunidad de trabajar en proyectos con clientes y realizar trabajos a contrato, incluyendo honorarios. Durante mi carrera, he trabajado con diversos lenguajes de programación, como PHP, Javascript, y manejo de bases de datos MySQL, además de ser proficiente en frameworks como Laravel, ReactJS y VueJS. Además, tengo habilidades avanzadas en el uso de Excel y otros programas relacionados. Me considero una persona proactiva, con habilidades de liderazgo y capacidad de trabajo en equipo, lo que me permite contribuir de manera efectiva en cualquier proyecto que se me asigne. Estoy emocionado por la oportunidad de aplicar mis conocimientos y habilidades para resolver los desafíos y alcanzar los objetivos de cualquier empresa.


		  </Box>
	    </Box>

	<Section delay={0.1}>
		<Heading as="h3" variant="section-title" my={4}>
			Trabajo
		</Heading>
			<Box align="center" my={7}>
				<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						Portafolio
					</Button>
				</NextLink>
			</Box>
	</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				En la web
			</Heading>
			<List>
				<ListItem>
					<Link href="https://github.com/IGNRV" target="_blank">
						<Button 
						variant="ghost" 
						colorScheme="teal" 
						leftIcon={<Icon as ={IoLogoGithub}/>}
						>
							@ignrv
						</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href="https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-villarroel-b047301a5/" target="_blank">
						<Button 
						variant="ghost" 
						colorScheme="teal" 
						leftIcon={<Icon as ={IoLogoLinkedin}/>}
						>
							Linkedin
						</Button>
					</Link>
				</ListItem>
			</List>
		</Section>
	  </Container>
	  </Layout>
  )
}

export default Page
