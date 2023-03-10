import CreateElement from "../helpers/CreateElement.js"
import Flip from "../pages/Flip.js"
const Main =()=>{
    document.getElementById( 'root' ).append( CreateElement( 'main', { class: 'main', id:'main' } ))
    Flip()
}

export default Main