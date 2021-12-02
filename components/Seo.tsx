import Head from 'next/head'

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content='Xavier Nouaille' />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="title" content={title} />
      <meta name='description' content={description} />
    </Head>
  )
}
