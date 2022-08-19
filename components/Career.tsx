import {
    Box,
    FormControl,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    MenuItem,
    Select,
    Typography,
} from '@mui/material'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { alpha } from '@mui/material/styles'

type CareerItem = {
    title: string
    establishment: string
    date: string
    description: string[]
    bullets: string[]
}

type Props = {
    title: string
    items: CareerItem[]
}

type CareerMobileSelectorProps = {
    onChange: Dispatch<SetStateAction<number>>
    currentValue: number
    establishments: {
        value: number
        label: string
    }[]
}

const CareerMobileSelector: FC<CareerMobileSelectorProps> = ({
    onChange,
    currentValue,
    establishments,
}) => {
    return (
        <FormControl fullWidth>
            <Select
                value={currentValue}
                onChange={({ target: { value } }) =>
                    onChange(isNaN(value as number) ? 0 : (value as number))
                }
            >
                {establishments.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

const CareerSelector: FC<CareerMobileSelectorProps> = ({
    onChange,
    establishments,
    currentValue,
}) => {
    return (
        <List
            sx={{
                width: '100%',
            }}
        >
            {establishments.map(({ value, label }) => (
                <ListItem
                    disablePadding
                    key={value}
                    sx={{
                        borderLeft: `3px solid`,
                        borderColor: 'action.disabledBackground',
                        '&:hover span': {
                            color: 'primary.main',
                        },

                        borderLeftColor:
                            currentValue === value ? 'primary.main' : '',
                    }}
                >
                    <ListItemButton
                        sx={{
                            bgcolor:
                                value === currentValue
                                    ? (theme) =>
                                          alpha(
                                              theme.palette.primary.main,
                                              0.05
                                          )
                                    : '',
                            '&:hover': {
                                bgcolor: (theme) =>
                                    alpha(theme.palette.primary.main, 0.05),
                            },
                            '&:hover p': {
                                color: 'primary.main',
                            },
                        }}
                        onClick={() => onChange(value)}
                    >
                        <ListItemText
                            sx={{
                                color:
                                    value === currentValue
                                        ? 'primary.main'
                                        : 'action.disabledBackground',
                            }}
                        >
                            <Typography variant="body2" fontWeight="bold">
                                {label}
                            </Typography>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}

const Career: FC<Props> = ({ title, items }) => {
    const [selected, setSelected] = useState(0)

    return (
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

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                <Box
                    sx={{
                        display: { md: 'block', xs: 'none' },
                        width: '40%',
                    }}
                >
                    <CareerSelector
                        onChange={setSelected}
                        currentValue={selected}
                        establishments={items.map(({ establishment }, i) => ({
                            value: i,
                            label: establishment,
                        }))}
                    />
                </Box>
                <Box
                    sx={{
                        display: { md: 'none', xs: 'block' },
                        marginBottom: 2,
                    }}
                >
                    <CareerMobileSelector
                        onChange={setSelected}
                        currentValue={selected}
                        establishments={items.map(({ establishment }, i) => ({
                            value: i,
                            label: establishment,
                        }))}
                    />
                </Box>
                <Box
                    sx={{
                        marginLeft: { md: '30px' },
                        width: '100%',
                    }}
                >
                    <Box>
                        <Typography variant="body1" fontWeight="bold">
                            {items[selected]?.title}{' '}
                            <Box
                                component="span"
                                sx={{
                                    color: 'primary.main',
                                }}
                            >
                                @{items[selected]?.establishment}
                            </Box>
                        </Typography>
                        <Typography variant="caption">
                            {items[selected]?.date}
                        </Typography>
                        <List>
                            {items[selected]?.description.map((content, i) => (
                                <ListItem
                                    key={i}
                                    sx={{
                                        listStyle: 'disc',
                                        listStylePosition: 'inside',
                                    }}
                                    disablePadding
                                >
                                    <ListItemText
                                        primary={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    display: 'list-item',
                                                    listStylePosition: 'inside',
                                                    '&>.hightlight': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: content,
                                                }}
                                            />
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Career
