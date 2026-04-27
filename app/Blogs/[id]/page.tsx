import React from 'react'
import { blogs } from '@/utils/blogs'
import { notFound } from 'next/navigation'

type Props = {
    params: Promise<{id: string}>;
}

export default async function BlogDetail ({params} : Props) {
    const {id} = await params;
    const blogId = parseInt(id);

    const blog = blogs.find((b) => b.id === blogId);

    if (!blog) {
        notFound ();
    }

     return (
    <div>
        <a href='/Blogs'>
         Back to all blogs
        </a>
      <div>
         <h1>
          Title:  {blog.title}
        </h1>

        <p> Description: {blog.description}</p>
      </div>

      <div>
        Blog ID: <span>{blog.id}</span>
      </div>
       
    </div>
  )
}
 


