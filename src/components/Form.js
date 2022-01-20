import { useState } from 'react'

function Form() {
    
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(name)
        console.log(password)
        console.log('Cadastrou o usuário')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>
                Meu Cadastro:
            </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" id="pass" name="pass" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>

    )
}

export default Form