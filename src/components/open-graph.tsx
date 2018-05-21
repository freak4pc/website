import * as React from 'react'
import Helmet from 'react-helmet'
import * as _ from 'lodash'
import cardUrl from '../utils/card'

type Props = {
  title: string
  description: string
  twitter?: string
  type?: string
  cardTitle: string
  cardSubtitle: string
}

export default class OpenGraph extends React.Component<Props> {
  render() {
    const prefixedTitle = `xcbuddy · ${this.props.title}`
    const card = cardUrl({
      title: this.props.cardTitle,
      subtitle: this.props.cardSubtitle,
    })
    return (
      <Helmet>
        <title>{prefixedTitle}</title>
        {/* SEARCH ENGINE */}
        <meta name="image" content={card} />

        {/* TWITTER */}
        {this.props.twitter && (
          <meta property="twitter:creator" content={`@${this.props.twitter}`} />
        )}
        <meta property="twitter:description" content={this.props.description} />
        <meta property="twitter:image" content={card} />

        {/* OPEN GRAPH */}
        <meta property="og:title" content={prefixedTitle} />
        <meta property="og:description" content={this.props.description} />
        {this.props.type && (
          <meta property="og:type" content={this.props.type} />
        )}
        <meta property="og:image" content={card} />

        {/* GOOGLE */}
        <meta itemprop="name" content={this.props.title} />
        <meta itemprop="description" content={this.props.description} />
        <meta itemprop="image" content={card} />
      </Helmet>
    )
  }
}
