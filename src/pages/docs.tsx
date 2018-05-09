import * as React from 'react'
import OpenGraph from '../components/open-graph'
import Page from '../components/page'
import Sidebar from 'react-sidebar'

type DocsPageState = {
  sidebarOpen: boolean
}

export default class DocsPage extends React.Component<any, DocsPageState> {
  showSettings(event) {
    event.preventDefault()
  }
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open })
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>
    return (
      <Page id="page-container">
        {/* <Sidebar
          sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          <b>Main content</b>
        </Sidebar> */}
        <OpenGraph
          title="Documentation"
          description="Read the latest news about the xcbuddy project"
        />
      </Page>
    )
  }
}
