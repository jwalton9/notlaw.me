import { ReactElement } from 'react';
import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const intialProps = await NextDocument.getInitialProps(ctx);
    return { ...intialProps };
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <script src="/scripts/admin-redirect.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
