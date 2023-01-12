import React from 'react'
import Router, {useRouter} from 'next/router';
import {AiFillHome} from "react-icons/ai";
import {TfiWrite} from "react-icons/tfi"
import {BsFileEarmarkPostFill} from "react-icons/bs";
import {IoMdExit} from "react-icons/io";

export default function AllBlogs() {
    const router= useRouter();

    return (
        <>
            <nav className='navbar'>
                <div className='logo'>Logo</div>
                <button className='button-class'>Connect Wallet</button>
            </nav>
            <div className='main-content'>
                <div className='section-1'>
                    <div className='icon' onClick={()=>{router.push('/AllBlogs')}}><AiFillHome size={25}/></div>
                    <div className='icon' onClick={()=>{router.push('/MyBlogs')}}><BsFileEarmarkPostFill size={25}/></div>
                    <div className='icon' onClick={()=>{router.push('/NewStory')}}><TfiWrite size={25}/></div>
                    <div className='icon' onClick={()=>{router.push('/MainPage')}}><IoMdExit size={25}/></div>
                </div>
                <div className='section-2'>
                    <div className='recommended-blogs center'>My Blogs</div>
                    <div className='blog-card' onClick={()=>{
                        router.push('/Checking')
                    }}>
                        <div className='blog-card-address'>0x3cf...d83</div>

                        <div className='blog-card-title'>Sample Blog</div>

                        <div className='blog-blurp'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className='blog-card' >
                        <div className='blog-card-address'>0x3cf...d83</div>
                        <div className='blog-card-title'>Sample Blog</div>
                        <div className='blog-blurp'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                    <div className='blog-card'>
                        <div className='blog-card-address'>0x3cf...d83</div>
                        <div className='blog-card-title'>Sample Blog</div>
                        <div className='blog-blurp'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div className='section-3'></div>
            </div>
        </>
    )
}
