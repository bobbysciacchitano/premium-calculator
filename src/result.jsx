import React from 'react';
import Message from './components/message';

const Result = ({ isReady, isLoading, price, error }) => {

  if (!isReady) {
    return null;
  }

  if (isLoading) {
    return <Message type='loading'>... Loading ...</Message>;
  }

  if (error) {
    return <Message type='error'>{error}</Message>;
  }

  return <Message type='done'>Your premium calculation is ${price}</Message>;
}

export default Result;
