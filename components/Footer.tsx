import { Box, Container, List, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import { GITHUB, LINKEDIN, MALT, MAIL } from '@constants/social'

const resetAnchorStyle = {
    textDecoration: 'none',
}

const Footer: FC = () => {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{ paddingBottom: 5, paddingTop: 5, marginTop: 4 }}
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
                        <a
                            href={LINKEDIN}
                            target="_blank"
                            rel="noreferrer"
                            style={resetAnchorStyle}
                        >
                            <Typography
                                variant="body3"
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
                                }}
                            >
                                Linkedin
                            </Typography>
                        </a>
                        <a
                            href={GITHUB}
                            target="_blank"
                            rel="noreferrer"
                            style={resetAnchorStyle}
                        >
                            <Typography
                                variant="body3"
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
                                }}
                            >
                                GitHub
                            </Typography>
                        </a>
                        <a
                            href={MALT}
                            target="_blank"
                            rel="noreferrer"
                            style={resetAnchorStyle}
                        >
                            <Typography
                                variant="body3"
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
                                }}
                            >
                                Malt
                            </Typography>
                        </a>
                        <a
                            href={`mailto:${MAIL}`}
                            target="_blank"
                            rel="noreferrer"
                            style={resetAnchorStyle}
                        >
                            <Typography
                                variant="body3"
                                sx={{
                                    cursor: 'pointer',
                                    color: 'text.primary',
                                }}
                            >
                                E-mail
                            </Typography>
                        </a>
                    </List>
                </Box>
                <Box>
                    <Typography variant="body3">
                        © Copyright 2022. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
