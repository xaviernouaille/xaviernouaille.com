import { Box, Container, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

type Props = {
    paragraph: string
    children: ReactNode
}

const Footer: FC<Props> = ({ paragraph, children }) => {
    return (
        <Container maxWidth="md" component="footer">
            <Box
                sx={{
                    margin: '0 auto',
                    padding: '3rem 0',
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        md: 'row',
                    },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="body2">{paragraph}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 0.5,
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
