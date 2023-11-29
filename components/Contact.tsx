import { Box, Container, Typography } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import CustomLink from './CustomLink'
import { utcToZonedTime, format } from 'date-fns-tz'

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
    const getCurrentDate = () => {
        const currentDate = new Date()
        const parisTimeZone = 'Europe/Paris'
        const parisDate = utcToZonedTime(currentDate, parisTimeZone)
        const formattedParisDate = format(parisDate, 'yyyy/MM/dd HH:mm:ss')
        return formattedParisDate
    }
    const [date, setDate] = useState<string>(getCurrentDate())

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(getCurrentDate())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <Box>
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
                                dangerouslySetInnerHTML={{
                                    __html: date.toString(),
                                }}
                            ></Typography>
                            <Typography variant="body2">
                                UTC+01:00 - Paris, FR
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

                    <Typography
                        variant="body1"
                        sx={{ width: { xs: '100%', sm: '80%' } }}
                    >
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
