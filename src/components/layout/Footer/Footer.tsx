export default function Footer(){
    return(
        <footer style={{borderTop: "1px solid #eee", padding:"16px 0", textAlign:"center"}}>
            Mi restaurante {new Date().getFullYear()} - Todos los derechos reservados.
        </footer>
    )
}