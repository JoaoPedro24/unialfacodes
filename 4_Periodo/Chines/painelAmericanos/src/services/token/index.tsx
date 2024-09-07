import { jwtDecode } from "jwt-decode"

export const verificaTokenExpirado = (
    token?: string

) => {
    if(token){
        let decodedToken = jwtDecode(token)

        if(!decodedToken.exp || decodedToken.exp < new Date().getTime()/ 1000){
            //Token expirado
            return true
        }
        //token ta ok
        return false
    }
}