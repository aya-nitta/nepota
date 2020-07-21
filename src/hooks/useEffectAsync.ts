/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, DependencyList } from 'react'

export const useEffectAsync = (params: {
  effect: () => void
  cleanup?: () => void
  deps: DependencyList
}): void => {
  const { effect, deps, cleanup } = params
  useEffect(() => {
    effect()
    return cleanup
  }, deps)
}
