import React from 'react'

class OrderCell extends React.Component {
  handleOrderAscClick = () => {
    console.log('ASC clicked')
  }

  handleOrderDescClick = () => {
    console.log('DESC clicked')
  }

  render() {
    return (
      <td>
        <div className='orderField'>
          {this.props.headField}
        </div>
        <div className='orderDirections'>
          <span onClick={() => this.handleOrderAscClick()}>asc</span>
          <span onClick={() => this.handleOrderDescClick()}>desc</span>
        </div>
      </td>
    )
  }
}

export default OrderCell