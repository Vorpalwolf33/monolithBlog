import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

// Importing styles
import './styles/app.css'

import Navbar from './components/common/navbar';
import LoginPage from './components/loginPage/loginPage';
import RegistrationPage from './components/registrationPage/registrationPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/" component={ () => {return (<Redirect to="/login" />)}}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
