import React, { useState,useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate, useParams } from 'react-router-dom'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';
import { useSelector,useDispatch } from 'react-redux';
import { Store } from '../../Store/Store';
import { findUserById,followUser } from '../../Store/Auth/Action';
import { getUsersTweet } from '../../Store/Tweet/Action';
import { findUser} from '../../Store/Auth/Reducer';

 

export default function Profile() {
  const [tabValue,setTabValue]=useState("1");
  const [openProfileModal,setOpenProfileModal]=useState(false);
  const dispatch=useDispatch()
  const {id}=useParams()


  const handleopenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const {auth,tweet}=useSelector((Store)=>Store)

  const handleChange=(event ,newValue)=>{
    setTabValue(newValue)
    if(newValue===4){
      console.log("Likes Tweet")
    }
    else if(newValue===1){
        console.log("user tweets")
    }

  }

  const navigate = useNavigate();

  
  // const handleOpenProfile = () => {
  //   console.log("handleOpenProfile")
    

  // }

  const handleFollowUser = () => {
    dispatch(followUser(id))
    console.log("handleFollowUser")

  }
  const handleBack = () => navigate(-1);

  useEffect(() => {
    dispatch(findUserById(id))
    dispatch(getUsersTweet(id))
  }, [id])
  


  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

        <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>{auth.findUser?.fullName}</h1>

      </section>

      {/* profile batch and own section */}
      <section  >
        <img
          className='w-[100%] h-[15rem] object-cover'
          src="https://i.pinimg.com/564x/ec/d0/19/ecd019cb60258acf2728fd0739bd803f.jpg" alt="" />

      </section>

      <section  >
        <div className='flex justify-between items-start mt-5 h-[rem]'>
          <Avatar alt='Darsh Thakur'
            className='transform -translate-y-24 ml-3'
            src={auth.findUser?.image}
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {/* handling the edit profile section */}
          {auth.findUser?.req_user ? (<Button className='rounded-full' variant='contained'
            sx={{ borderRadius: "20px" }}
            onClick={handleopenProfileModal}
          >
            Edit profile
          </Button>) : (<Button className='rounded-full' variant='contained'
            sx={{ borderRadius: "20px" }}
            onClick={handleFollowUser}
          >
            {!auth.findUser?.followed ? "Follow" : "UnFollow"}
          </Button>)}


        </div>

        <div className='  mt-[-4.0rem]'>
          <div className='flex items-center  '>
            <h1 className='font-bold text-lg'>{auth.findUser?.fullName}</h1>
            {true && <img
              className='ml-2 w-5 h-5'
              src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" alt="" />}
          </div>
          <h1 className='text-gray-500' >@{auth.findUser?.fullName.split(" ").join("_").toLowerCase()}</h1>
        </div>
        <div className='mt-2 space-y-3'>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolorum maiores optio</p>  */}
          <p>{auth.findUser?.bio}</p>
          <div className='py-1 flex space-x-3'>
            <div className='flex items-center text-gray-500'>
              <BusinessCenterIcon />
              <p className='ml-1'>Education</p>

            </div>

            {/* location icon */}
            <div className='flex items-center text-gray-500'>
              <LocationOnIcon />
              <p className='ml-1'>{auth.findUser?.location}</p>

            </div>
            {/* calendar icon */}
            <div className='flex items-center text-gray-500'>
              <CalendarTodayIcon />
              <p className='ml-1'>Joined November 20 </p>
            </div>
          </div>

          <div className='flex items-center space-x-5'>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>{auth.findUser?.followers?.length }</span>
              <span className='text-gray-500'>followers</span>

            </div>
            <div className='flex items-center space-x-1 font-semibold'>
              <span>{auth.findUser?.followings?.length }</span>
              <span className='text-gray-500'>following</span>

            </div>

          </div>


        </div>

      </section>



{/* making the tab section  */}
       <section className='py-3'>


        {/* setting up the tabs sections */}
       <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{tweet.tweets.map((item)=><TweetCard item={item}/>)}</TabPanel>
        <TabPanel value="2">Replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
      </section>

              <section>
                <ProfileModal  handleClose={handleClose} open={openProfileModal} />
              </section>

    </div>
  )
}
