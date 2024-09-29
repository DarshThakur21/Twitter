
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 6,
    outline: 'none'
};

export default function SubscriptionModal({open,handleClose}) {
    // using the states for plan subscribing 
    const [plan, setPlan] = React.useState("Anually")


  

    // instruction array
    const features=["Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consecteasfasfasf  asfasfa  aefasfasf tur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur aaasdasf ahsf a  asfha sfashfas asdasufgaeghnas dipisicing elit."]


    
    return (
        
        <div>
            
             
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div className='flex items-center space-x-3' >
                        <IconButton onClick={handleClose} aria-label='delete'>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='flex justify-center py-10'>
                        {/* black boxicle region for the verification offer */}
                        <div className='w-[80%] space-y-10'>
                            <div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-300'>
                                <h1 className='text-xl'>Subscribe to get your self a verfied account and also the exclusive benefits of
                                    the verified user with the honoured blue batch.
                                </h1>
                                <img
                                    className='w-24 h-24'
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" alt="" />

                            </div>
                            <div className='flex justify-between border rounded-full px-5 py-3 bg-gray-200 shadow-sm  border-gray-400'>


                                <div >
                                    <span
                                        onClick={() => setPlan("Anually")}
                                        className={`${plan === "Anually" ? "text-black" : "text-gray-400"}
                                        cursor-pointer`}>Anually </span>
                                    <span className='text-green-500 text-sm ml-5' >Save12% </span>
                                </div>



                                <p
                                    onClick={() => setPlan("Monthly")}
                                    className={`${plan === "Monthly" ? "text-black" : "text-gray-400"}
                                        cursor-pointer`}>Monthly</p>

                            </div>


                        {/* instructions or precaution terms and conditons */}
                            <div className='space-y-3'>
                           { features.map((item)=>
                                <div className='flex items-center space-x-5 '>
                                    <FiberManualRecordIcon
                                        sx={{ width: "7px", height: "7px" }}
                                    />
                                    <p className='text-xs'>{item}</p>

                                </div>

                            )}
                            </div>

                            <div className='cursor-pointer flex justify-center bg-gray-500 text-white rounded-full
                               px-5 py-3'>
                                <span className='line-through italic'>₹7,800.00</span>
                                <span className='px-5 ' >₹6,800/year</span>
                                

                            </div>

                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}