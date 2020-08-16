import React from 'react'
import { observer, inject } from 'mobx-react'
import SearchField from './SearchField'
import TableHead from './TableHead'
import TableRow from './TableRow'
import { computed, toJS } from 'mobx'

@inject('articlesStore')

@observer
class Table extends React.Component {
  storeObject = this.props.articlesStore

  componentDidMount() {
    this.storeObject.getArticles()
  }

  @computed get articlesArray() {
    return toJS(this.storeObject.articlesArray)
  }

  renderRows = () => (
    this.articlesArray.map((elem, index) => {
      return (
        <TableRow key={index} article={elem} />
      )
    })
  )

  render() {
    return (
      <div>
        <div>
          <SearchField />
        </div>
        <table>
          <thead>
            <TableHead />
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
