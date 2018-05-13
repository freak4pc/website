import * as React from 'react'
import Helmet from 'react-helmet'
import * as _ from 'lodash'

type Props = {
  title: string
  description: string
  twitter?: string
  type?: string
}

export default class OpenGraph extends React.Component<Props> {
  render() {
    const prefixedTitle = `xcbuddy · ${this.props.title}`
    return (
      <Helmet>
        <title>{prefixedTitle}</title>

        {/* TWITTER */}
        {this.props.twitter && (
          <meta property="twitter:creator" content={`@${this.props.twitter}`} />
        )}
        <meta property="twitter:description" content={this.props.description} />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={prefixedTitle} />
        <meta property="og:description" content={this.props.description} />
        {this.props.type && (
          <meta property="og:type" content={this.props.type} />
        )}

        {/* GOOGLE */}
        <meta itemprop="name" content={this.props.title} />
        <meta itemprop="description" content={this.props.description} />
      </Helmet>
    )
  }
}
