import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Router } from 'react-router-dom';


function App() {
  return (
    <>
   
      <div className="App">
          <ChakraProvider>
            <Header/>
            <Footer/>
          </ChakraProvider>
        </div>
      
    
    </>
  );
}

export default App;
