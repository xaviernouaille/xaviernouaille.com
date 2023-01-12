import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { MAIL } from '@constants/social'

type Props = {
    title: string
    paragraph: string
    button: string
}

const Contact: FC<Props> = ({ title, paragraph, button }) => {
    return (
        <Box
            sx={{
                padding: {
                    xs: '30px 0 20px 0',
                    sm: '90px 0 40px 0',
                    md: '120px 0 70px 0',
                },
            }}
        >
            <Container sx={{ maxWidth: { xs: '100%', sm: 'lg' }, padding: 0 }}>
                <Box
                    sx={{
                        margin: '0 auto',
                        padding: {
                            xs: '5rem 20px',
                            sm: '7rem 0',
                        },
                        bgcolor: 'background.paper',
                    }}
                >
                    <Typography
                        variant="h5"
                        textAlign="center"
                        marginBottom="20px"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            width: { md: '40%', sm: '75%', xs: '90%' },
                            margin: 'auto',
                        }}
                    >
                        {paragraph}
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        marginTop="30px"
                    >
                        <Link href={`mailto:${MAIL}`}>
                            <Box
                                sx={{
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    width: { xs: '100%', sm: 'auto' },
                                }}
                            >
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: 0,
                                        padding: '10px 40px',
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                    variant="outlined"
                                >
                                    <Typography variant="body2">
                                        {button}
                                    </Typography>
                                </Button>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
