import * as React from 'react'
import { Text, Link, Image } from 'rebass'
import { Flex, Box } from 'grid-styled'
import { themeGet } from 'styled-system'
import styled from 'styled-components'
import { MainTitle, SecondaryTitle } from '../components/title'
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
        flex="0 0 auto"
        alignItems="center"
        px={[3, 6]}
        py={3}
      >
        <SecondaryTitle textAlign={['center', 'center']}>
          We wouldn't exist without them ❤️
        </SecondaryTitle>
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
      </Flex>
    )
  }
}

const Community = () => {
  return <Flex />
}

const Tryout = () => {
  return (
    <Flex
      bg="green"
      flexDirection="column"
      flex="0 0 auto"
      alignItems="center"
      px={[3, 6]}
      py={3}
    >
      <SecondaryTitle
        style={{ color: 'white' }}
        textAlign={['center', 'center']}
      >
        Try it out
      </SecondaryTitle>
      <Text my={3} style={{ color: 'white' }}>
        We’ve made the installation process very easy for you. With just one
        command, you’ll get xcbuddy working on your environment.
      </Text>
      <Box bg="#424242" p={4} style={{ borderRadius: '4px' }}>
        <Text color="#ADADAD"># Install xcbuddy</Text>
        <Text color="white">
          /usr/bin/ruby -e "$(curl -fsSL https://goog.gl/VfkAkR)"
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

const IndexPage = () => (
  <Flex flex="1 0 0" flexDirection="column">
    <Community />
    <Contributors />
    <Tryout />
  </Flex>
)

export default IndexPage
