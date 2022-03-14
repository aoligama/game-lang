import { useContext } from 'react'
import { LevelContext } from '../contexts/LevelProvider'

function useLevel() {
    const {
        levels,
        setLevels,
        currentLevel,
        setCurrentLevel

    } = useContext(LevelContext)

    return {
        levels,
        setLevels,
        currentLevel,
        setCurrentLevel
    }
}

export default useLevel