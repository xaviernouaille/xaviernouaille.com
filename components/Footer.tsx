import { Box, Container, Divider, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
    paragraph: string
}

const Footer: FC<Props> = ({ paragraph }) => {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                paddingBottom: 5,
                paddingTop: 4,
                marginTop: 6,
                paddingRight: { xs: 3, lg: 0 },
                paddingLeft: { xs: 3, lg: 0 },
            }}
        >
            <Divider />
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={1}
                paddingTop={4}
                paddingBottom={4}
            >
                <Typography
                    component={'span'}
                    variant="body2"
                    fontWeight={400}
                    lineHeight={1.5}
                >
                    {paragraph}
                </Typography>
            </Box>
        </Container>
    )
}

export default Footer
