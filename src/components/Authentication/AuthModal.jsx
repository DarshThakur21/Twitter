import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SigninModal from './SigninModal';
import SignupModal from './SignupModal';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",

};

export default function AuthModal({ open, handleClose }) {
  const location = useLocation();
  const navigate=useNavigate();



  const handleNavigate = () => { 
      const path=location.pathname==="/signup"?"/signin":"/signup"
      navigate(path);


  }

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <SigninModal/> */}
          <h1 className='text-center font-bold text-3xl pb-14'>Create your Account</h1>
          {location.pathname === "/signup" ? <SignupModal /> : <SigninModal />}

          <h1 className='text-center py-5 font-semibold text-lg text-gray-500'>
          {location.pathname === "/signup" ? "Already Have Account" : "If you dont have account"}
          </h1>
          <Button fullWidth
            sx={{ borderRadius: "29px", py: "15px" }}
            variant='outlined' onClick={handleNavigate}>
            {location.pathname === "/signup" ? "signin" : "signup"}

          </Button>

        </Box>
      </Modal>
    </div>
  );
}