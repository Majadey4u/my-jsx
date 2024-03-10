import React from 'react';

function Price({ price }) { // Define the price prop in the function parameter
  return (
    <div>
      <p>Price:{price}</p> {/* Access the price prop */}
    </div>
  );
}

export default Price;
