// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Box } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from './Components/Home/Home';

function App() {
  return (
    <Box className='App' >
      <Header />
      <AllRoutes />
      <Footer />
    </Box>

  );
}

export default App;
