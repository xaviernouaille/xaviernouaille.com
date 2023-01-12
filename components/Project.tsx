import { Box, Container, Typography } from '@mui/material'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import { FC } from 'react'
import Link from 'next/link'

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
                    <FolderOpenIcon
                        sx={{
                            width: '30px',
                            height: '30px',
                            marginBottom: '20px',
                            color: 'primary.main',
                        }}
                    />
                    <Typography
                        component="h3"
                        marginBottom={'15px'}
                        variant="h6"
                        fontWeight={400}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body3"
                        component={'p'}
                        lineHeight="1.3rem"
                        sx={{
                            overflowWrap: 'break-word',
                        }}
                    >
                        {`${description.substring(0, 200)} ${
                            description.length > 200 ? '...' : ''
                        }`}
                    </Typography>
                </Box>
                <Typography
                    variant="body3"
                    marginTop="30px"
                    sx={{ display: 'flex', gap: 1 }}
                >
                    {tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
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
                        variant="h3"
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
