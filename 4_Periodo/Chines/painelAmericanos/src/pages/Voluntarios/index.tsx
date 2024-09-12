import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate, useParams } from "react-router-dom";


export default function Voluntarios() {
    
    const navigate = useNavigate()

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')        
        
        let token: IToken | null = null
        
        if(typeof lsToken === 'string'){
            
            token = JSON.parse(lsToken)
            
        }
        if (!token || verificaTokenExpirado(token.accessToken)){
         navigate('/') 
        }
    }, [])

    return(
        <>
        <LayoutDashboard>
            <h1>Bem-vindo, Usuario!</h1>
        </LayoutDashboard>
        </>
    )

}