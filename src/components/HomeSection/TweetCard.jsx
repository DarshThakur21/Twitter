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

// import RepeatIcon from '@mui/icons-material/Repeat';


export default function TweetCard() {

    const [isLiked, setIsLiked] = useState(false);
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
        console.log("handleCreateRetweet")
    }

    const handleLiketweet = () => {
        console.log("handleLiketweet")
        setIsLiked(!isLiked);
    }

    return (
        <div className=''>
            {/* <div className='flex items-center font-semibold text-gray-500 py-2'>
            <RepeatIcon/>
            <p>your tweet</p>
         </div>     */}


            {/* avatar and profile display */}
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

                    <div className='mt-2'>
                        <div className='cursor-pointer   '>
                            <p className='mb-2 p-0'>Hello people on twitter yada yada yadadasdasdas</p>
                            <img className=' w-[28rem]  border border-gray-400 p-5 rounded-md' src="https://i.pinimg.com/564x/c1/17/d5/c117d595dba0901578e35a2d82775ee8.jpg" alt="" />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center  '>
                            <div className='space-x-2 flex items-center text-gray-600  '>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>40</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-2 flex items-center `}>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet} />
                                <p>45</p>

                            </div>
                            <div className={`${isLiked ? "text-pink-600" : "text-gray-600"} space-x-2 flex items-center `}>
                                {true ? <FavoriteIcon className='cursor-pointer' onClick={handleLiketweet} /> :
                                    <FavoriteBorderIcon className='cursor-pointer' onClick={handleLiketweet} />}
                                <p>4 </p>

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


        </div>
    )
}
