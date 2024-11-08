'use client'
import { Menu } from "@/components/Menu"
import { IProduto } from "@/interfaces"
import axios, { AxiosError } from "axios"
import { error } from "console"
import { useEffect, useState } from "react"
import { Button, Col4, Col6, Input, Row, TextButton } from "./style"

export default function Produto(
    { params }: { params: { id: string } }
) {

    const [ produto, setProduto] = useState<IProduto>()
    useEffect(() => {

        axios.get(process.env.NEXT_PUBLIC_API_URL + '/produtos',
            {
                params: {id: params.id}
            }
        ).then((dados) => {
            setProduto(dados.data[0])
        }).catch((err: AxiosError) => {
            console.log(err)
          })
    
      }, [params])
    return (
        <>
            <Menu />
            <h1>Pagina Dinamica {produto?.nome}</h1>
            <Row>
                <Col4>
                    <img 
                    style={{ width:'100%'}}
                    src={'https://raw.githubusercontent.com/profchines/Imagens/refs/heads/main/Imagens/'
                    + produto?.imagemg}
                    alt={produto?.nome}
                    
                    />
                </Col4>
                <Col6>
                        <h3>{produto?.nome}</h3>
                        <p
                        style={{
                            textDecoration:'line-through'
                        }}
                        >
                            R$ {produto?.valor}
                        </p>
                        <p
                        style={{
                            color:'red',
                            fontWeight:'bold'
                            }}>
                            {produto?.promo}
                            </p>

                            <form>
                                <Input 
                                type="number"
                                name="quantidade"
                                defaultValue={1}
                                min={1}
                                required  
                                />

                              <Button type="submit" style={{
                                marginLeft: '5px'
                              }}>

                                <TextButton>
                                    Adicionar ao carrinho    
                                </TextButton> 
                                
                              </Button>
                            </form>
                </Col6>
            </Row>
        </>
    )
}