import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Outlet} from 'react-router-dom';
import Navbar from './component/Navbar';
import { cartActions } from "./store/index";
function App() {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(cartActions.DEFAULTCART); 
  }, [])
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
