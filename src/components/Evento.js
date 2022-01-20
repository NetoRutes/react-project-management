import Button from "./evento/Button"

function Evento( ) {
    function meuEvento() {
        console.log('Ativando meu segundo evento')
    }

    function meuEvento1() {
        console.log('Ativando meu primeiro Evento')
    }

    return (
        <div>
            <p> Click here to trigger the event:</p>
            <Button event={meuEvento1} text="Meu primeiro evento"/>
            <Button event={meuEvento} text="Meu segundo evento"/>
            {/* <button onClick={meuEvento}>Clique here</button> */}
        </div>
    )
}

export default Evento