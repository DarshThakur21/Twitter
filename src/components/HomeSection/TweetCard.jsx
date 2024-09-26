import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from 'react';
export default function TweetCard() {
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

    const navigate = useNavigate();


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
                    <div className='flex justify-between items-center' >
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
                                <MoreHorizIcon/>

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
                            </Menu>
                        </div>

                    </div>

                </div>


            </div>


        </div>
    )
}
