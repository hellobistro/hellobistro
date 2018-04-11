// Import dependencies
import React from 'react';

// Create parent application
class Test2 extends React.Component {
  render() {
    return (
     <div>
       <h1>This should only render when the route is /test2</h1>
      </div>
    );
  }
};

export default Test2;
