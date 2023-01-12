import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import Image from 'next/image'

type Props = {
    title: string
    paragraph: string
}

const Hero: FC<Props> = ({ title, paragraph }) => {
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
                    <Box sx={{ maxWidth: '900px' }}>
                        <Box margin="0 0 15px 0">
                            <Typography variant="h2" component="h1">
                                <Typography variant="h2" component="span">
                                    {title}
                                </Typography>
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                marginTop: '50px',
                            }}
                        >
                            {paragraph}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero
