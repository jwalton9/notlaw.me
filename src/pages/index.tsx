import { NextPage, GetStaticProps } from 'next';
import cx from 'classnames';

import styles from './index.module.scss';
import { blogFileNames, readBlogFile } from '../utils/content';
import { Page } from '../components/Page';
import Link from 'next/link';

interface Props {
  blogPosts: { title: string; date: string; slug: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogFiles = await blogFileNames();
  const blogPosts = await Promise.all(
    blogFiles.map(async (filename) => {
      const { title, slug, date } = await readBlogFile(filename);
      return { title, slug, date };
    }),
  );
  return { props: { blogPosts } };
};

const Home: NextPage<Props> = ({ blogPosts }) => (
  <Page title="Joe Walton | Software Engineer">
    <section className={cx(['u-text-white', styles.section, styles.sectionOne])}>
      <div className="o-container">
        <div className={styles.panel}>
          <div>
            <h2 className="u-text-alpha">Hello there!</h2>
            <p className="u-text-beta">I&apos;m Joe.</p>
            <p className="u-text-gamma">This is a picture of me.</p>
          </div>
          <div className={styles.image}>
            <img alt="me" src="/images/me.webp" />
          </div>
        </div>
      </div>
    </section>
    <section className={cx([styles.section, styles.sectionTwo])}>
      <div className="o-container">
        <h2 className="u-text-alpha">I like to write.</h2>
        <p className="u-margin-bottom-alpha u-text-gamma">Below you can find the latest posts from my blog.</p>
        <div className={styles.posts}>
          {blogPosts.map((blogPost) => (
            <div key={blogPost.title} className="c-card">
              <Link href="/blog/[...slug]" as={`/blog/${blogPost.slug}`}>
                <a>
                  <h3 className="u-text-delta">{blogPost.title}</h3>
                  <p>Posted {blogPost.date}</p>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Page>
);

export default Home;
