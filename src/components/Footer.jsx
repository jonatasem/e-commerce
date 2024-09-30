import './Footer.scss';

export default function Footer(){
    return (
        <footer className='container-footer'>
            <p>
                &copy; {new Date().getFullYear()} Jonatas Moreira. Todos os direitos reservados!
            </p>
        </footer>
    )
}