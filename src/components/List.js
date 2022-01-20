
import Item from './Item.js'
function List() {
    return (
        <>
            <h1>Lista minha</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1985}/>
                <Item marca='BMW' ano_lancamento={1991}/>
                <Item marca='123' ano_lancamento='dois'/>
                <Item  ano_lancamento='dois'/>
            </ul>
        </>
    )
}

export default List