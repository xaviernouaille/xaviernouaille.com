import { Box, Button, Container, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    title: string
    subtitle?: string
}

const Hero: FC<Props> = ({ title, subtitle }) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            {subtitle && <Typography>{subtitle}</Typography>}
            <Typography variant="h1">
                <span dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
        </Container>
    )
}

export default Hero
