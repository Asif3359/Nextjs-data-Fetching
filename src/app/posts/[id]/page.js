import Link from 'next/link';
import React from 'react';


export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/posts');
    const posts = await res.json();
    const ids = posts.slice(0,10).map((post,index)=>{

        return {
            id:post.id+'',
        }
    })
    // console.log(ids);
    return ids
}

const postDetails = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const post = await res.json();
    return (
        <div>
            <div className="card w-full bg-base-100 border">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.category}</p>
                    <p>{post.description}</p>
                    <p>{post.like_count}</p>
                    <div className="card-actions justify-end">
                        <Link href={"/posts"}> <button className="btn btn-primary">Back to</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default postDetails;