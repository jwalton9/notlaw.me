import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import fm from 'front-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

interface Props {
  title: string;
  content: string;
}

type Params = {
  slug: string[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const blogDir = path.join(process.cwd(), '_content/blog');
  const filenames = await promisify(fs.readdir)(blogDir);
  const paths = filenames.map((filename) => {
    const [year, month, day, ...slugs] = filename.replace(/\.md$/, '').split('-');
    return { params: { slug: [year, month, day, slugs.join('-')] } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const filePath = path.join(process.cwd(), '_content/blog', `${params?.slug.join('-')}.md`);
  const fileContents = await promisify(fs.readFile)(filePath, 'utf8');
  const { attributes, body } = fm<{ title: string }>(fileContents);

  return { props: { ...attributes, content: md.render(body) } };
};

const BlogPage: NextPage<Props> = ({ title, content }) => (
  <>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </>
);

export default BlogPage;
