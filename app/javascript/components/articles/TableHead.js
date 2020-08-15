import React from 'react'
import OrderCell from './OrderCell'

class TableHead extends React.Component {
  render() {
    return (
      <tr>
        <OrderCell headField='Story' />
        <OrderCell headField='Name' />
        <OrderCell headField='Text' />
        <OrderCell headField='Article type' />
        <OrderCell headField='Updated at' />
        <OrderCell headField='Created at' />
      </tr>
    )
  }
}

export default TableHead