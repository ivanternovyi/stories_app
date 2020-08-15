import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
      <div>UI App entry</div>
    )
  }
}

App.propTypes = {
  articles: PropTypes.array
};

export default App