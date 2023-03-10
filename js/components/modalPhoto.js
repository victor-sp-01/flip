import { Params } from "../helpers/Params.js"
const modalPhoto =()=>{
    document.getElementById( 'main' ).innerHTML = `
        <div class="div__om6XK" >
            <img src="./img/five/${ Params().pop() }.jpg" alt="">
        </div>
    `
}

export default modalPhoto