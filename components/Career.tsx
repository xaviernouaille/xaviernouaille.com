import {
    Box,
    Container,
    Divider,
    List,
    ListItem,
    Typography,
} from '@mui/material'
import { FC } from 'react'
import CustomLink from './CustomLink'

type CareerItem = {
    title: string
    company: string
    date: string
    description: string[]
}

type Props = {
    title: string
    items: CareerItem[]
    withDetail?: boolean
}

const Career: FC<Props> = ({ title, items, withDetail = false }) => {
    return (
        <Box>
            <Container maxWidth="md">
                <Box>
                    <Typography
                        variant="h3"
                        marginBottom={{ xs: '30px', sm: '20px' }}
                        component="h2"
                    >
                        {title}
                    </Typography>

                    <Box>
                        <List
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1.5,
                                }}
                            >
                                {items.map((item, index) => (
                                    <Box key={index}>
                                        <Box>
                                            <CustomLink
                                                link="#"
                                                text={item.company}
                                                withArrow
                                                withUnderline
                                                size="medium"
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: {
                                                    xs: 'column',
                                                    md: 'row',
                                                },
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <Typography variant="body1">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.date}
                                            </Typography>
                                        </Box>
                                        {withDetail && (
                                            <List
                                                sx={{
                                                    maxWidth: '620px',
                                                    listStyleType: 'disc',
                                                    display: {
                                                        xs: 'none',
                                                        md: 'block',
                                                    },
                                                }}
                                            >
                                                {item.description.map(
                                                    (description, index) => (
                                                        <ListItem key={index}>
                                                            <Typography
                                                                variant="body2"
                                                                lineHeight={1.3}
                                                                fontWeight={400}
                                                            >
                                                                {description}
                                                            </Typography>
                                                        </ListItem>
                                                    )
                                                )}
                                            </List>
                                        )}
                                        {index !== items.length - 1 && (
                                            <Divider />
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Career
