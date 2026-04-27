import Link from 'next/link'
import React from 'react'
import { blogs } from '@/utils/blogs'

const BlogPage = () => {
  return (
    <div>
    
            <h1>My Blog</h1>

            <div>
                {blogs.map((blog)=> (
                    <Link key={blog.id} href={"/Blogs/${blog.id}"}>
                        <h2> Title: {blog.title}</h2>
                        <p> Description: {blog.description}</p>
                    </Link>
                ))}
            </div>
        
    </div>
  )
}

export default BlogPage