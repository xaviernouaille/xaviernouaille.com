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
                paddingTop: 2,
                marginTop: 6,
            }}
        >
            <Divider />
            <Box
                display={'flex'}
                alignItems={'center'}
                gap={1}
                paddingTop={3}
                paddingBottom={4}
            >
                <Typography variant="body2" fontWeight={400} lineHeight={1.5}>
                    {paragraph}
                </Typography>
            </Box>
        </Container>
    )
}

export default Footer
