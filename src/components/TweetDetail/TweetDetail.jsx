import React, { useEffect } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { useNavigate, useParams } from 'react-router-dom'
import TweetCard from '../HomeSection/TweetCard';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { findTweetsById, replyTweet } from '../../Store/Tweet/Action';
import { Store } from '../../Store/Store';
 
 

const TweetDetail=()=> {

    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    const dispatch=useDispatch()

    const {id}=useParams()
    const {tweet}=useSelector((Store)=>Store)
    // const tweet = useSelector((state) => state.tweet.tweet) || {};


    useEffect(()=>{
        if(id){
            dispatch(findTweetsById(id))
        }
    },[id])


    const replies = tweet.replyTweet || [];
    return (
        <React.Fragment >

            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Tweet</h1>

            </section>
            <section>
                <TweetCard item={tweet.tweet} />
                <Divider sx={{ margin: "2rem 0rem" }}
                />
            </section>

            <section>
                { tweet.tweet?.replyTweets.map ((item) => <TweetCard item={item} />)}
                {/* {tweet.tweet && tweet.tweet.replyTweet && tweet.tweet.replyTweet.length > 0 ? (
        tweet.tweet.replyTweets.map((item) => <TweetCard key={item.id} item={item} />)
    ) : (
        <p>No replies yet.</p> // Fallback in case there are no replies
    )} */}
           


            </section>

        </React.Fragment>


    )
}

export default TweetDetail