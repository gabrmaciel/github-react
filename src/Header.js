import React from 'react-dom'

const Header = ({onChange}) =>{
    return(
        <header>
            <div className="HeaderCorpo">
                <div className="Corpo">
                    <h1>Digite o nome de um usuário para encontrar seus repositórios</h1>
                    <input type="text" onChange={onChange}/>
                </div>
            </div>
        </header>
    )
}

export default Header