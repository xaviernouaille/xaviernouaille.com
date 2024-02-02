import { Typography } from '@mui/material'
import Link from 'next/link'
import { FC, HTMLAttributeAnchorTarget } from 'react'

type Props = {
    link: string
    text: string
    withArrow?: boolean
    withUnderline?: boolean
    size: 'small' | 'medium' | 'big' | 'huge'
    target?: HTMLAttributeAnchorTarget
}

const CustomLink: FC<Props> = ({
    link,
    text,
    withArrow = false,
    withUnderline = false,
    size = 'medium',
    target = '_self',
}) => {
    const linkSize = {
        small: 'body2',
        medium: 'body1',
        big: 'h3',
        huge: 'h2',
    }

    const sxProps = {
        lineHeight: 1.3,
        borderBottom: withUnderline ? '1px solid' : 'none',
        ...(withArrow && {
            '&::after': {
                fontSize: '.75rem',
                fontWeight: 500,
                lineHeight: 1,
                marginLeft: '0.25rem',
                content: '"↗"',
                verticalAlign: 'text-top',
                transition: 'all .5s ease',
            },
            '&:hover::after': {
                fontSize: '.9rem',
            },
        }),
    }
    return (
        <Link href={link}>
            <a
                target={target}
                style={{ textDecoration: 'none', display: 'inline-block' }}
            >
                <Typography
                    variant={linkSize[size] as any}
                    color="text.primary"
                    sx={sxProps}
                    component={'span'}
                >
                    {text}
                </Typography>
            </a>
        </Link>
    )
}

export default CustomLink
