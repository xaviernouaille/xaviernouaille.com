import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { MAIL } from '@constants/index'

type Props = {
    title: string
    subtitle: string
    paragraph: string
    button: string
}

const Contact: FC<Props> = ({ title, subtitle, paragraph, button }) => {
    return (
        <Box
            sx={{
                width: {
                    md: '66%',
                    xs: '85%',
                    sm: '72%',
                },
                margin: '0 auto',
                padding: {
                    xs: '5rem 0',
                    sm: '7rem 0',
                },
            }}
        >
            <Typography
                textTransform="uppercase"
                variant="h6"
                textAlign="center"
                component="h2"
            >
                {subtitle}
            </Typography>
            <Typography variant="h3" textAlign="center" marginBottom="10px">
                {title}
            </Typography>
            <Typography variant="body1" textAlign="center">
                {paragraph}
            </Typography>
            <Box display="flex" justifyContent="center" marginTop="40px">
                <Link href={`mailto:${MAIL}`}>
                    <a style={{ textDecoration: 'none' }}>
                        <Button
                            sx={{
                                textTransform: 'none',
                            }}
                            variant="outlined"
                            size="large"
                        >
                            {button}
                        </Button>
                    </a>
                </Link>
            </Box>
        </Box>
    )
}

export default Contact
