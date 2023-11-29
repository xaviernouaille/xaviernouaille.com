import type { NextPage } from 'next'
import About from '@components/About'
import Career from '@components/Career'
import Project from '@components/Project'
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
            title: 'Bonjour, je suis Xavier, développeur junior fullstack basé sur Paris.',
            description: `A propos | Ingénieur et développeur fullstack formé à Epitech Paris, je propose mes compétences pour concevoir des applications web robustes, performantes et de haute qualité.`,
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
            'A propos | Ingénieur et développeur fullstack formé à Epitech Paris, je propose mes compétences pour concevoir des applications web robustes, performantes et de haute qualité.',
        [age]
    )

    const canonical = useMemo(() => 'https://xaviernouaille.com/about', [])

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
                <Box sx={{ marginTop: { xs: 14, sm: 17 } }}>
                    <Hero title={'Hello ! 👋'} />
                </Box>
                <Box sx={{ marginTop: { xs: 10 } }}>
                    <About
                        isAboutPage={true}
                        title={t('about.title')}
                        paragraph0={t('about.paragraph0')}
                        paragraph1={t('about.paragraph1')}
                        modalTitle={t('about.modalTitle')}
                        modalText={t('about.modalText')}
                        modalButtonText={t('about.modalButtonText')}
                    />
                </Box>

                <Box sx={{ marginTop: { xs: 14, sm: 17 } }}>
                    <Career
                        title={t('career.title')}
                        items={t('career.items', { returnObjects: true })}
                        withDetail
                    />
                </Box>
                <Box sx={{ marginTop: { xs: 14, sm: 17 } }}>
                    <Project
                        title={t('project.title')}
                        items={t('project.items', { returnObjects: true })}
                        withDetail
                    />
                </Box>
            </Box>
        </PageTransition>
    )
}

export default Home
