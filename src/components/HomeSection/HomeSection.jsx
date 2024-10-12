import FmGoodIcon from '@mui/icons-material/FmdGood';
import ImageIcon from '@mui/icons-material/Image';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Avatar, Button } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createTweet, getAllTweets } from '../../Store/Tweet/Action';
import { UploadToCloud } from '../../Util/UploadToCloud';
import TweetCard from './TweetCard';

const HomeSection = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [selectImage, setselectImage] = useState("");
  const dispatch=useDispatch();
  const {tweet}=useSelector((Store)=>Store);
  console.log("tweet", tweet)



  const validationSchema = Yup.object().shape({
    content: Yup.string().required("tweet text is required")
  })


  const handleSubmit = (values,actions) => {
    const formData = new FormData();
  formData.append('content', values.content);
  if (values.image) formData.append('image', values.image); // Include image if provided

  dispatch(createTweet(formData)); // Dispatch the action to create a tweet
  actions.resetForm()
  

    console.log("values", values)
    setselectImage("null")
  }


  useEffect(()=>{
    dispatch(getAllTweets())
  },[tweet.like,tweet.retweet])




  const formik = useFormik({
    initialValues: {
      content: "",
      image: ""
    },
    onSubmit: handleSubmit,
    validationSchema,
  })


  const handleSelectImage = async(event) => {
    setUploadImage(true);
    const imgUrl = await UploadToCloud(event.target.files[0])
    formik.setFieldValue("image", imgUrl);
    setselectImage( imgUrl);
    setUploadImage(false);

  }



  return (
    <div className='space-y-5'>

      <section  >
        <h1 className='py-5 text-xl font-bold opacity-90' > Home page</h1>
      </section>

      <section className={`pb-10`} >
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
              </div>

            </form>
                <div>
                  {selectImage &&  <img src={selectImage} alt="" />}
                </div>
          </div>


        </div>

      </section>

      <section   >
        {tweet.tweets?.map((item)=><TweetCard item={item} />)}
         
            
      </section>



    </div>
  );
};

export default HomeSection;
