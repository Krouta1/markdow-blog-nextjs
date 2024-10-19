import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import fs from "fs";
import matter from "gray-matter";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);

  const filePath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="prose prose-invert">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </MaxWidthWrapper>
  );
};

export default BlogPostPage;
