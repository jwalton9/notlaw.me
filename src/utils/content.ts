import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import fm from 'front-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

interface Blog {
  title: string;
}

export const blogDir = (): string => path.join(process.cwd(), '_content/blog');

export const blogFileNames = (): Promise<string[]> => promisify(fs.readdir)(blogDir());

export const splitBlogFileName = (filename: string): string[] => filename.replace(/\.md$/, '').split('-');

export const readBlogFile = async (filename: string): Promise<Blog & { body: string }> => {
  const filePath = path.join(blogDir(), filename);
  const fileContents = await promisify(fs.readFile)(filePath, 'utf8');
  const { attributes, body } = fm<Blog>(fileContents);
  return { ...attributes, body: md.render(body) };
};
