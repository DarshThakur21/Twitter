import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReplyModal from './ReplyModal';
import { useDispatch } from 'react-redux';
import { createReTweet, likeTweet } from '../../Store/Tweet/Action';

// import RepeatIcon from '@mui/icons-material/Repeat';


export default function TweetCard({item}) {

    // const [isLiked, setIsLiked] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);




    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeletetweet = () => {
        console.log("delete tweet")
        handleClose();

    }
    const handleDeleteedit = () => {
        console.log("edit tweet")
        handleClose();

    }

    const navigate = useNavigate();
    //creating the chat bubble and reply functionality
    const handleOpenReplyModel = () => {
        console.log("open model")
    }

    //retweeting button
    const handleCreateRetweet = () => {
        dispatch(createReTweet(item?.id))
        console.log("handleCreateRetweet")
    }

    const handleLiketweet = () => {
        dispatch(likeTweet(item?.id))
        console.log("handleLiketweet")
        // setIsLiked(!isLiked);
    }


    // for the reply modal

    const [openReplyModal, setOpenReplyModal] = useState(false);


    const handleopenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);
    const dispatch=useDispatch();

    return (
        <React.Fragment  >
            {/* <div className='flex items-center font-semibold text-gray-500 py-2'>
            <RepeatIcon/>
            <p>your tweet</p>
         </div>     */}


            {/* avatar and profile display */}
            <div className='flex space-x-5' >
                <Avatar
                    onClick={() => navigate(`/profile/${item?.user.id}`)}
                    className='cursor-pointer'
                    alt='username' src='https://i.pinimg.com/564x/1a/29/48/1a2948de' />

                <div className='w-full'>
                    <div className='flex justify-between items-center  ' >
                        <div className='flex cursor-pointer items-center space-x-2' >
                            <span className='font-semibold'>{item?.user?.fullName}</span>
                            <span className='text-gray-600'>@{item?.user?.fullName.split(" ").join("_").toLowerCase()} . 1hr</span>   
                            <img
                                className='ml-2 w-5 h-5'
                                src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg" alt="" />
                        </div>

                        <div>

                            <Button
                                id="basic-button"
                                aria-controls={open ? "basic-menu" : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />

                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >

                                <MenuItem onClick={handleDeletetweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteedit}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>
{/* https://i.pinimg.com/564x/c1/17/d5/c117d595dba0901578e35a2d82775ee8.jpg */}
                    <div className='mt-2'>
                        {/* onClick={()=>navigate(`/tweet/${2}`)} used this to implement the redirecting of the tweet  */}
                        <div onClick={() => navigate(`/tweet/${item?.id}`)} className='cursor-pointer' >
                            <p className='mb-2 p-0'>{item?.content}</p>
                            <img className=' w-[28rem]  border border-gray-400 p-5 rounded-md' src={item?.image} alt="" />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center  '>
                            <div className='space-x-2 flex items-center text-gray-600  '>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleopenReplyModal} />
                                <p>{item?.totalReplies}</p>
                            </div>

                            <div className={`${item?.retweet ? "text-pink-600" : "text-gray-600"} space-x-2 flex items-center `}>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet} />
                                <p>{item?.totalRetweets}</p>

                            </div>
                            <div className={`${item?.liked ? "text-pink-600" : "text-gray-600"} space-x-2 flex items-center `}>
                                {item?.liked ? <FavoriteIcon className='cursor-pointer' onClick={handleLiketweet} /> :
                                    <FavoriteBorderIcon className='cursor-pointer' onClick={handleLiketweet} />}
                                <p>{item?.totalLike} </p>

                            </div>
                            <div className='space-x-2 flex items-center text-gray-600  '>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>40</p>
                            </div>
                            <div className='space-x-2 flex items-center text-gray-600  '>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />

                            </div>

                        </div>

                    </div>

                </div>




            </div>


            {/* implementing the chat function in the tweet scroll area and icon intergration */}
            <section>
                <ReplyModal item={item}  open={openReplyModal} handleClose={handleCloseReplyModal}/>

            </section>

        </React.Fragment>
    )
}
