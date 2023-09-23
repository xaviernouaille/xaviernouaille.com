import { SOCIAL } from '@constants/social'
import { Box, Container, List, Typography } from '@mui/material'
import { FC } from 'react'

const resetAnchorStyle = {
    textDecoration: 'none',
}

const Footer: FC = () => {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{ paddingBottom: 3, paddingTop: 2 }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <List sx={{ display: 'flex', gap: 4 }}>
                        {Object.keys(SOCIAL).map((label, index) => (
                            <li key={index}>
                                <a
                                    href={SOCIAL[label]}
                                    target="_blank"
                                    style={resetAnchorStyle}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text.primary',
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </a>
                            </li>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Typography variant="body2">
                        © Copyright 2022. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
