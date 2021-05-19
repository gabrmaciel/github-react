import React from 'react-dom'

const Header = ({onChange}) =>{
    return(
        <header>
            <div className="HeaderCorpo">
                <div className="Corpo">
                    <h1>Digite para encontrar usuários e repositórios</h1>
                    <input type="text" onChange={onChange}/>
                </div>
            </div>
        </header>
    )
}

export default Header