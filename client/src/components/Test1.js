// Import dependencies
import React from 'react';

// Create parent application
class Test1 extends React.Component {
  render() {
    return (
     <div>
       <h1>This should only render when the route is /test1</h1>
      </div>
    );
  }
};

export default Test1;
