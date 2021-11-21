import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'

const HatsPage = () => (
  <div> <h1>HATS PAGE</h1></div>
)

function App() {
  return (
    <Switch>
      <div >
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
      </div>
    </Switch>
    );
}

export default App;