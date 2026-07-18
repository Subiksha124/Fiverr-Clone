import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import Gigs from './pages/gigs/Gigs';
import Orders from './pages/orders/Orders';
import Messages from './pages/messages/Messages';
import Add from './pages/add/Add';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Gig from './pages/gig/Gig';
import Footer from './components/footer/Footer';

function App() {
 const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
 };
    
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/gigs",
        element: <Gigs />
      },
      {
        path:"/orders",
        element: <Orders />
      },
      {
        path:"/messages",
        element: <Messages />
      },
      {
        path:"/add",
        element: <Add />
      },
      {
        path:"/login",
        element: <Login />
      },
      {
        path:"/register",
        element: <Register />
      },
      {
        path:"/gig/:id",
        element: <Gig />
      }
    ]
  }
]);
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
