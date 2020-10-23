import React, { Component } from 'react'
import RouterView from './router';
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView />
      </ConfigProvider>
    )
  }
}

export default App
