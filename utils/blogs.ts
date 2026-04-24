export type Blog = {
    id: number;
    title: string;
    description: string;
}

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Getting started with Next.js",
        description: "Learn the fundamentals of Next.js and the new app router",
    },
    {
        id: 2,
        title: "Understanding dynamic routing in Next.js",
        description: "Deep dive into dynamic segments and how to create powerful routes",
    },
    {
        id: 3,
        title: "Server components vs client components",
        description: "When to use server component and when to use client component"
        
    },
]