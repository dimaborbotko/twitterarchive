import { useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";
import { tweetsData } from "./data/tweet";

function App() {
  const [reverse, setReverse] = useState(false);
  const sortedTweets = tweetsData.sort((a, b) => {
    const dateA = new Date(a.tweet.created_at);
    const dateB = new Date(b.tweet.created_at);
    if(reverse) return dateB - dateA;
    if(!reverse) return dateA - dateB;
    return null;
  });
  return (
    <div className="App">
      <div className="navBar">
        <div>
          <h2 className="length">{tweetsData.length} твітс</h2>
          <p className="sub">+2 години до часу публікації </p>
        </div>
          
          <button className="btn" onClick={() => setReverse(!reverse)}>Reverse</button>
        </div>
      <div className="container">
        <div className="content">
          {sortedTweets?.map((tweet, index) => {
            if (!tweet) return null;
            return (
              <Tweet
                key={index}
                text={tweet.tweet.full_text}
                likes={tweet.tweet.favorite_count}
                retweet={tweet.tweet.retweet_count}
                created={tweet.tweet.created_at}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
