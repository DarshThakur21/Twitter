import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageIcon from '@mui/icons-material/Image'
import FmGoodIcon from '@mui/icons-material/FmdGood'

import TagFacesIcon from '@mui/icons-material/TagFaces'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createreplyTweet, replyTweet } from '../../Store/Tweet/Action';




// implementing the comment function
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
  outline: 'none',
  borderRadius: 6,
};

export default function ReplyModal({ handleClose, open, item }) {

  const [uploadImage, setUploadImage] = React.useState(false);
  const [selectImage, setselectImage] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);


  const handleSelectImage = (event) => {
    setUploadImage(true);
    const imgUrl = event.target.files[0]
    formik.setFieldValue("image", imgUrl);
    setselectImage(imgUrl);
    setUploadImage(false);

  }

  const handleSubmit = (values) => {
    dispatch(createreplyTweet(values))
    handleClose()
    console.log("handleSubmit", values);
  
  }

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      tweetId: item?.id,
    },
    onSubmit: handleSubmit
  })

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {/* having the avatar and the image section on the modal */}
          <div className='flex space-x-5' >
            <Avatar
              onClick={() => navigate(`/profile/${6}`)} 
              className='cursor-pointer'
              alt='username' src='https://i.pinimg.com/564x/1a/29/48/1a2948de' />

            <div className='w-full'>
              <div className='flex justify-between items-center  ' >
                <div className='flex cursor-pointer items-center space-x-2' >
                  <span className='font-semibold'>Darsh Thakur</span>
                  <span className='text-gray-600'>@thakurdarsh21 . 1hr</span>
                  <img
                    className='ml-2 w-5 h-5'
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" alt="" />
                </div>
              </div>

              <div className='mt-2'>
                {/* onClick={()=>navigate(`/tweet/${2}`)} used this to implement the redirecting of the tweet  */}
                <div onClick={() => navigate(`/tweet/${2}`)} className='cursor-pointer' >
                  <p className='mb-2 p-0'>Hello people on twitter yada yada yadadasdasdas</p>
                  {/* <img className=' w-[28rem]  border border-gray-400 p-5 rounded-md' src="https://i.pinimg.com/564x/c1/17/d5/c117d595dba0901578e35a2d82775ee8.jpg" alt="" /> */}

                </div>

              </div>

            </div>




          </div>
          <section className={`py-10`} >
            <div className='flex space-x-5' >
              <Avatar alt='username'
                src='https://i.pinimg.com/564x/1a/29/48/1a2948de'
              />
              <div className='w-full' >
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input type='text' name='content' placeholder='whats is happening'
                      className={`border-none outline-none text-xl bg-transparent`}
                      {...formik.getFieldProps("content")} />
                    {formik.errors.content && formik.touched.content && (
                      <span className='text-red-500' >{formik.errors.content}</span>
                    )}
                  </div>
                  {/*this div for varius inputs  */}
                  {/* <div>
                          <img src='' alt='' />
                      </div> */}
                  <div className='flex justify-between items-center mt-5'>
                    <div className='flex space-x-5 items-center'>

                      <label className='flex item-center space-x-2 rounded-md cursor-pointer'>
                        <ImageIcon className='text-[#1d9bf0]' />
                        <input type='file' name='imageFile' className='hidden' onChange={handleSelectImage} />

                      </label>
                      <FmGoodIcon className='text-[#1d9bf0]' />
                      <TagFacesIcon className='text-[#1d9bf0]' />
                    </div>
                    <Button sx={{
                      width: "20%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: "#1d9bf0",
                    }}
                      variant="contained"
                      type='submit'
                    >
                      Tweet
                    </Button>


                  </div>

                </form>

              </div>


            </div>

          </section>
        </Box>
      </Modal>
    </div>
  );
}