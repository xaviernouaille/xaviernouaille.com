import Head from 'next/head'

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content='Xavier Nouaille' />
      <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
      <meta name="theme-color" content="#060606" />
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
    </Head>
  )
}
