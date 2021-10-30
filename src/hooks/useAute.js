import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAute = () => {
    return useContext(AuthContext)
}

export default useAute;