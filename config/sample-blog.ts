export type BlogItem = {
  id: number;
  slug: string;
  title: string;
  content: string;
  image: string; // New image property
};

// Sample blog items with images in props
export const blogItems: BlogItem[] = [
  {
    id: 1,
    slug: "javascript-tutorial",
    title: "First Blog Post",
    content: `# This is the content of the first blog post.

This is a paragraph with **bold** text.`,
    image:
      "https://images.unsplash.com/photo-1729097588858-276b55642ef1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    slug: "second-blog-post",
    title: "Second Blog Post",
    content: `## This is the content of the second blog post.

- Item 1
- Item 2
- Item 3`,
    image:
      "https://images.unsplash.com/photo-1729097588858-276b55642ef1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    slug: "third-blog-post",
    title: "Third Blog Post",
    content: `### This is the content of the third blog post.

Here is a link: [OpenAI](https://www.openai.com)`,
    image:
      "https://images.unsplash.com/photo-1729097588858-276b55642ef1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    slug: "fourth-blog-post",
    title: "Fourth Blog Post",
    content: `#### This is the content of the fourth blog post.

> This is a blockquote.`,
    image:
      "https://images.unsplash.com/photo-1729097588858-276b55642ef1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
