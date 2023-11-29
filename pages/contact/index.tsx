import type { NextPage } from 'next'
import Contact from '@components/Contact'
import Hero from '@components/Hero'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { MetaTag } from 'next-seo/lib/types'
import { Box } from '@mui/material'
import PageTransition from '@components/PageTransition'

type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

const Home: NextPage = (_: IndexPageProps, ref: IndexPageRef) => {
    const { t } = useTranslation()

    const age = useMemo(() => new Date().getFullYear() - 2000, [])
    const additionalLinkTags = useMemo(
        () => [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: 'favicon/favicon-32x32.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: 'favicon/favicon-16x16.png',
            },
            {
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: 'favicon/apple-touch-icon.png',
            },
            {
                rel: 'manifest',
                href: 'favicon/site.webmanifest',
            },
        ],
        []
    )

    const openGraph = useMemo(
        () => ({
            type: 'website',
            url: 'https://xaviernouaille.com',
            title: "Contact | Un projet, une question ? N'hésitez pas à me contacter, je vous ferai part de ma réponse dans les plus brefs délais.",
        }),
        [age]
    )

    const additionalMetaTags: MetaTag[] = useMemo(
        () => [
            {
                httpEquiv: 'content-type',
                content: 'text/html;charset=UTF-8',
            },
            { name: 'keywords', content: 'Xavier Nouaille' },
        ],
        []
    )

    const title = useMemo(() => 'Xavier Nouaille | Développeur fullstack', [])
    const description = useMemo(
        () =>
            `Contact | Un projet, une question ? N'hésitez pas à me contacter, je vous ferai part de ma réponse dans les plus brefs délais.`,
        [age]
    )

    const canonical = useMemo(() => 'https://xaviernouaille.com/contact', [])

    return (
        <PageTransition ref={ref}>
            <Box sx={{ paddingRight: 1, paddingLeft: 1 }}>
                <Box
                    sx={{
                        position: 'fixed',
                        left: { xs: -300, md: 0 },
                        top: 0,
                        opacity: 0.35,
                    }}
                >
                    {/* eslint-disable-next-line */}
                    {/* <img src="/docs-right.png" /> */}
                </Box>
                <NextSeo
                    title={title}
                    description={description}
                    canonical={canonical}
                    additionalMetaTags={additionalMetaTags}
                    openGraph={openGraph}
                    additionalLinkTags={additionalLinkTags}
                />

                <Box
                    sx={{
                        marginTop: { xs: 14, sm: 17 },
                    }}
                >
                    <Hero title={'Contact 📆'} />
                </Box>

                <Box sx={{ marginTop: { xs: 10 } }}>
                    <Contact
                        title={t('contact.title')}
                        emailTitle={t('contact.emailTitle')}
                        paragraph={t('contact.paragraph')}
                        isContactPage={true}
                        buttonText={t('contact.buttonText')}
                    />
                </Box>
            </Box>
        </PageTransition>
    )
}

export default Home
