import { Box, Button, Container, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    title: string
    paragraph: string
    buttonText: string
    buttonText2: string
}

const Hero: FC<Props> = ({ title, paragraph, buttonText, buttonText2 }) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                padding: {
                    xs: '130px 0 60px 0',
                    sm: '120px 0 100px 0',
                    md: '160px 0 120px 0',
                },
            }}
        >
            <Container maxWidth="md">
                <Box display="flex">
                    <Box>
                        <Box margin="0 0 15px 0">
                            <Typography variant="h1" component="h1">
                                <Typography variant="h1" component="span">
                                    {title}
                                </Typography>
                            </Typography>
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{
                                marginTop: '50px',
                            }}
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        ></Typography>
                    </Box>
                </Box>
                <Button
                    sx={{
                        marginTop: 4,
                        marginRight: 2,
                        textTransform: 'none',
                        borderRadius: 2,
                        padding: '10px 40px',
                        width: { xs: '100%', sm: 'auto' },
                        bgcolor: 'primary.main',
                        color: 'background.default',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                    href="#about"
                >
                    <Typography variant="button">{buttonText}</Typography>
                </Button>
                <Button
                    sx={{
                        marginTop: { md: 4, xs: 1 },
                        textTransform: 'none',
                        borderRadius: 2,
                        padding: '10px 40px',
                        width: { xs: '100%', sm: 'auto' },
                        bgcolor: 'background.default',
                        color: 'primary.main',
                        '&:hover': {
                            bgcolor: 'background.dark',
                        },
                    }}
                    href="#contact"
                >
                    <Typography variant="button">{buttonText2}</Typography>
                </Button>
            </Container>
        </Box>
    )
}

export default Hero
