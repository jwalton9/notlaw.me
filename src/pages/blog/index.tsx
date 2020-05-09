import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { NextPage, GetStaticProps } from 'next';
import fm from 'front-matter';
import Link from 'next/link';
import { blogFileNames, splitBlogFileName, readBlogFile } from '../../utils/content';

interface Props {
  posts: { title: string; date: string; slug: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filenames = await blogFileNames();

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const [year, month, day, ...slugs] = splitBlogFileName(filename);
      const { title } = await readBlogFile(filename);
      return {
        title: title,
        date: `${day}/${month}/${year}`,
        slug: `/blog/${year}/${month}/${day}/${slugs.join('-')}`,
      };
    }),
  );

  return { props: { posts } };
};

const BlogPage: NextPage<Props> = ({ posts }) => (
  <>
    <h1>Blog</h1>
    {posts.map((post) => (
      <Link key={post.slug} href="/blog/[...slug]" as={post.slug}>
        <a>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
      </Link>
    ))}
  </>
);

export default BlogPage;
