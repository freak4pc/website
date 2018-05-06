import * as React from 'react'
import { Image } from 'rebass'
import { Flex, Box } from 'grid-styled'
import { withPrefix } from 'gatsby-link'

const NotFoundPage = () => {
  return (
    <Flex
      flex="1 0 auto"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Image
        alt="Not found image"
        src={withPrefix('/404.png')}
        height="344px"
        width="1000px"
      />
    </Flex>
  )
}

export default NotFoundPage
