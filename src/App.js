import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
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
=======
import { Box } from '@chakra-ui/react';
import Products from './Components/Products/Products';

function App() {
  return (

    <Box className="App">
      <Products />
    </Box>
>>>>>>> 81818ba1b5957ea120151d67202b34d33231202a
  );
}

export default App;
