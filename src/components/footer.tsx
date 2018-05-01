import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { withPrefix } from 'gatsby-link'

const Footer = ({ data }) => {
  return (
    <Flex bg="darkblue" alignItems="stretch" flexDirection="row">
      <Flex m={15} flex="1 0 auto" flexDirection="row">
        <Box display={['none', 'inherit']}>
          <img
            alt="Logo"
            src={withPrefix('/logo.png')}
            height={25}
            width={25}
          />
        </Box>
        <Flex
          ml={10}
          flex="1 1 auto"
          color="white"
          fontSize={15}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          GitHub · Twitter · Spectrum · Legal/Conduct
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
