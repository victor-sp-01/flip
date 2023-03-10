import { Params } from "../helpers/Params.js"
import CreateElement from "../helpers/CreateElement.js"
import ListFlip from "../components/ListFlip.js"

import OpcWin from "../components/OpcWin.js"
import modalPhoto from "../components/modalPhoto.js"

const Flip =()=>{
 
    const endParam = Params().pop()
    

    let element
    document.getElementById( 'main' ).append(
        element = CreateElement( 'div', { class:'div__yvOy0' } )
    )

    if( !localStorage.getItem( 'level' ) ) localStorage.setItem( 'level', '1' )
    const nivel = localStorage.getItem( 'level' )

    if( +endParam > +nivel || +endParam < 1 ) location.hash = `#flip/${ nivel }`
 
    const [ ruta1, ruta = '' ] = Params()
    let time
 
    if( ruta1 !== 'flip' ) return modalPhoto()

    const Game = {
        play    : true,
        repeat  : false,
        help    : false,
        level   : +endParam + 1,
        life    : +endParam
    }
 
 
    if( ruta === '' ){ 
        const numbers = [ ...Array(20).keys() ].map( i => ++i )
        return element.innerHTML = `
        
            ${ numbers.map( data =>{ 
                return (`
                <a href="#flip/${ data }" class="a__NiKcb ${ +nivel >= +data ? '' : 'block' }" ><img src="./img/others/cuadrado.png" alt=""><span class="span__hDxJP" >${ data }</span></a> 
 
                `)
            } ).join('') }
        `
    }

    let element2
    document.getElementById( 'main' ).append(
        element2 = CreateElement( 'div', { class:'div__X0fzd' } )
    )

    const loadButton =()=>{ 
        element2.innerHTML = `
            ${ Game.play ? `<button class="button__qB0nc" id="btnPlay" ><i class="fa-solid fa-play"></i></button>` : '' }
            ${ Game.repeat ? `<button class="button__qB0nc" id="btnRepeat" ><i class="fa-solid fa-repeat"></i></button>` : '' }
            ${ Game.help && Game.life > 0 ? `<button class="button__qB0nc" id="btnHelp" ><i class="fa-solid fa-eye"></i></button>` : '' }
        `
    };  loadButton()

    element2.addEventListener( 'click', ({target}) => {  
        if ( target === element2.children.btnPlay ) {
            Game.play = false
            GameHelp() 
 
        } else if ( target === element2.children.btnRepeat ) {
            ListFlip()
            //Game.play   = true
            Game.repeat = false
            //Game.help   = false
            Game.level  = +endParam + 1
            loadButton()
            return GameHelp()
        } 

        else if ( target === element2.children.btnHelp ) return ( Game.life--, GameHelp())
    })

    ListFlip()

    element.addEventListener( 'click', e => {  

        if( e.target.classList.contains( 'KlaXcimGO0T1BqC' ) ) {
            e.target.classList.add( 'active' )

            const flips = element.querySelectorAll( '.button__ylcX0.KlaXcimGO0T1BqC.active' ) 

            if( flips.length === 3 ){ 
                for ( const flip of flips ) if( flip !== e.target ) flip.classList.remove( 'active' )
                clearTimeout( time )
            }

            if( flips.length === 2 ){
                const [ flip1, flip2 ] = flips

                if( flip1.dataset.id === flip2.dataset.id  ){
                    for ( const flip of flips ) (flip.classList.remove( 'active' ), flip.classList.add( 'finish' ))
                    Game.level--
                    if( Game.level === 0 ) {
                        if( endParam === localStorage.getItem( 'level' ) )
                             localStorage.setItem( 'level', `${ +nivel + 1 }` )
                        OpcWin()
                    }
                    return
                } 

                time = setTimeout(()=>{
                    for ( const flip of flips ) flip.classList.remove( 'active' )
                }, 1000)
            }
        }
    }) 

    const GameHelp =()=>{
        const elementGame = document.querySelector( '.div__3YkoM' )    
        elementGame.classList.add( 'active' )
        elementGame.classList.add( 'start' )

        Game.help = false
        Game.repeat = false
        loadButton()
        setTimeout(()=>{
            Game.help = Game.repeat = true 
            elementGame.classList.remove( 'active' )
            elementGame.classList.remove( 'start' )
            loadButton()
        }, 2000)
    }
}

export default Flip


/*${ data % 5 === 0 ? `<a href="#photo/${ data }" class="a__NiKcb ${ +nivel > +data ? '' : 'block' }" >
                    <img src="./img/others/cuadrado.png" alt="">
                    <img src="./img/five/${ +data }.jpg" alt="" class="img__oVcjv" >
                </a>` : '' }*/
