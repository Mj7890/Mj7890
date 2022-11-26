import React from 'react';
import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestion from "../components/Suggestion"

const Feeds = () => {
  return (
    <div className='flex max-w-[790px] mt-4 mx-auto lg:max-w-[854px]'>
          <section className='max-w-[470px] mx-auto w-[100vw]'>
              {/* Stories */}
              <Stories/>
              {/* Posts */}
              <Posts />
          </section>
          <section className='max-w-[320px] w-full mx-8 hidden lg:block'>
              {/* MiniProfile */}
              <MiniProfile/>
              {/*Suggestion */}
              < Suggestion/>
          </section>
        
    </div>
  )
}

export default Feeds;