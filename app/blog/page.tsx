import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BlogItem, blogItems } from "@/config/sample-blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <MaxWidthWrapper className="mt-10 p-4 xl:p-0">
      <h1 className="mb-10 text-2xl font-extrabold">All Blogs</h1>
      <ul className="flex flex-wrap gap-5">
        {blogItems.map((item: BlogItem) => (
          <li
            key={item.id}
            className="flex w-full flex-col items-start gap-2 rounded-md border p-2 shadow-md dark:bg-gray-800 md:w-[300px]"
          >
            <Link
              href={`/blogpost/${item.slug}`}
              className="h-20 text-xl font-bold"
            >
              {item.title}
            </Link>

            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              className="my-2 rounded-xl object-cover"
            />

            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </MaxWidthWrapper>
  );
};

export default BlogPage;
