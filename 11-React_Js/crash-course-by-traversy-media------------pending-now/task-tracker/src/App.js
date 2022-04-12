// import logo from './logo.svg';
import Header from './components/Header';
// import './App.css';

 function App() {
  return (
    <div className="container">
      {/* caller of Header component */}
      {/* title is a prop */}
      <Header title='Task tracker' />
    </div>
  );
}

export default App;
