import React from 'react'

class TableRow extends React.Component {
  render() {
    const { name, text, article_type } = this.props.article

    return (
      <tr>
        <td>{name}</td>
        <td>{text}</td>
        <td>{article_type}</td>
      </tr>
    )
  }
}

export default TableRow