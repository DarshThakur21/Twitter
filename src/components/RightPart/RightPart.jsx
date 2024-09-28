import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHoriz from '@mui/icons-material/MoreHoriz';


export default function RightPart() {




    const changeTheme = () => {
        console.log("change theme");

    }

    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type="text" className='py-3 rounded-full text-gray-500 w-full pl-12 ' placeholder='search' />

                <div className='absolute  top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500 ' />
                </div>
                <Brightness4Icon className='ml-3 cursor-pointer' onClick={changeTheme} />
            </div>


            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get verified</h1>
                <h1 className='my-2 font-bold'>Sub to get new features</h1>
                <Button variant='contained'
                    sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px", marginLeft: "2px" }}
                >
                    Get Verified
                </Button>


            </section>

            {/* trendind topic section */}
            <section className='mt-7 space-y-5' >
                <h1 className='font-bold text-xl py-1' > Latest News </h1>
                <div>
                    <p className='font-bold'>How can I get the trends back? </p>
                    <p className='text-sm'> UN hostility will not trouble Netanyahu, but now he has angered the US | Patrick Wintour</p>
                </div>

             {[1,1,1,1].map((item)=>   <div className='flex justify-between w-full'>
                    <div>
                        <p>Entertainment . Trending</p>
                        <p className='font-bold'>#Stree2  </p>
                        <p>30k tweets</p>
                    </div>
                    <MoreHoriz />


                </div>)}
            </section>

        </div>
    )
}
