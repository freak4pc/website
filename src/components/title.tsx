import * as React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components'
import theme from '../components/theme'

const Title = Text.extend`
  font-family: Roboto Slab;
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights.normal};
`
export default Title
