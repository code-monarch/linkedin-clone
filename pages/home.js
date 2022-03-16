import React from "react";
import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const home = () => {
  return (
    <div className='space-y-10 relative'>
      <Head>
        <title>LinkedIn</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex justify-between items-center h-[60px] max-w-screen-md mx-auto'>
        <Image
          src='https://rb.gy/vtbzlp'
          width={100}
          height={100}
          priority='true'
        />
        <div className='flex items-center sm:divide-x divide-gray-300'>
          <div className='hidden sm:flex space-x-8 pr-4'>
            <HeaderLink Icon={ExploreIcon} text='Discover' />
            <HeaderLink Icon={GroupIcon} text='People' />
            <HeaderLink Icon={OndemandVideoSharpIcon} text='Learning' />
            <HeaderLink Icon={BusinessCenterIcon} text='Jobs' />
          </div>
          <div className='pl-4'>
            <button className='text-blue-700 font-semibold text-sm rounded-full border border-blue-700 px-5 py-1 transition-all hover:border-2'>
              Sign in
            </button>
          </div>
        </div>
      </header>

      <main className='flex flex-col xl:flex-row md:flex-row items-center justify-around max-w-screen-lg mx-auto'>
        {/* left section */}
        <div className='space-y-6 xl:space-y-10'>
          <h1 className='text-3xl text-amber-800/80 max-w-md !leading-snug pl-4 xl:pl-0'>
            Welcome to your professional community
          </h1>
          <div classname='space-y-4'>
            <div className='intent'>
              <h2 className='text-md'>Search for a job</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='intent'>
              <h2 className='text-md'>Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
            <div className='intent'>
              <h2 className='text-md'>Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className='text-gray-700' />
            </div>
          </div>
        </div>
        {/* Left section end */}
        <div className='relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-10 right-5'>
          <Image src='https://rb.gy/vkzpzt' layout='fill' priority />
        </div>
      </main>
    </div>
  );
};

export default home;
