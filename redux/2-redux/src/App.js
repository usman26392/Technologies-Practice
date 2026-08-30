
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Coin from './features/coins/Coin';
import Theme from './features/themes/Theme';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Coin/>
      <Theme/>
    </div>
  );
}

export default App;
