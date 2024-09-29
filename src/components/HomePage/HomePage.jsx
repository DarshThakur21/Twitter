import { Grid } from '@mui/material';
import React from 'react';
import '../../index.css';
import 'tailwindcss/tailwind.css';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPart from '../RightPart/RightPart';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TweetDetail from '../TweetDetail/TweetDetail';

const HomePage = () => {
  return (
    <Grid container className='px-5 lg:px-36 justify-between'>
      {/* this is the left portion navigation */}
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>


        <Navigation />
      </Grid>


      {/* middle feed portion */}
      <Grid item xs={12} lg={6} className='px-5 lg:px-9  hidden lg:block w-full relative '>
        {/* <p className='text-center'>middle part</p> */}

        <Routes>
          <Route path='/' element={<HomeSection />}></Route>
          <Route path='/home' element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/tweet/:id" element={<TweetDetail />}></Route>
        </Routes>

        
      </Grid>



      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative  '>

        <RightPart />

      </Grid>
    </Grid>
  );
};

export default HomePage;
