import React from "react";
import {useRecoilState} from 'recoil';
import {modalState} from "../atoms/modalState"

const Header = ()=>{
    const [open,setOpen]= useRecoilState(modalState)
    console.log(open)
    return(
     <div className="border-b shadow-sm bg-white sticky top-0 z-10">
        <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
           {/*left*/}
        <div className="flex">         
            <div className="w-28 h-full flex">
                <img src="/assets/instagram.png" className=""/>
            </div>
            <div className="h-3 w-3 mt-1">
                <img src="/assets/arrowdown.png"/>
            </div>
        </div>
        {/*Middle*/}
        <div className="hidden w-72 sm:flex relative mx-4">
            <div className="absolute flex items-center w-3 h-full ml-2">
                <img src="/assets/search.png" alt="search"/>
            </div>
            <input type="text" placeholder="Search" className="h-9 w-full rounded-md bg-[#efefef] pl-8  outline-0"/>
        </div>
        {/*Right*/}
        <div className="flex space-x-5">
            <div className="Btn hidden sm:flex ">
                <img src="/assets/home.png" />
            </div>
            <div className="Btn  hidden sm:flex relative">
                <img src="/assets/message.png"/>
                <div className="absolute flex  -top-1 left-3.5 items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs ">1</div>
            </div>
            <div className="Btn" onClick={()=>setOpen(!open)} >
                <img src="/assets/upload.png"/>
            </div>
            <div className="Btn hidden sm:flex">
                <img src="/assets/discover.png"/>
            </div>
            <div className="Btn hidden sm:flex">
                <img src="/assets/hearth.png"/>
            </div>
            <div className="flex">
                <div className="Btn mr-5">
                <img src="/assets/profile.jpg" className="rounded-full"/>
                </div>
                <button className="curson-pointer text-[#0095f6] font-semibold whitespace-nowrap">Sign out</button>
            </div>
        </div>
 
        </div>
        
    </div>
)}

export default Header;