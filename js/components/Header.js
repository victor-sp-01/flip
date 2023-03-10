import CreateElement from "../helpers/CreateElement.js"

const Header =()=>{
    let element
    document.getElementById( 'root' ).append(
        element = CreateElement( 'header', { class:'header__nhLuf' }, `
            <a href="#flip" class="a__yHc2H" >back</a>
        ` )
    )
}

export default Header

