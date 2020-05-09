import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

import { blogFileNames, splitBlogFileName, readBlogFile } from '../../utils/content';

interface Props {
  title: string;
  body: string;
}

type Params = {
  slug: string[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const filenames = await blogFileNames();
  const paths = filenames.map((filename) => {
    const [year, month, day, ...slugs] = splitBlogFileName(filename);
    return { params: { slug: [year, month, day, slugs.join('-')] } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  return { props: await readBlogFile(`${params?.slug.join('-')}.md`) };
};

const BlogPage: NextPage<Props> = ({ title, body }) => (
  <>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </>
);

export default BlogPage;
