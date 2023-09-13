import { Html, Head, Main, NextScript } from 'next/document'
import { useTranslation } from 'react-i18next'

const Document = () => {
    const {
        i18n: { language },
    } = useTranslation()

    return (
        <Html lang={language} style={{ scrollBehavior: 'smooth' }}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
