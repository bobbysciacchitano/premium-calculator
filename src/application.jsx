import React, { Component } from 'react';

import Request from './request';
import Query from './query';
import Result from './result';

import './styles.css';

class Application extends Component {

  state = {}

  async processQuery(params) {

    this.setState({
      isReady: false,
      isLoading: true,
    });

    let result;
  
    try {

      result = await Request.post('/premium-calculator', params).then(({ data }) => data);

    } catch (e) {

      result = {
        error: 'Something went wrong while trying to calculate your premium.',
      };

    }

    this.setState({
      isLoading: false,
      isReady: true,
      error: undefined,
      ...result,
    });
  }

  render() {

    return (
      <div>

        <h2>My Premium Calculator</h2>

        <Query onSubmit={(form) => this.processQuery(form)} />

        <hr />

        <Result {...this.state} />

      </div>
    );

  }

}

export default Application;
