import { Avatar } from '@mui/material';
import {useFormik} from 'formik';
import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image'
import FmGoodIcon from '@mui/icons-material/FmdGood'
import * as Yup from 'yup';

const HomeSection = () => {
  const [uploadImage, setUploadImage]=useState(false);
  const [selectImage,setselectImage]=useState("");

  const validationSchema=Yup.object().shape({
    content:Yup.string().required("tweet text is required")
  })

  
    const handleSubmit=(values)=>{
        console.log("values",values)
    }



  
    const formik=useFormik({
      initialValues:{
        content:"",
        image:""
      },
      onSubmit:handleSubmit,
      validationSchema,
    })

  
  const handleSelectImage=(event)=>{
      setUploadImage(true);
    const imgUrl=event.target.file[0]
    formik.setFieldValue("image",imgUrl);
    setselectImage(imgUrl);  
    setUploadImage(false);
    
  }

  
  
  return (
    <div className='space-y-5'>
      
     <section>
      <h1 className='py-5 text-xl font-bold opacity-90' > home</h1>
     </section>

      <section className={`pb-10`} >
        <div className='flex space-x-5' >
          <Avatar alt='username' 
              src='https://i.pinimg.com/564x/1a/29/48/1a2948de'
            />
                <div className='w-full' >
                    <form>
                      <div>
                        <input type='text' name='content' placeholder='whats is happening' 
                          className={`border-none outline-none text-xl bg-transparent`}
                          {...formik.getFieldProps("content")}/>
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
                              <ImageIcon className='text-[#1d9bf0]'/>
                              <input type='text' name='imageFile' className='hidden' onChange={handleSelectImage}/>
                              
                              </label>
                              
                            
                            </div>
                           
                        </div>
                      
                    </form>
                  
                </div>

          
        </div>
        
      </section>
      
    </div>
  );
};

export default HomeSection;
