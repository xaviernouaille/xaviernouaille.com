import type { NextPage } from 'next'
import About from '@components/About'
import Career from '@components/Career'
import Project from '@components/Project'
import Contact from '@components/Contact'
import Hero from '@components/Hero'
import { NextSeo } from 'next-seo'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
    const { t } = useTranslation()
    const age = new Date().getFullYear() - 2000

    return (
        <>
            <NextSeo
                title={'Xavier Nouaille | Développeur fullstack'}
                description={`Portfolio | Xavier Nouaille, ${age} ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.`}
                canonical={'https://xaviernouaille.com'}
                additionalMetaTags={[
                    {
                        httpEquiv: 'content-type',
                        content: 'text/html;charset=UTF-8',
                    },
                    { name: 'keywords', content: 'Xavier Nouaille' },
                ]}
                openGraph={{
                    type: 'website',
                    url: 'https://xaviernouaille.com',
                    title: 'Bonjour, je suis Xavier, développeur junior fullstack basé sur Paris.',
                    description: `Portfolio | Xavier Nouaille, ${age} ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.`,
                }}
                additionalLinkTags={[
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
                ]}
            />
            <Hero
                title={t('hero.title')}
                paragraph={t('hero.paragraph')}
                buttonText={t('hero.buttonText')}
            />
            <About
                title={t('about.title')}
                paragraphs={t('about.paragraphs', { returnObjects: true })}
                modalTitle={t('about.modalTitle')}
                modalText={t('about.modalText')}
                modalButtonText={t('about.modalButtonText')}
            />
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
                paragraph={t('contact.paragraph')}
                button={t('contact.button')}
            />
        </>
    )
}

export default Home
