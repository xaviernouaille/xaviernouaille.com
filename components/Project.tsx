import { Box, Container, Typography } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import { FC } from 'react'
import Link from 'next/link'
import { alpha } from '@mui/material/styles'

type ProjectItemProps = {
    title: string
    description: string
    url: string
    tags: string[]
}

const ProjectItem = ({ title, description, url, tags }: ProjectItemProps) => {
    return (
        <Link href={url}>
            <Box
                sx={{
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: 'background.paper',
                    borderRadius: '3px',
                    cursor: 'pointer',
                }}
            >
                <Box
                    sx={{
                        marginBottom: '35px',
                    }}
                >
                    <Box display={'flex'} justifyContent={'end'}>
                        <LaunchIcon
                            sx={{
                                width: '22px',
                                height: '22px',
                                marginBottom: '40px',
                                color: 'primary.main',
                            }}
                        />
                    </Box>
                    <Typography
                        component="h3"
                        marginBottom={'15px'}
                        variant="h5"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        component={'p'}
                        sx={{
                            overflowWrap: 'break-word',
                        }}
                    >
                        {`${description.substring(0, 100)} ${
                            description.length > 100 ? '...' : ''
                        }`}
                    </Typography>
                </Box>
                <Typography
                    variant="body4"
                    marginTop="10px"
                    sx={{ display: 'flex', gap: 1 }}
                >
                    {tags.map((tag, i) => (
                        <Box
                            sx={{
                                bgcolor: (theme) =>
                                    alpha(theme.palette.primary.main, 0.3),
                                padding: '5px 13px',
                                borderRadius: '100px',
                                color: (theme) => theme.palette.primary.main,
                            }}
                            key={i}
                        >
                            {tag}
                        </Box>
                    ))}
                </Typography>
            </Box>
        </Link>
    )
}

type Props = {
    title: string
    items: ProjectItemProps[]
}

const Project: FC<Props> = ({ title, items }) => {
    return (
        <Box
            sx={{
                padding: {
                    xs: '30px 0 60px 0',
                    sm: '40px 0 40px 0',
                    md: '120px 0 70px 0',
                },
            }}
        >
            <Container maxWidth="md">
                <Box>
                    <Typography
                        variant="h2"
                        marginBottom={'20px'}
                        component="h2"
                    >
                        {title}
                    </Typography>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(1, minmax(0,1fr))',
                                sm: 'repeat(2, minmax(0,1fr))',
                                md: 'repeat(3, minmax(0,1fr))',
                            },
                            gridTemplateRows: {
                                xs: 'repeat(4, minmax(0,1fr))',
                                sm: 'repeat(2, minmax(0,1fr))',
                                md: 'repeat(2, minmax(0,1fr))',
                            },
                            gap: '25px',
                        }}
                    >
                        {items.map(({ title, description, url, tags }, i) => (
                            <ProjectItem
                                key={i}
                                title={title}
                                description={description}
                                url={url}
                                tags={tags}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Project
