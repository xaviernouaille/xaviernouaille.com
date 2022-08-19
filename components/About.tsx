import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
    title: string
    subtitle: string
    paragraphs: string[]
}

const About: FC<Props> = ({ title, subtitle, paragraphs }) => (
    <Box
        sx={{
            padding: {
                xs: '5rem 0',
                sm: '7rem 0',
            },
        }}
    >
        <Typography
            variant="h6"
            marginBottom={'10px'}
            textTransform="uppercase"
            component="h2"
        >
            {title}
        </Typography>
        <Typography
            paddingBottom={'40px'}
            sx={{
                width: { sm: '87%', md: '70%' },
            }}
        >
            {paragraphs[0]}
        </Typography>
        <Box
            display="flex"
            sx={{
                flexDirection: { xs: 'column', md: 'row' },
            }}
            justifyContent={'stretch'}
        >
            <Box
                sx={{
                    width: { xs: '100%', md: '57%' },
                    paddingRight: '50px',
                }}
            >
                <Typography marginBottom={'20px'} variant="body2">
                    {paragraphs[1]}
                    <br />
                    <br />
                    {paragraphs[2]}
                </Typography>
                <Typography variant="h6" marginBottom={'10px'} component="h3">
                    {subtitle}
                </Typography>
                <Typography variant="body2">{paragraphs[3]}</Typography>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: {
                        sx: '100%',
                        sm: '60%',
                        md: '43%',
                    },
                    marginTop: {
                        xs: 4,
                        md: 0,
                    },
                }}
            >
                <Image
                    layout="responsive"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    quality={100}
                    src={'/xavier-nouaille.jpg'}
                    alt={'Xavier Nouaille'}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        margin: '-5rem -35% 0 0',
                        display: {
                            xs: 'none',
                            md: 'block',
                        },
                        zIndex: -1,
                        color: 'primary.main',
                    }}
                >
                    <svg
                        width="404"
                        height="384"
                        viewBox="0 0 404 384"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    fill="currentColor"
                                ></rect>
                            </pattern>
                        </defs>{' '}
                        <rect
                            width="404"
                            height="384"
                            fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                        ></rect>
                    </svg>
                </Box>
            </Box>
        </Box>
    </Box>
)

export default About
