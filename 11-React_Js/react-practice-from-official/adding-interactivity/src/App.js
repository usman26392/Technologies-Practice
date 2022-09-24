
// import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/* way-1 */}
      {/* <Toolbar/> */}

      {/* way-2 */}
      <Toolbar 
        playMovie={()=> {alert('playing movie!')}}
        uploadImg={()=> {alert('uploading image!')}}
      />

    </div>
  );
}

export default App;
