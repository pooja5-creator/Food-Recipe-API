import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"


export function useStateTheme(){
    const [isdark,setdark]=useContext(ThemeContext)
    return [isdark,setdark]
}
