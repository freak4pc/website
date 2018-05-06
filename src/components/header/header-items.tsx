import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { Link, Image, Text } from 'rebass'
import styled from 'styled-components'
import { withPrefix } from 'gatsby-link'

const HoverLink = styled(Link)`
  color: white;
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

export const IconLink = ({ icon, url }) => {
  return (
    <HoverLink
      m={['6px', '0px']}
      className={`fab fa-${icon}`}
      style={{ color: 'white' }}
      href={url}
      target="_blank"
    />
  )
}

export const Logo = () => {
  return (
    <Box m={15}>
      <a href={withPrefix('/')}>
        <Image
          alt="Logo"
          src={withPrefix('/logo.png')}
          height={[40, 25]}
          width={[40, 25]}
        />
      </a>
    </Box>
  )
}

export const Button = ({ path, url, name, location }) => {
  let href: string
  if (path) {
    href = withPrefix(path)
  } else {
    href = url
  }
  return (
    <Flex
      mx={10}
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
    >
      <HoverLink href={href} target={url ? '_blank' : '_self'}>
        <Text textAlign={['center', 'left']}>{name}</Text>
      </HoverLink>
      <Box
        mt={1}
        mb={['5px', '0px']}
        bg="green"
        style={{
          visibility: path == location.pathname ? 'visible' : 'hidden',
        }}
        flex="0 0 3px"
      />
    </Flex>
  )
}

export const NavButtons = ({ urls, location }) => {
  return (
    <Flex
      ml={['0px', '40px']}
      flex="1 1 auto"
      flexDirection={['column', 'row']}
      alignItems="stretch"
      justifyContent={['center', 'flex-start']}
      color="white"
    >
      <Button
        location={location}
        path="/docs"
        url={null}
        name="Documentation"
      />
      <Button location={location} path="/blog" url={null} name="Blog" />
      <Button location={location} path="/faq" url={null} name="Faq" />
      <Button location={location} path="/releases" url={null} name="Releases" />
      <Button
        location={location}
        path={null}
        url={urls.reference}
        name="Reference"
      />
    </Flex>
  )
}

export const NavIcons = ({ urls }) => {
  return (
    <Flex
      flex="0 0 80px"
      mr={15}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconLink icon="twitter" url={urls.twitter} />
      <IconLink icon="stack-overflow" url={urls.stackoverflow} />
      <IconLink icon="github" url={urls.github} />
    </Flex>
  )
}
