import './App.css';
import Nav from "./Nav";
import Header from "./header";
import Footer from './footer';
import BookingForm from './components/BookingForm';
import Main from './Main';
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import { Routes, Route,Router, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import BookingPage from './components/BookingPage';


<meta name="description" content="hello there"/>;
<meta name="og:title" content=""/>;
<meta name="og:description" content=""/>;
<meta name="og:image" content=""/>;



function App() {
  return (
   
   <div>
    <Header/>
    
    <Main/>
   
    <Footer/>
   </div>
   
  );
}

export default App;
