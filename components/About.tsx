import { SOCIAL } from '@constants/social'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import CustomLink from './CustomLink'

type Props = {
    isAboutPage?: boolean
    title: string
    paragraph0: string
    paragraph1?: string
    modalTitle: string
    modalText: string
    buttonText?: string
    modalButtonText: string
}

const About: FC<Props> = ({
    isAboutPage = false,
    modalTitle,
    paragraph0,
    paragraph1,
    buttonText,
}) => (
    <Box>
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
            }}
            maxWidth="md"
        >
            <Box>
                <Box
                    sx={{
                        marginBottom: 4,
                        height: { xs: '120px' },
                        width: { xs: '120px' },
                    }}
                >
                    {/* eslint-disable-next-line */}
                    <img
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '100%',
                        }}
                        src="/xavier-nouaille.png"
                        alt="Xavier Nouaille, Développeur FullStack"
                    />
                </Box>
                <Box
                    display="flex"
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                    justifyContent={'stretch'}
                >
                    <Box>
                        <Typography
                            variant="body1"
                            dangerouslySetInnerHTML={{ __html: paragraph0 }}
                        ></Typography>
                        {isAboutPage && paragraph1 && (
                            <>
                                <br />
                                <Typography
                                    variant="body1"
                                    dangerouslySetInnerHTML={{
                                        __html: paragraph1,
                                    }}
                                ></Typography>
                            </>
                        )}
                    </Box>
                </Box>
                {!isAboutPage && buttonText && (
                    <Box marginTop={4}>
                        <CustomLink
                            link="/contact"
                            text={buttonText}
                            size="medium"
                            withUnderline
                        />
                    </Box>
                )}
            </Box>
            <Box>
                <Box sx={{ marginTop: '20px' }}>
                    <CustomLink
                        link={SOCIAL.Malt}
                        text={modalTitle}
                        size="big"
                        withArrow
                    />
                </Box>
            </Box>
        </Container>
    </Box>
)

export default About
