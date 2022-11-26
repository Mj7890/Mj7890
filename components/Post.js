import React from 'react'
import Image from 'next/image'
import dots from "../assets/dots.png"
import comment from "../assets/comment.png"
import save from "../assets/save.png"
import message from "../assets/message.png"
import hearth from "../assets/hearth.png"
import emojy from "../assets/emojy.png"

const Post = ({ username, profilePic, postPhoto, caption }) => {
  const comments = [{
    username: "John Doe",
    comment: "Hello From the comment section"
  }, {
    username: "Sumit Kumar",
    comment: "Second, Nothing"
  }]
  return (
    <div>
      <div className='border rounded-lg my-3'>
        {/*Header */}
        <div className='flex items-center p-3'>
          <div className='flex items-centers w-full'>
            <div className='h-8 w-8 mr-3'>
              <img src={profilePic.src} className="rounded-full" />
            </div>
            <div className=''>
              <p className='font-semibold text-sm'>{username}</p>
              <p className='text-sm'>Original Audio</p>
            </div>
          </div>

          <div className='w-4 h-4'>
            <Image src={dots} />
          </div>

        </div>
        {/*Photo*/}
        <div className=''>
          <img src={postPhoto.src} alt="" />
        </div>

        {/* BUTTONS */}
        <div className='m-4'>
          {/*Buttons */}
          <div className=''>
            <div className='flex justify-between'>
              <div className='flex space-x-4'>
                <div className='Btn'>
                  <Image src={hearth} />
                </div>
                <div className='Btn'>
                  <Image src={comment} />
                </div>
                <div className='Btn'>
                  <Image src={message} />
                </div>
              </div>
              <div className='Btn'>
                <Image src={save} />
              </div>

            </div>
            <div className='mt-2 customfont'>
              <p>25,000 likes</p>
            </div>


          </div>


          {/*Caption*/}
          <div className='flex items-center mt-2 '>
            <p className='customfont mr-2 whitespace-nowrap'>{username}</p>
            <p className='truncate'>{caption}</p>
          </div>
          {/* View All Comment */}
          <p className='text-sm text-gray-500  mt-1 my-2'>View all 356 comments</p>
          {/*Comments*/}
          <div className=''>{comments.map((comment) => (
            <div className='max-w-24 overflow-y-auto flex justify-between'>
              <div className='flex items-center truncate'>
                <p className='customfont mr-2'>{comment.username}</p>
                <p className='truncate mr-2'>{comment.comment}</p>
              </div>
              <div className='h-3 w-3 shrink-0'>
                <Image src={hearth} />
              </div>
            </div>

          ))}
          </div>
          {/* Timestamp */}
          <p className='text-gray-400 text-xs my-2'>4 minutes ago</p>
          {/* Border */}
          <div className='border-t-mx-3 my-3'> </div>
          {/* Input */}
          <div className='flex justify-between p-1'>
            <div className='flex'>
              <div className='Btn mr-4'>
                <Image src={emojy} />
              </div>
              <input type="text" placeholder='Add your comment....'/>
            </div>
            <button className="font-bold text-sm text-[#0095f6]">Post</button>

          </div>
        </div>


      </div>

    </div>

  )
}

export default Post