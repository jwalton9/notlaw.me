import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { NextPage, GetStaticProps } from 'next';
import fm from 'front-matter';
import Link from 'next/link';

interface Props {
  posts: { title: string; date: string; slug: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogDir = path.join(process.cwd(), '_content/blog');
  const filenames = await promisify(fs.readdir)(blogDir);

  const posts = await Promise.all(
    filenames.map(async (name) => {
      const [year, month, day, ...slugs] = name.replace(/\.md$/, '').split('-');
      const filePath = path.join(blogDir, name);
      const fileContents = await promisify(fs.readFile)(filePath, 'utf8');
      const { attributes } = fm<{ title: string }>(fileContents);
      return {
        title: attributes.title,
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
