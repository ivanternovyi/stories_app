import React from 'react'
import Header from './Header.js'
import Table from './articles/Table'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Table />
      </>
    )
  }
}

export default App