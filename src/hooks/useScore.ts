import { useContext } from 'react'
import { ScoreContext } from '../contexts/ScoreProvider'

function useScore() {
    const {
        score,
        setScore,
    } = useContext(ScoreContext)

    return {
        score,
        setScore,
    }
}

export default useScore