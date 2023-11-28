import { Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
    link: string
    text: string
    withArrow?: boolean
    withUnderline?: boolean
    size: 'small' | 'medium' | 'big'
}

const CustomLink: FC<Props> = ({
    link,
    text,
    withArrow = false,
    withUnderline = false,
    size = 'medium',
}) => {
    const linkSize = {
        small: 'body2',
        medium: 'body1',
        big: 'h3',
    }
    return (
        <Link href={link}>
            <a style={{ textDecoration: 'none', display: 'inline-block' }}>
                <Typography
                    variant={linkSize[size] as any}
                    color="text.primary"
                    className={withArrow ? 'withArrow' : ''}
                    sx={{
                        lineHeight: 1.3,
                        borderBottom: withUnderline ? '1px solid' : 'none',
                    }}
                >
                    {text}
                </Typography>
            </a>
        </Link>
    )
}

export default CustomLink
