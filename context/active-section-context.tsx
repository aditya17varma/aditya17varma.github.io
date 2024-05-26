"use client";

import React, { useState, createContext, use, useContext } from 'react'
import { SectionName } from '@/lib/types'


type ActiveSectionContextProviderProps = {
    children: React.ReactNode
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// wrap the children with the context provider so that the children can access the context
export default function ActiveSectionContextProvider({ children,}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    // time of last click to prevent multiple clicks
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider value={{ 
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

// Custom hook to handle the possbile null value of ActiveSectionContext
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error('useActiveSectionContext must be used within a ActiveSectionContextProvider');
    }

    return context;
}
