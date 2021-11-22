import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Switch>
      <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      </div>
    </Switch>
    );
}

export default App;
