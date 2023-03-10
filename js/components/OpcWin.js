import CreateElement from "../helpers/CreateElement.js"
import { Params } from "../helpers/Params.js"
const OpcWin =()=>{



    document.getElementById( 'root' ).append(
        CreateElement( 'div', { class : 'div__pvfDb' }, `
            <div class="div__9gGLF">
                <div class="div__d6kyg" >
                    <h2> Good Nicky ♥♥ </h2>
                    <h3> nivel ${ Params().pop() } </h3>
                </div>
                <div class="div__BIdWv" > 
                    <a href="#flip"><i class="fa-solid fa-list"></i></a>
                    <a href="#flip/${ +Params().pop() + 1 }"><i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        ` )
    )
}

export default OpcWin