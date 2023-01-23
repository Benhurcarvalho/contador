import './App.css';
import React from 'react';
import { connect } from 'react-redux';
// import { actionCreator, clickCounter, clickClean } from './redux/actions/index'
import 'bulma/css/bulma.min.css';
import ContadorFuncional from './Page/ContadorFuncional';

class App extends React.Component {
  render() {
    
    // const { countState, clicksCount, dispatch } = this.props;

    // const dispatchAll = (add = 1) => {
    //   dispatch(actionCreator(add));
    //   dispatch(clickCounter());
    // };

    return (
      <div className="App">
        <ContadorFuncional />
        {/* <h1>Contador</h1>
        <h2>{ countState }</h2>
        <button onClick={() => dispatchAll()}>Incrementa 1</button>
        <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
        <h3>Número de clicks: {clicksCount} </h3>
        <button 
        className='button is-primary is-danger is-light clean'
        onClick={() => dispatch(clickClean())}>Limpar</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clicksCount: state.counterReducer.clicks,
});

export default connect(mapStateToProps)(App);