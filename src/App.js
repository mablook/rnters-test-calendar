import React, {useEffect} from 'react';
import Context from './components/context/contextStorage/contextStorage';
import useGlobalState from './components/context/useGlobalState/useGlobalState';
import Navigation from './containers/Navigation/Navigation';
import BodyContent from './containers/BodyContent/BodyContent'
import classes from './App.module.css'

function App() {

    const store = useGlobalState();

    let waitingForSomething = [classes.App];

    if(store.state.appHoldState){
      waitingForSomething.push(classes.Thinking);
    }

    useEffect(() => {
      console.log('[app]: holdstatechange');
    },[store.appHoldState]);

  return (
    <div className={waitingForSomething.join(' ')}>
      <Context.Provider value={store}>
        <Navigation />
        <BodyContent />
      </Context.Provider>
    </div>
  );
}

export default App;
