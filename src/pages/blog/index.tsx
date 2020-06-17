import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

import { blogFileNames, readBlogFile } from '../../utils/content';

import { Page } from '../../components/Page';

interface Props {
  posts: { title: string; date: string; slug: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filenames = await blogFileNames();

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const { title, date, slug } = await readBlogFile(filename);
      return {
        title: title,
        date,
        slug,
      };
    }),
  );

  return { props: { posts } };
};

const BlogPage: NextPage<Props> = ({ posts }) => (
  <Page title="Joe Blogs">
    <div className="u-padding-delta">
      <div className="o-container">
        <h1 className="u-text-gamma u-margin-bottom-delta">Latest</h1>
        {posts.map((post) => (
          <div key={post.slug} className="c-card u-padding-gamma">
            <Link href="/blog/[...slug]" as={`/blog/${post.slug}`}>
              <a>
                <h2 className="u-text-delta">{post.title}</h2>
                <p>Posted {post.date} by Joe Walton</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Page>
);

export default BlogPage;
