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
		      Luis Rodríguez Villarroel
		    </Heading>
	        <p>Contador / Developer</p>
		  </Box>
		  <Box 
		  flexShrink={0} 
		  mt={{base: 4, md:3}} 
		  ml={{md: 6}} 
		  align="center"
		  >


		  </Box>
	    </Box>

	<Section delay={0.1}>
		<Heading as="h3" variant="section-title" my={4}>
			Trabajo
		</Heading>
		{/* <NextLink href="/works/servNote">
			<Link>Service Notebook</Link>
			</NextLink> */}
			<Box align="center" my={7}>
				<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						Mi portafolio
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
				<ListItem>
					<Link href="https://www.linkedin.com/in/luis-rodr%C3%ADguez-villarroel-b047301a5/" target="_blank">
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
