import { NextPage, GetStaticProps } from 'next';

import Navigation from '../components/Navigation';
import { Footer } from '../components/Footer';

import styles from './index.module.scss';
import { blogFileNames, readBlogFile } from '../utils/content';

interface Props {
  blogPosts: { title: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogFiles = await blogFileNames();
  const blogPosts = await Promise.all(
    blogFiles.map(async (filename) => {
      const { title } = await readBlogFile(filename);
      return { title };
    }),
  );
  return { props: { blogPosts } };
};

const Home: NextPage<Props> = ({ blogPosts }) => (
  <>
    <section className={styles.sectionOne}>
      <Navigation />
      <div className={styles.panel}>
        <div>
          <h2 className={styles.heading}>Joe Walton. A specialist in building great experiences on the web.</h2>
          <h3 className={styles.subheading}></h3>
        </div>
        <div className={styles.image}>
          <img alt="me" src="/images/me.webp" />
        </div>
      </div>
    </section>
    <section className={styles.sectionTwo}>
      <h2 className={styles.heading}>Writing.</h2>
      <div className={styles.posts}>
        {blogPosts.map((blogPost) => (
          <div key={blogPost.title}>
            <h3>{blogPost.title}</h3>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </>
);

export default Home;
