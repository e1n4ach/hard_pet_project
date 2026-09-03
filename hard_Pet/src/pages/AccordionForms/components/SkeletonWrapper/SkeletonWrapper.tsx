import type { PropsWithChildren } from 'react'

import { Skeleton } from '../Skeleton'
import { useMountTimer } from '../../hooks/useMountTimer'

type SkeletonWrapperProps = PropsWithChildren

export const SkeletonWrapper = ({
    children,
}: SkeletonWrapperProps) => {
    const {
        mounted,
        canRenderSkeleton,
    } = useMountTimer()

    if (!mounted && !canRenderSkeleton) {
        return null
    }

    if (!mounted) {
        return <Skeleton />
    }

    return children
}