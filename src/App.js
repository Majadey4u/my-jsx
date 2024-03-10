// App.js
import React from 'react';
import Product from './Product'; // Corrected typo in import statement
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image.jpg'; // Added semicolon to the end of the import statement
// import { Container, Card } from 'react-bootstrap';

function App() {
  // Assuming Maryjane is a variable holding the first name
  const Maryjane = 'Maryjane';

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          {/* Passing props to the components */}
          <Name name={Product.name} />
          <Price price={Product.price} />
          <Description description={Product.description} />
          <Image imageUrl={Product.imageUrl} />
        </Card.Body>
      </Card>
      <div className="mt-3">
        {/* Displaying a greeting with the first name */}
        <p>Hello, {Maryjane ? `${Maryjane} ${Maryjane}` : 'there'}!</p>
        {/* Displaying an image if the first name is provided */}
        {Maryjane && <img src={Image} alt="Profile" />}
      </div>
    </Container>
  );
}

export default App;
