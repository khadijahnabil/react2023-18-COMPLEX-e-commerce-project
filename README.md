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

#### Setting up Context & Reducer

1. create actions.js to store the actions

e.g.

```js
export const BLABLA = "BLABLA";
export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
```

2. create reducer file

e.g. blabla_reducer.js

```js
import { BLABLA, OPEN, CLOSE } from "../actions";

const blabla_reducer = (state, action) => {
  if (action.type === BLABLA) {
    return { ...state, blablaState: null };
  }
  if (action.type === OPEN) {
    return { ...state, blablaState: true };
  }
  if (action.type === CLOSE) {
    return { ...state, blablaState: false };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

export default blabla_reducer;
```

3. create context file

e.g. blabla_context.js

```js
import { createContext, useContext, useReducer } from "react";
import {BLABLA, OPEN, CLOSE} "../actions";
import reducer from "../reducers/blabla_reducer";

const BlablaContext = createContext();

const initialState = {
  blablaState: false;
}

export const BlablaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const blablaFunc = () => {
    dispatch({ type: BLABLA });
  };

  const openFunc = () => {
    dispatch({ type: OPEN });
  };

  const closeFunc = () => {
    dispatch({ type: CLOSE });
  };

  return (
    <BlablaContext.Provider value={{ ...state, blablaFunc, openFunc, closeFunc }}>
      {children}
    </BlablaContext.Provider>
  );
};

export const useBlablaContext = () => {
  return useContext(BlablaContext);
};

```

4. wrap the whole application in the provider

-> to index.js

```js
import { BlablaProvider } from "./context/blabla_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BlablaProvider>
    <App />
  </BlablaProvider>
);
```

5. use in the component you want

-> to designated component

```js
import { useBlablaContext } from "../context/blabla_context";

const someComponent = () => {
  const { blablaState, blablaFunc, openFunc, closeFunc } = useSidebarContext();
  return (
    /* some sort of HTML shit*/
    <button onClick = {openFunc}>
  )

```
