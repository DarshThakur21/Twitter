import './App.css'
import {Routes,Route} from 'react-router-dom'; 
import HomePage from './components/HomePage/HomePage';
import Authentication from './components/Authentication/Authentication';
  

export default function App() {
  return (
   <div className=''>
     <Routes>
      
       <Route path='/*' element={false?<HomePage/>:<Authentication/> }></Route>
     </Routes>
   </div>
  )
}
