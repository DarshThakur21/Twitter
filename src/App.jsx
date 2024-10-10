import './App.css'
import {Routes,Route, useNavigate} from 'react-router-dom'; 
import HomePage from './components/HomePage/HomePage';
import Authentication from './components/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';

import { Store } from '@mui/icons-material';
import { useEffect } from 'react';
import { getUserProfile } from './Store/Auth/Action';
  

export default function App() {
  const jwt=localStorage.getItem('jwt')
  const {auth}=useSelector(Store=>Store)
  const dispatch=useDispatch()
  const navigate=useNavigate()


  useEffect(()=>{

    if(jwt){

      dispatch(getUserProfile(jwt))
      navigate("/")
    }

  },[auth.jwt])

  return (

   <div className=''>
     <Routes>
      
       <Route path='/*' element={auth.user?<HomePage/>:<Authentication/> }></Route>
     </Routes>
   </div>
  )
}
