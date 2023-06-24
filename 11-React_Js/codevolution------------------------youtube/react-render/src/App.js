import logo from './logo.svg';
import './App.css';
import Counter from './components/useState/Counter';
import Counter2 from './components/usereducer/Counter';
import User from './components/stateImmutability/User';
import UserNames from './components/stateImmutability/UserNames';
import Parent from './components/parentChildRelation/Parent';
import ParentOne from './components/optimization/ParentOne';
import ChildOne from './components/optimization/ChildOne';
import GrandParent from './components/optimization2/GrandParent';
import ParentTwo from './components/optimization3/ParentTwo';



function App() {
  return (
    <div className="App">
      {/* <Counter/>   */}
      {/* <Counter2/> */}
      {/* <User/> */}
      {/* <UserNames/> */}

      {/* parent child relation */}
      {/* <Parent/> */}

      {/* for optimization 1 */}
      {/* <ParentOne>
        <ChildOne/>
      </ParentOne> */}

      {/* for optimization 2 */}
      {/* <GrandParent/> */}

      {/* for optimization */}
      <ParentTwo/>



    </div>
  );
}

export default App;
