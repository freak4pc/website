import * as React from 'react'
import { Flex, Box } from 'grid-styled'
import { withPrefix } from 'gatsby-link'

const Footer = ({ data }) => {
  return (
    <Flex bg="darkblue">
      <Flex m={15} flexDirection="row">
        <Box flex="0 0 20px">
          <img
            alt="Logo"
            src={withPrefix('/logo.png')}
            height={25}
            width={25}
          />
        </Box>
        <Flex
          flex="1 0 auto"
          mx={10}
          justifyContent="center"
          flexDirection="row"
          alignItems="center"
        >
          <Box color="white" fontSize={15}>
            GitHub · Spectrum · Twitter · Legal/Conduct
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
