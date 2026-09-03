import { useRef, useMemo } from 'react'
import { atom, useAtom } from 'jotai'

const mountAtom = atom<
  Record<
    string,
    {
      timer: ReturnType<typeof setTimeout> | null
      countEntities: number
      state: boolean
    }
  >
>({})

export const useMountTimer = () => {
    const entityIndex = useRef(0)

    const [mountTimer, setMountTimer] = useAtom(mountAtom)

    const startTimer = (key: string) => {
        entityIndex.current = (mountTimer[key]?.countEntities ?? 0) + 1
        const timer = setTimeout(() => {
            setMountTimer((prev) => {
                return {
                ...prev,

                [key]: {
                    ...prev[key],
                    timer: null,
                    state: true,
                },
                }
            })
        }, 800)
        setMountTimer((prev) => ({
            ...prev,
            [key]: {
                timer: timer,
                state: false,
                countEntities: entityIndex.current,
            }
        }))

        return timer
    }

    const key = useMemo(() => {
        const activeEntity = Object.entries(mountTimer).find(
            ([, value]) => value.state === false
        )

        if (activeEntity) {
            const [timerKey, timerValue] = activeEntity

            if (timerValue.timer) {
            clearTimeout(timerValue.timer)
            }

            startTimer(timerKey)

            return timerKey
        }

        const newKey = crypto.randomUUID()

        startTimer(newKey)

        entityIndex.current = 0

        return newKey
    }, [])

    return useMemo(
        () => ({
            mounted: !!mountTimer[key]?.state,
            canRenderSkeleton: entityIndex.current < 8,
        }),
        [mountTimer, key]
    )
}