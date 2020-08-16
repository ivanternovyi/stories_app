import React                from 'react'
import { inject, observer } from 'mobx-react'

@inject('articlesStore')

@observer
export default class GroupSelect extends React.Component {
  storeObject = this.props.articlesStore

  handleSelectChange = (e) => {
    this.storeObject.setGroupBy(e.target.value)
  }

  render() {
    return (
      <div className='groupSelect'>
        <select onChange={this.handleSelectChange}>
          <option value=''>Group by any field</option>
          <option value='story'>Story</option>
          <option value='name'>Name</option>
          <option value='text'>Text</option>
          <option value='article_type'>Article Type</option>
          <option value='updated_at'>Updated at</option>
          <option value='created_at'>Created at</option>
        </select>
      </div>
    )
  }
}

