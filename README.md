## Notes

#### styled-components

Styled components is a library that lets you write actual CSS in your JS. Docs are here: https://styled-components.com/

```js
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
`;

// there is no name collisions with styled components!
const Container = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 8rem;
  }
`;
const Container2 = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 8rem;
  }
`;

function App() {
  return (
    <Container>
      <div>
        <h3>Hello World</h3>
      </div>
      <div className='hero'>hero text</div>
    </Container>
    <Container2>
      <div>
        <h3>Hello World</h3>
      </div>
      <div className='hero'>hero text</div>
    </Container2>
  );
}
```
