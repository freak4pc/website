import * as React from 'react'
import { Text } from 'rebass'
import styled from 'styled-components'
import theme from '../components/theme'
import { space, themeGet } from 'styled-system'

const MainTitle = Text.extend`
  ${space};
  font-family: Roboto Slab;
  font-size: ${themeGet('fontSizes.5')};
  font-weight: ${themeGet('fontWeights.normal')};
  line-height: ${themeGet('lineHeights.2')};
`

const SecondaryTitle = MainTitle.extend`
  color: ${themeGet('colors.darkblue')};
  font-size: ${themeGet('fontSizes.3')};
  font-weight: ${theme.fontWeights.bold}
  font-size: ${theme.fontSizes[4]};
  line-height: ${themeGet('lineHeights.3')};
`
export { MainTitle, SecondaryTitle }
