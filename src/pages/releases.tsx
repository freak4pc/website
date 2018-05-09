import * as React from 'react'
import OpenGraph from '../components/open-graph'
import { Text, Link } from 'rebass'
import { Box, Flex } from 'grid-styled'
import { themeGet } from 'styled-system'
import Page from '../components/page'
import { MainTitle, SecondaryTitle } from '../components/title'
import timeago from 'timeago.js'
import Api from '../utils/api'
import * as showdown from 'showdown'
import styled from 'styled-components'

const HoverLink = styled(Link)`
  color: ${themeGet('colors.darkblue')};
  &:hover {
    color: ${themeGet('colors.green')};
  }
`
export const IconLink = ({ icon, url }) => {
  return (
    <HoverLink
      ml={2}
      className={`fab fa-${icon}`}
      href={url}
      target="_blank"
      style={{
        fontSize: '26px',
      }}
    />
  )
}

const Version = ({ index, release }: { index: number; release: Release }) => {
  const prLinkRegex = /https:\/\/github\.com\/.+\/.+\/(pull|issues)\/(\d*)/g
  const body = release.body.replace(prLinkRegex, (match, _, number) => {
    return `[#${number}](${match})`
  })
  // https://github.com/xcbuddy/xcbuddy/pull/25
  const converter = new showdown.Converter({
    ghCompatibleHeaderId: 'true',
    ghMentions: 'true',
    ghMentionsLink: 'true',
    simplifiedAutoLink: 'true',
    openLinksInNewWindow: 'true',
  })
  const html = converter.makeHtml(body)
  return (
    <Flex flexDirection="row" flex="1 0 auto">
      <Flex flex="0 0 50px" flexDirection="column" alignItems="center">
        {index == 0 && <Box width="5px" flex="0 0 10px" />}
        <Box
          width="16px"
          bg="orange"
          flex="0 0 16px"
          style={{ borderRadius: '8px' }}
        />
        <Box width="5px" bg="grey" flex="1" />
      </Flex>
      <Flex
        flex="1 1 auto"
        flexDirection="column"
        mb={6}
        alignItems="flex-start"
      >
        <Flex flexDirection="row" alignItems="center">
          <SecondaryTitle>{release.name}</SecondaryTitle>
          <IconLink icon="github" url={release.html_url} />
        </Flex>
        <Text style={{ fontStyle: 'italic' }} color="darkgrey">
          Published {timeago().format(release.published_at)}
        </Text>
        <Box style={{ display: 'flex', flex: '1 0 auto' }}>
          <Text dangerouslySetInnerHTML={{ __html: html }} />
        </Box>
        <Link href={release.app.browser_download_url}>
          <Box
            bg="orange"
            color="white"
            px={3}
            py={2}
            mt={4}
            style={{ borderRadius: '4px' }}
          >
            Download
          </Box>
          <Text mt={2} ml={1} fontSize={1}>{`${
            release.app.download_count
          } downloads`}</Text>
        </Link>
      </Flex>
    </Flex>
  )
}

type Release = {
  url: string
  tag_name: string
  name: string
  body: string
  published_at: string
  html_url: string
  app: {
    size: number
    browser_download_url: string
    download_count: number
  }
}

type ReleasesPageProps = {}
type ReleasesPageState = {
  releases: Release[]
}

export default class ReleasesPage extends React.Component<
  ReleasesPageProps,
  ReleasesPageState
> {
  constructor(props) {
    super(props)
    this.state = { releases: [] }
  }

  componentDidMount() {
    Api.releases()
      .then(releases => {
        this.setState({ releases })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Page>
        <OpenGraph
          title="Releases"
          description="Check out all the project releases"
        />
        <MainTitle mb={4} mt={[4, 0]} textAlign="left">
          Releases
        </MainTitle>
        <Flex flex="1 0 auto" flexDirection="column" alignItems="stretch">
          {this.state.releases.map((release, index) => {
            return <Version key={index} index={index} release={release} />
          })}
        </Flex>
      </Page>
    )
  }
}
