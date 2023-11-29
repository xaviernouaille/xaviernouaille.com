import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

const PageTransition = (
    { children, ...rest }: PageTransitionProps,
    ref: PageTransitionRef
) => {
    const fadeIn = { opacity: 1 }
    const fadeOut = { opacity: 0 }

    const transition = { duration: 0.3, ease: 'easeInOut' }

    return (
        <motion.div
            ref={ref}
            initial={fadeOut}
            animate={fadeIn}
            exit={fadeOut}
            transition={transition}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default forwardRef(PageTransition)
