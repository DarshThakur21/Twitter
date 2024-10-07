import { Button, Grid } from '@mui/material';
import twitterlogo from './Twitter-X-Logo-PNG.png'
import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import AuthModal from './AuthModal';

const Authentication = () => {

  const [openAuthModal,setopenAuthModal]=useState(false);
  const handleOpenAuthModal =()=>setopenAuthModal(true);
  const handleCloseAuthModal=()=>setopenAuthModal(false);


  return (
    <div>
      <Grid className='overflow-y-hidden  relative' container>
        <Grid className='hidden lg:block' item lg={7}>
          <img className='w-full h-screen' src="https://i.pinimg.com/564x/c8/c9/75/c8c975faf09f936c46b0a78541439ece.jpg"
            alt="" />

          <div className='absolute' style={{ top: '28%', left: '20%' }}>
            <img
              className="h-52 w-52"
              src={twitterlogo}
              alt=""
            />
          </div>

        </Grid>

        <Grid className='px-10' lg={5} xs={12}>
            <h1 className='font-bold text-6xl'>Happening Now</h1>
            <h1 className='font-bold text-3xl py-12'>Join Now</h1>

            {/* google authization button */}

            <div className='w-[60%]'>
              <div className='w-full'>
                
                <GoogleLogin width={330}/>
           
                <p className='py-5 text-center'>OR</p>
                <Button fullWidth  variant="contained"
                  onClick={handleOpenAuthModal}
                
                sx={{
                  borderRadius:"29px",
                  py:"7px",
                }}
                >Create Account</Button>
                <p className='mt-2 text-sm' >By singing up, you are agreeing out terms and conditions anad all the security and privacy query and policy</p>
              </div>


              <div>
                <h1 className='font-bold text-xl mt-2 mb-5'>Already have account?</h1>
              <Button fullWidth  variant="outlined" 
                onClick={handleOpenAuthModal}
              sx={{
                  borderRadius:"29px",
                  py:"7px",
                }}
                >login</Button>

              </div>

            </div>

        </Grid>

      </Grid>

      <AuthModal  open={openAuthModal} handleClose={handleCloseAuthModal}/>
    </div>
  );
};

export default Authentication;
