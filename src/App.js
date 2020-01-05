import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import Table from './containers/PendingApprovals/Table/Table';

import { BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{margin: '6%'}}>
          {/* <Blog /> */}
          <Table />
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
