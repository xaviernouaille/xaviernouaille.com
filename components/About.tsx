import { MALT } from '@constants/social'
import { Box, Button, Container, Link, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    title: string
    paragraphs: string[]
    modalTitle: string
    modalText: string
    modalButtonText: string
}

const customFontSize = { fontSize: { md: '17.3px', sm: '17px', xs: '17px' } }

const About: FC<Props> = ({
    title,
    paragraphs,
    modalTitle,
    modalText,
    modalButtonText,
}) => (
    <Box
        sx={{
            padding: {
                xs: '80px 0 60px 0',
                sm: '90px 0 70px 0',
                md: '120px 0 70px 0',
            },
        }}
        id="about"
    >
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '60px',
            }}
            maxWidth="md"
        >
            <Box sx={{ maxWidth: '900px' }}>
                <Box
                    sx={{
                        marginBottom: 4,
                        height: { xs: '130px', md: '150px' },
                        width: { xs: '130px', md: '150px' },
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
                        src="/xavier-nouaille.jpg"
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
                        <Typography sx={customFontSize}>
                            {paragraphs.map((paragraph, i) => (
                                <>
                                    {paragraph}
                                    {i < 2 && (
                                        <>
                                            <br></br>
                                            <br></br>
                                        </>
                                    )}
                                </>
                            ))}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        padding: { md: '40px', sm: '30px', xs: '25px' },
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            marginBottom: '20px',
                            display: { md: 'inline-block', xs: 'block' },
                        }}
                    >
                        {modalTitle}
                    </Typography>
                    <Typography sx={customFontSize}>{modalText}</Typography>
                    <Box sx={{ marginTop: '20px' }}>
                        <Link href={`${MALT}`} sx={{ textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 0,
                                    padding: '8px 32px',
                                    width: { xs: '100%', sm: 'auto' },
                                }}
                                variant="outlined"
                            >
                                <Typography variant="body3">
                                    {modalButtonText}
                                </Typography>
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
)

export default About
