function Footer() {
    return ( 
        <footer className="px-6 py-8 w-full flex flex-col gap-10 lg:max-w-[1440px] lg:mx-auto md:gap-12 lg:gap-24">
            <div className="flex flex-col gap-4 justify-center items-center">
                <h4 className="text-5xl font-logo">DragonFuel</h4>
                <p className="text-[20px] text-center">Despierta el dragón que hay dentro de ti</p>
            </div>
            <div className="flex flex-col justify-center items-start px-6 gap-8 md:flex-row md:flex-wrap md:justify-between md: lg:w-3/4 lg:mx-auto">
                <div className="footer--links">
                    <h6>Enlaces Útiles</h6>
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#products">Productos</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div className="footer--links">
                    <h6>Contacto</h6>
                    <ul>
                        <li>contacto@dragonfuel.com</li>
                        <li>Instagram/DragonFuel</li>
                        <li>Twitter/DragonFuel</li>
                        <li>Tiktok/DragonFuel</li>
                    </ul>
                </div>
                <div className="footer--links">
                    <h6>Legal</h6>
                    <ul>
                        <li><a href="#terms">Términos y condiciones</a></li>
                        <li><a href="#policy">Politicas de privacidad</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row md:gap-2">
                <p>© 2025 DragonFuel. </p>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
     );
}

export default Footer;