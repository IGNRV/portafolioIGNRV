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
	IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
	return ( 
		<Layout>
		<Container>
		<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
		  Hola, soy desarrollador web residente en Santiago de Chile!
		</Box>

		<Box display={{ md: 'flex' }}>
		  <Box flexGrow={1}>
		    <Heading as="h2" variant="page-title">
		      Ignacio Rodríguez Villarroel
		    </Heading>
	        <p>Contador / Desarrollador web</p>
		  </Box>
		  <Box 
		  flexShrink={0} 
		  mt={{base: 4, md:3}} 
		  ml={{md: 6}} 
		  align="center"
		  >
		  <Image 
		  borderColor="whiteAlpha.800" 
		  borderWidth={2} 
		  borderStyle="solid" 
		  maxWidth="100px" 
		  display="inline-block" 
		  borderRadius="full" 
		  src="/images/profile.jpg" 
		  alt="Profile Image" />


		  </Box>
	    </Box>

	<Section delay={0.1}>
		<Heading as="h3" variant="section-title" my={4}>
			Trabajo
		</Heading>
		<Paragraph>Freelancer y desarrollador web con viviendo en Santiago de Chile. Trabajando desde 2020 en programación y construcción web buscando soluciones a problemas en el área de programación e informática. Me gusta hacer música, escribir y leer libros.{/*  {' '} */}
		{/* <NextLink href="/works/servNote">
			<Link>Service Notebook</Link>
			</NextLink> */}
			</Paragraph> 
			<Box align="center" my={7}>
				<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						Mi portafolio
					</Button>
				</NextLink>
			</Box>
	</Section>
		<Section delay={0.2}>
			<Heading as="h3" variant="section-title">
				Biografía
			</Heading>
			<BioSection>
				<BioYear>1992</BioYear>
				Nace en Santiago of Chile
			</BioSection>
			<BioSection>
				<BioYear>2017</BioYear>
				Empieza a estudiar la carrera de Analista Programador en CIISA
			</BioSection>
			<BioSection>
			<BioYear>2020 a la actualidad</BioYear>
				Trabajando como freelancer
			</BioSection>
			<BioSection>
			<BioYear>2021</BioYear>
			Termina la carrera de Contabilidad General en INACAP
			</BioSection>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				Hobbies
			</Heading>
			<Paragraph>
				Arte, {' '}
				<Link href="#">
				Musica
				</Link>
				, Escribir, Leer, Programación.
			</Paragraph>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				En la web
			</Heading>
			<List>
				<ListItem>
					<Link href="#" target="_blank">
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
					<Link href="https://www.instagram.com/ign.rv/" target="_blank">
						<Button 
						variant="ghost" 
						colorScheme="teal" 
						leftIcon={<Icon as ={IoLogoInstagram}/>}
						>
							@ign.rv
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
