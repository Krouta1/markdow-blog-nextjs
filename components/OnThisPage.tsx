"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type OnThisPageProps = {
  htmlContent: string;
};

interface LinkType {
  id: string;
  text: string;
}

const OnThisPage = ({ htmlContent }: OnThisPageProps) => {
  const [links, setLinks] = useState<null | LinkType[]>(null);

  // This useEffect takes the htmlContent and generates an array of links from the h2 and h3 tags in the content.
  useEffect(() => {
    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;

    const headings = Array.from(temp.querySelectorAll("h2, h3"));

    const generatedLinks: LinkType[] = [];
    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      heading.setAttribute("id", id);
      generatedLinks.push({ id, text: heading.textContent || "" });
    });
    setLinks(generatedLinks);
  }, [htmlContent]);

  return (
    <div className="not-prose px-8 text-sm">
      <div className="fixed">
        <h2 className="pb-4 text-2xl font-bold">On this page</h2>
        <ul className="list-disc space-y-2">
          {links?.map((link) => (
            <li key={link.id}>
              <Link href={`#${link.id}`}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
