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
                marginTop: 8,
                padding: {
                    xs: '30px 0 20px 0',
                    sm: '90px 0 40px 0',
                    md: '0 0 30px 0',
                },
                bgcolor: 'background.paper',
            }}
        >
            <Container sx={{ maxWidth: { xs: '100%', sm: 'md' }, padding: 0 }}>
                <Box
                    sx={{
                        margin: '0 0',
                        padding: {
                            xs: '5rem 20px',
                            sm: '7rem 0',
                        },
                    }}
                >
                    <Typography
                        variant="h6"
                        textAlign="center"
                        marginBottom="20px"
                        component={'h2'}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            width: { md: '70%', sm: '75%', xs: '90%' },
                            margin: '30px auto 0 auto',
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
