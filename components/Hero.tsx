import { Box, Button, Container, Typography } from '@mui/material'
import { FC } from 'react'
import { motion } from 'framer-motion'

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
            {subtitle && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                    }}
                >
                    <Typography sx={{ display: 'inline-flex' }}>
                        {subtitle}
                    </Typography>
                    <motion.div
                        style={{ display: 'inline-flex' }}
                        animate={{ rotate: [0, 40, -20, 0] }}
                    >
                        👋
                    </motion.div>
                </Box>
            )}
            <Typography variant="h1">
                <span dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
        </Container>
    )
}

export default Hero
