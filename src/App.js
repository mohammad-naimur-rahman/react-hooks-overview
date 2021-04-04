//import { createContext, useReducer } from 'react';
import './App.css';
import DataFetching2 from './components/useReducer+useContext/DataFetching2';
//import A from './components/useReducer+useContext/A';
//import B from './components/useReducer+useContext/B';
//import C from './components/useReducer+useContext/C';

//export const UserContext = createContext();
//export const ChannelContext = createContext();

// export const GlobalContext = createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }

function App() {

  //const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      {/* <GlobalContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <p>{count}</p>
        <A />
        <B />
        <C />
      </GlobalContext.Provider> */}
      <DataFetching2 />
    </div>
  );
}

export default App;
