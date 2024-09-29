import * as React from 'react';
// import {useState} from React;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import { Avatar, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Navigate, useNavigate } from 'react-router-dom';
import './ProfileModal.css'

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
    outline: "none",
    borderRadius: 5,

};

export default function ProfileModal({open,handleClose}) {
    // const [open, setOpen] = React.useState(false);
    const [uploading, setUploading] = React.useState(false)
    const navigate = useNavigate();






    const handleSubmit = (values) => {
        console.log("handleSubmit",values   )
    }

    const handleImageChange = (event) => {
        setUploading(true);
        const { name } = event.target
        const file = event.target.files[0];
        formik.setFieldValue(name, file);
        setUploading(false);


    }


    const formik = useFormik({
        initialValues: {
            fullName: "",
            website: "",
            location: "",
            bio: "",
            backgroundImage: "",
            Image: "",
        },
        onSubmit: handleSubmit
    });

    // const handleCrossbtn = () => navigate(-1);


    return (
        <div>
            {/* location */}


            
            {/* used modal section from the mui pre made */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3' >
                                <IconButton onClick={handleClose} aria-label='delete'>
                                    <CloseIcon   />
                                </IconButton>
                                <p className='text-sm '>Edit Profile</p>

                            </div>
                            <Button type='submit'>
                                Save
                            </Button>

                        </div>

                        <div className=' hideScrollBar overflow-y-scroll  overflow-x-hidden    h-[80vh] '>
                            <React.Fragment>
                                <div className='w-full' >

                                    {/* editing bio image */}
                                    <div className='relative' >
                                        <img
                                            className='w-full h-[12rem] object-cover object-center'

                                            src="https://i.pinimg.com/564x/ec/d0/19/ecd019cb60258acf2728fd0739bd803f.jpg"
                                            alt="" />
                                        <input type="file"
                                            className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                            name="image"
                                        />
                                    </div>
                                    {/* editing bio image */}


                                </div>

                                {/* implmenting the avatar and pfp section */}
                                <div className='w-full transform -translate-y-20  ml-3 h-[6rem]:'>

                                    <div className='relative'>
                                        <Avatar
                                            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                                            src='https://i.pinimg.com/736x/a1/40/66/a140663008ce810bf89a407b049096d1.jpg' />
                                             <input type="file"
                                            className='absolute top-0 left-0 w-[10rem] h-full opacity-0 cursor-pointer'
                                            onChange={handleImageChange}
                                        />


                                    </div>

                                </div>
                                {/* implmenting the avatar and pfp section */}
                            </React.Fragment>

                            {/* name and all the other conventions */}
                            <div className='space-y-3 mt-[-4.0rem]'>
                                <TextField
                                    // className='mt-10'
                                    fullWidth
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    value={formik.values.fullName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                />


                                {/* Bio section of the profile modal */}

                                <TextField
                                    // className='mt-10'
                                    fullWidth
                                    multiline
                                    rows={4}
                                    id="bio"
                                    name="bio"
                                    label="Bio"
                                    value={formik.values.bio}
                                    onChange={formik.handleChange}
                                    error={formik.touched.bio && Boolean(formik.errors.bio)}
                                    helperText={formik.touched.bio && formik.errors.bio}
                                />
                                {/* Bio section of the profile modal */}


                                {/* website section of profile */}
                                <TextField
                                    // className='mt-10'
                                    fullWidth
                                    id="website"
                                    name="website"
                                    label="Website"
                                    value={formik.values.website}
                                    onChange={formik.handleChange}
                                    error={formik.touched.website && Boolean(formik.errors.website)}
                                    helperText={formik.touched.website && formik.errors.website}
                                />
                                {/* website section of profile */}




                                {/* location section of profile */}
                                <TextField
                                    // className='mt-10'
                                    fullWidth
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                />
                                {/* location section of profile */}



                                {/* Dob  section of profile */}
                                <div className='my-3'>

                                    <p className='text-lg' >D.O.B   - Edit</p>
                                    <p className='text-2xl'>June 21, 2003</p>
                                </div>
                                {/* Dob section of profile */}

                                <p className='py-3 text-lg text-gray-500'>Edit professional profile</p>


                            </div>
                            {/*  */}

                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}