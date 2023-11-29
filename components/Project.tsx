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

type ProjectItem = {
    title: string
    url: string
    description: string
    tags: string[]
}

type Props = {
    title: string
    items: ProjectItem[]
    withDetail?: boolean
}

const Project: FC<Props> = ({ title, items, withDetail = false }) => {
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
                            {items.map((item, index) => (
                                <>
                                    <Box>
                                        <CustomLink
                                            link="#"
                                            text={item.title}
                                            withArrow
                                            withUnderline
                                            size="medium"
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Typography variant="body1">
                                            {item.description}
                                        </Typography>
                                    </Box>
                                    {withDetail && (
                                        <List
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'start',
                                                gap: 3,
                                            }}
                                        >
                                            {item.tags.map(
                                                (description, index) => (
                                                    <Typography
                                                        key={index}
                                                        variant="body2"
                                                    >
                                                        {description}
                                                    </Typography>
                                                )
                                            )}
                                        </List>
                                    )}
                                    {index !== items.length - 1 && <Divider />}
                                </>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Project
