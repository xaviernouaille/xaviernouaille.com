import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    title: string
    position: string
    paragraph: string
}

const Hero: FC<Props> = ({ title, position, paragraph }) => {
    return (
        <Box
            margin="180px 0 100px 0"
            display="flex"
            sx={{
                margin: { xs: '100px 0', sm: '180px 0 100px 0' },
            }}
        >
            <Box>
                <Box margin="0 0 15px 0">
                    <Typography variant="h2" component="h1">
                        <Typography variant="h2" component="span">
                            {title}
                        </Typography>
                        <br></br> {position}
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        width: { sm: '87%' },
                        marginTop: '50px',
                    }}
                >
                    {paragraph}
                </Typography>
            </Box>
        </Box>
    )
}

export default Hero
