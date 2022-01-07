import { useEffect, useState } from "react"

export function useDarkMode() {
    const prefersDarkMode: any = ()=> true
    const [
      isEnabled, 
      setIsEnabled] = useState(true)
  
    const enabled = 
      isEnabled === undefined ? prefersDarkMode : isEnabled
  
    useEffect(() => {
      if (window === undefined) return
      const root = window.document.documentElement
      root.classList.remove(enabled ? 'light' : 'dark')
      root.classList.add(enabled ? 'dark' : 'light')
    }, [enabled])
  
    return [enabled, setIsEnabled]
  }
  