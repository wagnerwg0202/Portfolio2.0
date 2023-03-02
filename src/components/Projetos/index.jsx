import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';


import AOS from 'aos'
import 'aos/dist/aos.css'

import './projetos.css'

import pizzaria from '../../img/pizzaria.png'
import flixwag from '../../img/flixwag.png'
import listadetarefas from '../../img/listadetarefas.png'



import Pizzaria from './ModalProjects/Pizzaria';
import Flixwag from './ModalProjects/Flixwag';
import ListaDeTarefas from './ModalProjects/ListaDeTarefas';


import arrow from '../../img/arrow-rigth.png'

const Projetos = (props) => {

  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])
  

  const [pizzaModal, setPizzaModal ] = useState(false)
    
    function openPizza(){
    if(pizzaModal === false){
        setPizzaModal(true)
        props.setScrol(true)
        setPodeClicar(false)
        props.setMenuDisable(false)
     }
    }


    
    const [flixWagModal, setflixWagModal ] = useState(false)
    
    function openflixWag(){
    if(flixWagModal === false){
      setflixWagModal(true)
      props.setScrol(true)
      setPodeClicar(false)
      props.setMenuDisable(false)
     }
    }



    const [ListaDeTarefasModal, setListaDeTarefasModal ] = useState(false)
    
    function openListaDeTarefas(){
    if(ListaDeTarefasModal === false){
      setListaDeTarefasModal(true)
      props.setScrol(true)
      setPodeClicar(false)
      props.setMenuDisable(false)
     }
    }



    const [quiz, setQuiz ] = useState(false)
    
    function openQuiz(){
    if(quiz === false){
      setQuiz(true)
      props.setScrol(true)
      setPodeClicar(false)
      props.setMenuDisable(false)
     }
    }




    const [controlFinanceiro, setControlFinanceiro ] = useState(false)
    
    function openFinanceiro(){
    if(controlFinanceiro === false){
      setControlFinanceiro(true)
      props.setScrol(true)
      setPodeClicar(false)
      props.setMenuDisable(false)
     }
    }

    const [podeClicar , setPodeClicar] = useState(true)


  return (
    <main id='projetos'>
        <h1 className='title' data-aos='fade-up'><img src={arrow} className='arrow'/> Projetos </h1>

            <div className='cards-projects'>
            {/* project pizza */}
            <div data-aos='fade-up'>
              <div className='card'  onClick={()=>{if(podeClicar){openPizza()}} }>
                  
                  <div className='text'>
                    <p>Administrativo pizzaria</p>
                    <Icon icon="icomoon-free:html-five" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="uiw:css3" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="ion:logo-javascript" width="1.6rem" color='var(--color-primary)' />
                  </div>
                  
                  <img src={pizzaria}/>

                  <div className='ver-mais'>
                    <button>Ver mais</button>
                  </div>

              </div>
            </div>
              

            {/* project filmes */}
              <div data-aos='fade-up'>
                <div className='card' onClick={()=> {if(podeClicar){openflixWag()}} }>
                  
                  <div className='text'>
                    <p>FlixWag</p>
                    <Icon icon="carbon:logo-react" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="uiw:css3" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="ic:sharp-storage" width="1.6rem" color='var(--color-primary)' />
                  </div>
                  
                  <img src={flixwag}/>

                  <div className='ver-mais'>
                    <button>Ver mais</button>
                  </div>

                </div>
              </div>
            
            {/* project lista de tarefas */}
              <div data-aos='fade-up'>
                <div className='card' onClick={()=>{if(podeClicar){openListaDeTarefas()} } }>
                  
                  <div className='text'>
                    <p>Lista de Tarefas</p>
                    <Icon icon="carbon:logo-react" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="uiw:css3" width="1.6rem" color='var(--color-primary)' />
                    <Icon icon="mdi:firebase" width="1.6rem" color='var(--color-primary)' />
                  </div>
                  
                  <img src={listadetarefas}/>

                  <div className='ver-mais'>
                    <button>Ver mais</button>
                  </div>

                </div>
              </div>

           


             </div>
            {pizzaModal ? (<Pizzaria modal={pizzaModal} setmodal={setPizzaModal} setScrol={props.setScrol} podeClicar={setPodeClicar} menuEnable={props.setMenuDisable}/>) : ''}

            {flixWagModal ? (<Flixwag modal={flixWagModal} setmodal={setflixWagModal} setScrol={props.setScrol} podeClicar={setPodeClicar} menuEnable={props.setMenuDisable}/>) : ''}

            {ListaDeTarefasModal ? (<ListaDeTarefas modal={ListaDeTarefasModal} setmodal={setListaDeTarefasModal} setScrol={props.setScrol} podeClicar={setPodeClicar} menuEnable={props.setMenuDisable}/>) : ''}

  
        
    </main>
  )
}

export default Projetos