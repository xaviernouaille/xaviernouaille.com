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
    >
        <Container
            sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                gap: '80px',
            }}
            maxWidth="md"
        >
            <Box>
                <Typography variant="h3" marginBottom={'20px'} component="h2">
                    {title}
                </Typography>
                <Box
                    display="flex"
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                    justifyContent={'stretch'}
                >
                    <Box>
                        <Typography marginBottom={'30px'}>
                            {paragraphs[0]}
                            <br />
                            <br />
                            {paragraphs[1]}
                            <br />
                            <br />
                            {paragraphs[2]}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ position: 'relative' }}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        padding: { md: '40px', sm: '30px', xs: '25px' },
                        position: 'sticky',
                        top: '70px',
                        minWidth: { md: '385px' },
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            marginBottom: '20px',
                            display: { md: 'inline-block', xs: 'block' },
                        }}
                    >
                        {modalTitle}
                    </Typography>
                    <Typography variant="body4">{modalText}</Typography>
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
