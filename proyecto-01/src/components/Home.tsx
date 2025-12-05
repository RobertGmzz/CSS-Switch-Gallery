function Hero(){
    return (
        <header className="w-full lg:w-150">
            <h1 className="text-5xl font-extrabold mb-4 text-white">CSS Styles Gallery</h1>
            <h2 className="text-2xl font-semibold my-2 text-white">A <strong className="font-bold">collection of ready-to-use CSS styles</strong> for any project!</h2>

            <p className="text-xl text-gray-300 mt-5">Use the <span className="text-white font-bold">switch buttons</span> to find between different styles the one that best matches your vision. You can also switch between light and dark mode using the <span className="text-white font-bold">toggle button</span>.</p>
        </header>
    )
}

export default Hero

/*
Navega entre distintos estilos usando los botones flecha por encima del visualizador para ver como luciran tus elementos html, me asegure de cubrir una cantidad importante de ellos.

Tambien puedes previsualizar como cambian los colores segun claro y oscuro con el boton toggle, los estilos tienen en cuenta el (prefers-color-scheme), aunque tambien hay una clase "dark" en el estilo css para que puedas hacer uso de ella libremente.

Finalmente, copia el elemento link encima del visualizador y pegalo en el head de tu index html para usar directamente el estilo que vez. O puedes descargarlo aqui y para usar en tu proyecto y editarlo como quieras.
*/