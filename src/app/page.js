import Users from '@/components/Users/Users';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl text-center font-bold p-3'> Welcome to next level data fetching ; </h1>
      <div>
        <Link href="/posts"><button className='btn btn-ghost'>Posts</button></Link>
      </div>
      <Users></Users>
    </div>
  );
};

export default HomePage;