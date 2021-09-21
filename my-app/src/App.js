import React, { useState } from 'react';
import Image from './img/people.svg'

import './App.css';

function App() {

  //estados => variavel, que toda vez que ela sofre alteração, o react recarrega a página!

  // Estado = Variável, só que, essa variável vai permitir que eu atualize os itens na tela

  const [comentario, setComentario] = React.useState()
  const [todosOsComentario, setTodosOsComentario] = React.useState([])



  function digiteiNoTextArea(eventoDoTextArea) {
    setComentario(eventoDoTextArea.target.value)
  }

  function cliqueiNoBotao() {
    const todosOsComentariosAnteriores = [...todosOsComentario, comentario]

    setTodosOsComentario(todosOsComentariosAnteriores)
  }

  return (
    <div>
      <img src={Image} alt="imagem-pessoas" />
      <textarea placeholder="Seu comentário aqui" onChange={digiteiNoTextArea}></textarea>
      <button onClick={cliqueiNoBotao}>Comentar</button>
      <div>
        <ul>
          {todosOsComentario.map(coment => (
            <li key={coment}>{coment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
