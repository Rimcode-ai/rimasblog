import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rima Modak - Senior AI/ML Engineer | Portfolio" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />
      </Head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
