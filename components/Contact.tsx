import { Box, Container, Typography } from '@mui/material'
import { FC } from 'react'
import CustomLink from './CustomLink'

type Props = {
    title: string
    emailTitle: string
    paragraph: string
    buttonText: string
    isContactPage?: boolean
}

const Contact: FC<Props> = ({
    title,
    paragraph,
    buttonText,
    emailTitle,
    isContactPage = false,
}) => {
    return (
        <Box
            sx={{
                padding: {
                    xs: '30px 15px 60px 15px',
                    sm: '40px 0 70px 0',
                    md: '120px 0 70px 0',
                },
            }}
        >
            <Container maxWidth="md">
                {isContactPage && (
                    <Box sx={{ marginBottom: 8 }}>
                        <Box sx={{ marginBottom: 8 }}>
                            <Typography
                                variant="h3"
                                marginBottom={{ xs: '30px', sm: '20px' }}
                                component="h2"
                            >
                                {emailTitle}
                            </Typography>
                            <CustomLink
                                link="mailto:xavier.nouaille@protonmail.com"
                                text="xavier.nouaille@protonmail.com"
                                size="small"
                                withArrow
                                withUnderline
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="body2"
                                sx={{ marginBottom: 2 }}
                            >
                                November 11th, 2023, 9:17:54 AM
                            </Typography>
                            <Typography variant="body2">
                                UTC-05:00 - Boston, MA
                            </Typography>
                        </Box>
                    </Box>
                )}
                <Box>
                    <Typography
                        variant={isContactPage ? 'h3' : 'h2'}
                        marginBottom={{ xs: '30px', sm: '20px' }}
                        component="h2"
                    >
                        {title}
                    </Typography>

                    <Typography variant="body1" sx={{ width: '80%' }}>
                        {paragraph}
                    </Typography>

                    {!isContactPage && (
                        <Box marginTop={4}>
                            <CustomLink
                                link="/contact"
                                text={buttonText}
                                size="medium"
                                withUnderline
                            />
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default Contact
