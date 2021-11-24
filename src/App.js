import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <div >
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        </div>
      </Switch>
    </div>
    );
}

export default App;
