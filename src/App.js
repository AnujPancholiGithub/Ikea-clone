import logo from './logo.svg';
import './App.css';
import ProductCart from './Components/Cart/ProductCart';
import Track from './Components/Cart/TrackOrder';
import EmptyCart from './Components/Cart/EmptyCart';
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

      <ProductCart/>
      
      
    </div>
    
  );
}

export default App;
