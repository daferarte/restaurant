export default function Footer(){
    return(
        <footer className="border-t border-neutral-200 text-center px-4 py-6 text-sm text-neutral-600">
            Mi restaurante {new Date().getFullYear()} - Todos los derechos reservados.
        </footer>
    )
}