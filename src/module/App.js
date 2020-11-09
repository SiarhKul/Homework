import CounterDemonstrator from './components/CounterDemonstrator/CounterDemonstrator';
import { connect } from 'react-redux';
import { useCallback, useState } from 'react';

function App(props) {

   const [inp, setInp] = useState('');

   const onInputChange = useCallback(({ target: { value } }) => {
      setInp(value);
   }, [setInp]);

   const setCounter = useCallback(() => {
      props.setCounter(inp);
   })

   return (
      <div className="App">
         <CounterDemonstrator counterToShow={props.currentCounter} />
         <button onClick={props.incrementCounter}>+</button>
         <button onClick={props.decrementCounter}>-</button>
         <button onClick={props.resetCounter}>reset counter</button>
         <br />
         <input type='text' value={inp} onChange={onInputChange} />
         <button onClick={setCounter} > set counter </button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      currentCounter: state.counter,
   };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      incrementCounter: () => dispatch({ type: "INCREMENT_COUNTER" }),
      decrementCounter: () => dispatch({ type: "DECREMENT_COUNTER" }),
      setCounter: (number) => dispatch({ type: 'SET_COUNTER', payload: number })
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

