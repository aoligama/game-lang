import React, { 
    createContext, 
    useState 
} from 'react'

interface LevelContextData {
    levels: number
    setLevels: (levels: number) => void
    currentLevel: number
    setCurrentLevel: (level: number) => void
}

export const LevelContext = createContext({} as LevelContextData)

export const LevelProvider: React.FC = ({ children }) => {
    const [levels, setLevels] = useState<number>(0)
    const [currentLevel, setCurrentLevel] = useState<number>(1)

    return (
        <LevelContext.Provider
            value={{ 
                levels,
                setLevels,
                currentLevel,
                setCurrentLevel
            }}
        >
            {children}
        </LevelContext.Provider>
    )
}

export default LevelProvider