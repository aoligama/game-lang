import React, { 
    createContext, 
    useState 
} from 'react'

interface ScoreContextData {
    score: number
    setScore: (score: number) => void
}

export const ScoreContext = createContext({} as ScoreContextData)

export const ScoreProvider: React.FC = ({ children }) => {
    const [score, setScore] = useState<number>(0)

    return (
        <ScoreContext.Provider
            value={{ 
                score,
                setScore
            }}
        >
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider