import { Params } from "../helpers/Params.js"

const ListFlip =()=>{

    const cantidad = Params().pop() 

    const numbers = [ ...Array(+cantidad + 1).keys() ].map( i => ++i )

    const mixNumber =( numbers )=>{
        const _in = [ ...numbers, ...numbers ] 
        return _in.slice().map( () => _in.splice( Math.floor(Math.random() * _in.length), 1 )[0] ) 
    }

    const number = mixNumber( numbers )  

    document.querySelector( '.div__yvOy0' ).innerHTML = `
        <div class="div__nk0Aa" >
            <div class="div__3YkoM start" >
                ${ number.map( data =>{
                    return(`
                        <button class="button__ylcX0 KlaXcimGO0T1BqC" data-id="${ data }" >
                            <div class="div__p8D1J back" ><img class="img_cm9CU" class="img__QL62c" src="./img/icons/anonimo.png" alt=""></div>
                            <div class="div__p8D1J front" > <img class="img__FD8kE" src="./img/flip/${ data }.jpg" alt=""></div>
                        </button> 
                    `)
                }).join('') }
                
            </div>
        </div>
    `
}
export default ListFlip