import * as React from 'react'
import { Text, Link, Image, Heading } from 'rebass'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'
import Api from '../utils/api'

type Contributor = {
  avatar_url: string
  login: string
}
type IContributorsState = {
  contributors?: Contributor[]
}

class Contributors extends React.Component<any, IContributorsState> {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    Api.contributors()
      .then(contributors => {
        this.setState({ contributors })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    if (!this.state.contributors) {
      return <div />
    }
    return (
      <Flex
        bg="white"
        flexDirection="column"
        alignItems="center"
        px={[3, 6]}
        py={4}
      >
        <Heading is="h2" fontSize={[3, 4]} textAlign={['center', 'center']}>
          We wouldn't exist without them ❤️
        </Heading>
        <Flex flexDirection="row" my={3}>
          {this.state.contributors.map((contributor, id) => {
            return (
              <Box key={id} mx={2}>
                <Link
                  href={`https://github.com/${contributor.login}`}
                  target="__blank"
                >
                  <Image
                    src={contributor.avatar_url}
                    height={60}
                    width={60}
                    style={{
                      borderRadius: '30px',
                    }}
                  />
                </Link>
              </Box>
            )
          })}
        </Flex>
        <Text my={3} textAlign={['center']}>
          And special thanks to the CocoaPods crew for all the work they've
          done, not only on facilitating dependency management, but on creating
          and empowering a strong and rich community.
        </Text>
      </Flex>
    )
  }
}

const Features = () => {
  return (
    <Flex flexDirection={['column', 'row']} bg="white" px={[5, 5]} py={4}>
      <Flex
        mr={[0, 6]}
        justifyContent="center"
        alignItems="center"
        flex="0 0 auto"
      >
        <Image
          alt="Features"
          width={[150, 200]}
          height={[150, 200]}
          mb={[0, 4]}
          src={withPrefix('/checklist.svg')}
        />
      </Flex>
      <Flex flexDirection="column" mt={[4, 0]}>
        <Heading
          fontSize={[3, 4]}
          is="h2"
          mb={3}
          textAlign={['center', 'left']}
        >
          Powerful features
        </Heading>
        <Text textAlign={['left', 'left']}>
          <ul>
            <li>🐦 Type-safe projects definitions editable with Xcode.</li>
            <li>↗️ Local dependencies support.</li>
            <li>⚠️ Misconfiguration early catching.</li>
            <li>📦 Precompiled binaries support (frameworks and libraries).</li>
            <li>💻 CLI and macOS application.</li>
            <li>🔄 Circular dependency detection.</li>
            <li>🥘 100% open source and written in Swift.</li>
          </ul>
          <br />
          ...and a bunch more in the backlog that are about to come.
        </Text>
      </Flex>
    </Flex>
  )
}

const Scale = () => {
  return (
    <Flex flexDirection={['column', 'row']} bg="grey" px={[5, 5]} py={4}>
      <Flex flexDirection="column">
        <Heading
          fontSize={[3, 4]}
          is="h2"
          mb={3}
          textAlign={['center', 'left']}
        >
          A tool designed for scale
        </Heading>
        <Text textAlign={['center', 'left']}>
          Xcode is a great IDE, but used at scale{' '}
          <i>(large projects and teams)</i>, presents issues like huge
          compilation times, high projects maintenance cost, or random issues
          hard to track down. xcbuddy addresses some of those issues and{' '}
          <b>helps you focus on the beauty of building apps</b>. It works
          alongside Xcode and integrates seamlessly with your current team
          workflows
        </Text>
      </Flex>
      <Flex
        ml={[0, 6]}
        justifyContent="center"
        alignItems="center"
        flex="0 0 auto"
      >
        <Image
          alt="Artificial Inteligence"
          width={[200, 300]}
          height={[200, 300]}
          mb={[0, 4]}
          src={withPrefix('/ai.svg')}
        />
      </Flex>
    </Flex>
  )
}

const Community = ({ spectrumUrl }: { spectrumUrl: string }) => {
  return (
    <Flex flexDirection={['column', 'row']} bg="grey" px={[5, 5]} py={4}>
      <Flex flexDirection="column">
        <Heading
          fontSize={[3, 4]}
          is="h2"
          mb={3}
          textAlign={['center', 'left']}
        >
          A community driven project
        </Heading>
        <Text textAlign={['center', 'left']}>
          xcbuddy is <b>envisioned and developed</b> by a community of
          developers with a diverse background and experiences working with
          Xcode. All the project repositories are available on GitHub and open
          to new contributors that want to have a huge impact on{' '}
          <b>developers productivity</b>.<br />
          <br />The tool is entirely developed in <b>Swift</b> making it more
          accessible for iOS and macOS developers to contribute.
        </Text>
        <Flex flex="0 0 auto" flexDirection="column" alignItems="center" my={4}>
          <Link href={spectrumUrl} target="__blank">
            <Box bg="orange" width={200} py={1} style={{ borderRadius: '4px' }}>
              <Text textAlign="center" color="white">
                Join the Spectrum community
              </Text>
            </Box>
          </Link>
        </Flex>
      </Flex>
      <Flex
        ml={[0, 6]}
        justifyContent="center"
        alignItems="center"
        flex="0 0 auto"
      >
        <Image
          alt="Checking docs"
          width={[200, 300]}
          height={[200, 300]}
          mb={[0, 4]}
          src={withPrefix('/astronaut.svg')}
        />
      </Flex>
    </Flex>
  )
}

const Tryout = ({ data }) => {
  return (
    <Flex
      bg="green"
      flexDirection="column"
      alignItems="center"
      px={[3, 6]}
      py={4}
    >
      <Heading
        fontSize={[3, 4]}
        is="h2"
        style={{ color: 'white' }}
        textAlign={['center', 'center']}
      >
        Try it out
      </Heading>
      <Text my={3} textAlign="center" style={{ color: 'white' }}>
        We’ve made the installation process very easy for you. With just one
        command, you’ll get xcbuddy working on your environment.
      </Text>
      <Box bg="#424242" p={4} style={{ borderRadius: '4px' }}>
        <Text color="#ADADAD"># Install xcbuddy</Text>
        <Text color="white">
          {`/usr/bin/ruby -e "$(curl -fsSL ${
            data.site.siteMetadata.urls.install
          })"`}
        </Text>
        <br />
        <Text color="#ADADAD"># Update xcbuddy</Text>
        <Text color="white">xcbuddy update</Text>
      </Box>
      <Link href={withPrefix('/docs')}>
        <Box
          mt={3}
          bg="blue"
          color="white"
          p={3}
          style={{ borderRadius: '3px' }}
        >
          Documentation
        </Box>
      </Link>
    </Flex>
  )
}

const IndexPage = ({ data }) => {
  const spectrumUrl = data.site.siteMetadata.urls.spectrum
  return (
    <Flex flex="1" flexDirection="column">
      <Scale />
      <Features />
      <Community spectrumUrl={spectrumUrl} />
      <Contributors />
      <Tryout data={data} />
    </Flex>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        urls {
          spectrum
          install
        }
      }
    }
  }
`
