import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

function App() {
  return (
    <HashRouter>
    <React.Suspense fallback={loading()}>
      <Switch>
        <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
      </Switch>
    </React.Suspense>
    </HashRouter>
  );
}

export default App;
