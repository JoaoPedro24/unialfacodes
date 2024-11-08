'use client'
import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { IProduto } from "@/interfaces";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function Categoria({ params }: { params: { id: string } }) {
    const [categorias, setProdutos] = useState<Array<IProduto>>([]);

    useEffect(() => {

        axios.get(process.env.NEXT_PUBLIC_API_URL + '/produtos',
            {
                params: {id_categoria: params.id}
            }
        ).then((dados) => {
            setProdutos(dados.data)
        }).catch((err: AxiosError) => {
            console.log(err)
          })
    
      }, [params.id])

    return (
        <>
            <Menu />
            <h1>Categoria Dinâmica {params.id}</h1>
            <div
                style={{
                    paddingLeft: '6%',
                    paddingRight: '6%',
                }}
            >
                <h2>Produtos em destaque</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {categorias.map((produto) => (
                        <Card
                            key={produto.id}
                            id={produto.id}
                            id_categoria={produto.id_categoria}
                            imagemg={produto.imagemg}
                            nome={produto.nome}
                            valor={produto.valor}
                            promo={produto.promo}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
