import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navegacao from '@/componentes/layout/Navegacao';

export default function Fase1() {

    const [dadosFilmes, setDadosFilmes] = useState([]);

    useEffect(() => {
        fetch('./imagens.json', {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => setDadosFilmes(res.filmes))
    }, []);



    console.log(dadosFilmes);

    return (
        <Navegacao>
            <div>

                <hr className="linhaDivisoria" />

                <h1>MCU: FASE 1</h1>

                <hr className="linhaDivisoria" />


            </div>

            <div>

                <hr className="linhaDivisoria" />

                <Carousel fade >
                    {dadosFilmes.map((filme) => {
                        return (
                            <Carousel.Item>
                                <img width={500} height={600} src={filme.imagem} className='imagemCarousel' />
                                <Carousel.Caption className='textoCarousel'>
                                    <h3 className='tituloCarousel'>{filme.titulo}</h3>
                                    <p className='descricaoCarousel'>{filme.descricao}</p>
                                </Carousel.Caption>
                            </Carousel.Item>



                        )
                    })}
                </Carousel>
            </div>
        </Navegacao>
    );

}


