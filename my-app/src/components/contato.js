import React from 'react';
import '../App.css';

function Contato() {
    return (
        <div className='contato'>
          <section className='container-contato'>
            <h1>Contato</h1>
            <p>Existem várias formas de me encontrar na internet. Você pode me localizar nas redes sociais como Instagram, onde compartilho minhas atualizações e interesses, ou ainda pelo meu e-mail, que está sempre disponível para contatos diretos. Caso tenha alguma dúvida, sugestão ou simplesmente queira bater um papo, sinta-se à vontade para utilizar qualquer um desses canais.</p>
          </section>
          <section className='container-encontre'>
            <h1>Encontre-me</h1>
            <p>E-mail: lianav.cabral@gmail.com</p>
            <div className='encontre-instagram'>
              <p>Visite meu Instagram:</p>
              <a href="https://www.instagram.com/lia_vivitonsia/">
                <img 
                  src="https://sites.ufpe.br/maps/wp-content/uploads/sites/61/2020/05/instagram-icone-icon-1.png" 
                  alt="Instagram"
                  style={{ width: '50px', height: '50px' }} 
                />
              </a>
            </div>
          </section>
        </div>
      );
    }

export default Contato;