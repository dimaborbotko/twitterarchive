import React from 'react'
import './tweet.css'

export default function Tweet(props) {
  const dateString = props.created;
  const date = new Date(dateString);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDate = date.toLocaleString('uk-UA', options);

  return (
    <div className='tweet_box'>
        <div className='tweet_name'>
            <h6 className='title'>_spring_teen</h6>
        </div>
        <div className='tweet_text'>
            <p className='text'>{props.text}</p>
        </div>
        <div className='tweet_stat'>
          <div className='tweet_stat_nums'>
            <p className='tweet_stat_text'>{props.likes}</p>
            <p className='tweet_stat_text'>{props.retweet}</p>
          </div>
          <p className='tweet_stat_text tweet_stat_created'>{formattedDate}</p>
        </div>
    </div>
  )
} 
