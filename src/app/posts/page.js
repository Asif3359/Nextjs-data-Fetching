import Link from 'next/link';
import React from 'react';

const PostsPage = async () => {

    const res = await fetch('http://localhost:5000/posts', {
        // next: {
        //     revalidate: 4, for E-commerce (static but update and revalidate)
        // }
        // cache:"force-cache" Default (Static)
        cache:"no-store" //(Dynamic
    });
    const posts = await res.json();

    return (
        <div>
            <h1 className='text-3xl '>Total Post :{posts.length} </h1>
            <div className='grid grid-cols-2 gap-10 mx-10'>
                {
                    posts.map((item, index) => <div key={index} className="card w-full bg-base-100 border">
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.category}</p>
                            <p>{item.description}</p>
                            <p>{item.like_count}</p>
                            <div className="card-actions justify-end">
                               <Link href={`/posts/${item.id}`}> <button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostsPage;