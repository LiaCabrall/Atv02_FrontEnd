import React from 'react';
import '../App.css';

function Perfil() {
  return (
    <div className='rotina'>
      <h1><b>Minha Rotina</b></h1>
      <div>
        <h2>Foto de Perfil</h2>
        <img
          src="https://i.pinimg.com/736x/b6/d8/31/b6d8313c75a7e2346e26c542b21a8b6f.jpg"
          alt="Foto de Perfil"
          style={{ width: '150px', borderRadius: '50%' }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Meu Vídeo</h2>
        <video width="320" height="240" controls>
          <source src="/arquivos/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Música de Fundo</h2>
        <audio controls autoPlay loop>
          <source src="/arquivos/audio.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

function Rotina() {
  return (
    <section>
      <div className='container-perfil'>
        <Perfil />
        <div className='citacao'>
          <p>
            <i>
              Aqueles que concordam com uma opinião chamam-lhe opinião; mas os que discordam chamam-lhe heresia.
            </i>
            <br />
            ~Thomas Hobbes
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rotina;