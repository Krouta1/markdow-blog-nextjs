/* eslint-disable @typescript-eslint/no-unused-vars */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import fs from "fs";
import matter from "gray-matter";
import OnThisPage from "@/components/OnThisPage";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings);

  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose dark:prose-invert">
      <div className="flex">
        <div className="w-full px-4 md:w-3/4">
          {/* <h1>{data.title}</h1> */}
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
        <div className="hidden w-1/4 border-l md:block">
          <OnThisPage htmlContent={htmlContent} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogPostPage;
