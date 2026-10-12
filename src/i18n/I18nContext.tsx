import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Language, TranslationKey, translations } from './translations'

interface I18nContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const getInitialLanguage = (): Language => {
  try {
    const savedLanguage = window.localStorage.getItem('app-language')
    return savedLanguage === 'PL' ? 'PL' : 'EN'
  } catch {
    return 'EN'
  }
}

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setCurrentLanguage] = useState<Language>(getInitialLanguage)

  const setLanguage = (nextLanguage: Language) => {
    setCurrentLanguage(nextLanguage)
    try {
      window.localStorage.setItem('app-language', nextLanguage)
    } catch {
      // Language still updates for the current session when storage is unavailable.
    }
  }

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase()
  }, [language])

  const value: I18nContextValue = {
    language,
    setLanguage,
    t: (key) => translations[language][key],
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = (): I18nContextValue => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}