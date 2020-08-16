import React from 'react'
import { observer, inject } from 'mobx-react'
import SearchField from './SearchField'
import GroupSelect from './GroupSelect'
import TableHead from './TableHead'
import GroupNameTableRow from './GroupNameTableRow'
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

  renderRows = () => {
    if ([null, ''].includes(this.storeObject.params.group_by)) {
      return this.renderOrdinaryRows()
    } else {
      return this.renderGroupedRows()
    }
  }

  renderOrdinaryRows = () => (
    this.articlesArray.map((article, index) => {
      return (
        <TableRow key={index} article={article} />
      )
    })
  )

  renderGroupedRows = () => (
    //  [ { key: [{}...{}]}, { key: [{}...{}]}, { key: [{}...{}]}]
    this.articlesArray.map((groupedHash, groupIndex) => {
      let groupName = Object.keys(groupedHash)[0]
      let groupedArticles = Object.values(groupedHash)[0]

      return (
        <>
          <GroupNameTableRow key={groupIndex} groupName={groupName} />

          {
            Array.isArray(groupedArticles) && groupedArticles.map((article, index) => {
              return <TableRow key={index} article={article} />
            })
          }
        </>
      )
    })
  )

  render() {
    return (
      <div>
        <div>
          <SearchField />
        </div>
        <div>
          <GroupSelect />
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
