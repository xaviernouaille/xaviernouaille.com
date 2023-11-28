import type { NextPage } from 'next'
import About from '@components/About'
import Career from '@components/Career'
import Project from '@components/Project'
import Contact from '@components/Contact'
import Hero from '@components/Hero'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'
import { MetaTag } from 'next-seo/lib/types'
import { Box } from '@mui/material'

const Home: NextPage = () => {
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
            description: `Portfolio | Xavier Nouaille, ${age} ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.`,
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
            `Portfolio | Xavier Nouaille, ${age} ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.`,
        [age]
    )

    const canonical = useMemo(() => 'https://xaviernouaille.com', [])

    return (
        <>
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
                    marginTop: '200px',
                }}
            >
                <Hero title={t('hero.title')} subtitle={t('hero.subtitle')} />
            </Box>

            <Box
                sx={{
                    padding: {
                        xs: '80px 15px 60px 15px',
                        sm: '90px 0 70px 0',
                        md: '160px 0 70px 0',
                    },
                }}
            >
                <About
                    title={t('about.title')}
                    paragraph0={t('about.paragraph0')}
                    paragraph1={t('about.paragraph1')}
                    modalTitle={t('about.modalTitle')}
                    modalText={t('about.modalText')}
                    buttonText={t('about.buttonText')}
                    modalButtonText={t('about.modalButtonText')}
                />
            </Box>

            <Career
                title={t('career.title')}
                items={t('career.items', { returnObjects: true })}
            />
            <Project
                title={t('project.title')}
                items={t('project.items', { returnObjects: true })}
            />
            <Contact
                title={t('contact.title')}
                emailTitle={t('contact.emailTitle')}
                paragraph={t('contact.paragraph')}
                buttonText={t('contact.buttonText')}
            />
        </>
    )
}

export default Home
