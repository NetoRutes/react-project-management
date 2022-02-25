import { useState } from 'react'

function Condicional() {
    
    const [email, setEmail] = useState()
    const [emailFinal, setEmailFinal] = useState()


    function enviarEmail(e) {
        e.preventDefault()
        console.log("Testando ",email)
        setEmailFinal(email)
    }

    function cleanEmail(e) {
        e.preventDefault()
        setEmailFinal('')
    }


    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="DIgite o seu e-mail..."
                onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar email</button>
            </form>
            {emailFinal && (
                <>
                    <p> O e-mail digitado é: {emailFinal}</p>
                    <button onClick={cleanEmail}>Limpar email</button>
                </>
            )}
        </div>
    )
}

export default Condicional