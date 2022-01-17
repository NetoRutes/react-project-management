import Frase from "./Frase"

function HelloWorld() {

    return (
        <div>
            <Frase/>
            <h1>Meu primeiro componente</h1>
            <div>
                Abaixo tem um componente diferenciado 
                <Frase/>
            </div>
        </div>
    )

}

export default HelloWorld