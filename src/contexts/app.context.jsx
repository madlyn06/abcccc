import { getAccessTokenFromLS, getProfileFromLS } from '@/utils/auth'
import { createContext, useState } from 'react'

export const getInitialAppContext = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  openCart: false,
  setOpenCart: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children, defaultValue = initialAppContext }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(defaultValue.isAuthenticated)
  const [profile, setProfile] = useState(defaultValue.profile)
  const [openCart, setOpenCart] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        openCart,
        setOpenCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
