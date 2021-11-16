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
		  Hello, I&apos;m a web developer based in Chile!
		</Box>

		<Box display={{ md: 'flex' }}>
		  <Box flexGrow={1}>
		    <Heading as="h2" variant="page-title">
		      Ignacio Rodríguez Villarroel
		    </Heading>
	        <p>Digital Creator ( Artist/ Developer / Designer )</p>
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
		<Heading as="h3" variant="section-title">
			Work
		</Heading>
		<Paragraph>Freelancer and web developer based in Santiago de Chile. Working since 2020 on programming and web construccion finding solutions to problems on the code area. I love to make music, writing and reading books.{/*  {' '} */}
		{/* <NextLink href="/works/servNote">
			<Link>Service Notebook</Link>
			</NextLink> */}
			</Paragraph> 
			<Box align="center" my={4}>
				<NextLink href="/works">
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						My portfolio
					</Button>
				</NextLink>
			</Box>
	</Section>
		<Section delay={0.2}>
			<Heading as="h3" variant="section-title">
				Bio
			</Heading>
			<BioSection>
				<BioYear>1992</BioYear>
				Born in Santiago of Chile
			</BioSection>
			<BioSection>
				<BioYear>2017</BioYear>
				He started studying Programmer Analyst on CIISA
			</BioSection>
			<BioSection>
			<BioYear>2020 to present</BioYear>
				Working as freelance
			</BioSection>
			<BioSection>
			<BioYear>2021</BioYear>
			Completed the General Accounting career at INACAP
			</BioSection>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				Hobbies
			</Heading>
			<Paragraph>
				Art, {' '}
				<Link href="#">
				Music
				</Link>
				, Writing, Reading, Learning, Programming.
			</Paragraph>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				On the web
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
					<Link href="https://www.instagram.com/ign.rv" target="_blank">
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
