import * as React from 'react'
import { Image, Text, Link } from 'rebass'
import { Flex, Box } from 'grid-styled'
import { Logo, NavButtons, NavIcons } from './header-items'
import { withPrefix } from 'gatsby-link'
import BaseHeader from './base-header'
import styled from 'styled-components'
import { themeGet, display } from 'styled-system'

const HidableFlex = styled(Flex)`
  ${display};
`

const gradientBackgroundStyle = {
  background:
    'linear-gradient(to bottom, #4690a2 0%,#264f5a 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
  filter:
    "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4690a2', endColorstr='#264f5a',GradientType=0 )" /* IE6-9 */,
}

const HomeHeader = ({ data, location }) => {
  return (
    <Flex
      style={{ ...gradientBackgroundStyle }}
      flexDirection="column"
      flex="0 0 auto"
    >
      <BaseHeader data={data} location={location} bg="transparent" />
      <Flex flex="1 1 auto" flexDirection={['column', 'row']}>
        {/* LEFT */}
        <HidableFlex
          flex="1 1 auto"
          my={4}
          justifyContent="center"
          display={['none', 'inherit']}
        >
          <Box flex="0 0 auto" flexDirection="row">
            <Image alt="Features" width={220} src={withPrefix('/logo.png')} />
          </Box>
        </HidableFlex>
        {/* RIGHT */}
        <Flex
          flex="1 1 auto"
          flexDirection="column"
          alignItems="center"
          pt={3}
          px={4}
        >
          <Text color="white" fontWeight="semibold" fontSize={3}>
            An Xcode buddy that empowers your productivity
          </Text>
          <Text color="white" fontSize={3} fontWeight="normal">
            Spend less time fighting issues and more building great apps
          </Text>
          <Flex flexDirection="row" mt={3} mb={[4, 0]}>
            <Link href={data.siteMetadata.urls.github} target="__blank">
              <Box
                bg="white"
                py={2}
                px={3}
                color="blue"
                style={{ borderRadius: '4px' }}
              >
                GitHub
                <Text className={`fab fa-github`} color="blue" ml={2} />
              </Box>
            </Link>
            <Link href={withPrefix('/docs')}>
              <Box
                bg="transparent"
                py={2}
                px={3}
                ml={3}
                color="white"
                borderColor="white"
                style={{ borderRadius: '4px', border: '1px solid' }}
              >
                Documentation
              </Box>
            </Link>
          </Flex>

          <Flex
            flex="1 0 auto"
            flexDirection="column"
            justifyContent="flex-end"
          >
            <Flex
              bg="black"
              flexDirection="column"
              flex="0 0 auto"
              style={{
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
              }}
              pt={2}
              px={3}
              pb={4}
            >
              <Flex flexDirection="row" flex="1 0">
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    background: '#FF5F56',
                    borderRadius: '6px',
                  }}
                />
                <div
                  style={{
                    marginLeft: '6px',
                    width: '12px',
                    height: '12px',
                    background: '#FFBD2E',
                    borderRadius: '6px',
                  }}
                />
                <div
                  style={{
                    marginLeft: '6px',
                    width: '12px',
                    height: '12px',
                    background: '#27C93F',
                    borderRadius: '6px',
                  }}
                />
              </Flex>
              <Box px={3} mt={3}>
                <Text># Install xcbuddy</Text>
                <Text color="green">
                  <span style={{ color: 'white' }}>{`/usr/bin/ruby -e `}</span>
                  <span style={{ color: '#BDBF09' }}>{`"$(curl -fsSL ${
                    data.siteMetadata.urls.install
                  })"`}</span>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default HomeHeader
