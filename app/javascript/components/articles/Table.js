import React from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'
import ArticlesApi from 'api_clients/ArticlesApi'

class Table extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    ArticlesApi.get()
               .then(response => this.setState({ articles: response }))
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <TableHead />
          </thead>
          <tbody>
          {this.state.articles.map((elem, index) => {
            return (
              <TableRow key={index} article={elem} />
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
