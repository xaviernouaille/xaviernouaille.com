import { SOCIAL } from '@constants/social'
import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import CustomLink from './CustomLink'
import { motion } from 'framer-motion'

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
}) => {
    return (
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
                    <motion.img
                        style={{
                            marginBottom: '20px',
                            height: '140px',
                            width: '140px',
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                            borderRadius: ['20%', '20%', '20%', '50%', '100%'],
                        }}
                        src="https://dam.malt.com/5d5bbfe7-9a39-46f6-859f-e6a2c8183b55?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp"
                        alt="Xavier Nouaille, Développeur FullStack"
                    />
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
                            text={`🚀 ${modalTitle}`}
                            size="huge"
                            withArrow
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default About
