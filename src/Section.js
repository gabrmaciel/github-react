import React, {useState} from 'react'
import axios from 'axios'

function Section(){

    const [usuario, setUsuario] = useState('')
    const [photo, setPhoto] = useState('')
    const [quantRepos, setQuantRepos] = useState('0')
    const [quantFollowers, setQuantFollowers] = useState('0')
    const [quantFollowing, setQuantFollowing] = useState('0')
    const [url, setUrl] = useState('')

    function atualizaInput(e){
        const valor = e.target.value
        setUsuario(valor)

        const url = 'https://api.github.com/users/' + valor
        axios.get(url+'?client_id=b35f947df79d89b81cd1&client_secret=906158d18bbb76ec7ea58efe06ac08b45a4f4c3a').then(e=>{
            return(
                setPhoto(e.data.avatar_url),
                setQuantRepos(e.data.public_repos),
                setQuantFollowers(e.data.followers),
                setQuantFollowing(e.data.following),
                setUrl('https://github.com/'+valor)
            )
        })

        axios.get(url+'/repos/?client_id=b35f947df79d89b81cd1&client_secret=906158d18bbb76ec7ea58efe06ac08b45a4f4c3a').then(e=>{
            return(
                setPhoto(e.data.avatar_url),
                setQuantRepos(e.data.public_repos),
                setQuantFollowers(e.data.followers),
                setQuantFollowing(e.data.following),
                setUrl('https://github.com/'+valor)
            )
        })
        
    }
    
    return(
        <div>
            <header>
                <div className="HeaderCorpo">
                    <div className="Corpo">
                        <h1>Digite para encontrar usuários e repositórios</h1>
                        <input type="text" onChange={(e)=>atualizaInput(e)}/>
                    </div>
                </div>
            </header>
            <section>
                <div className="Corpo">
                    <aside>
                        <div className="Photo" style={{backgroundImage:`url("${photo}")`}}></div>
                        <div className="Fi">
                            <div className="Field">
                                <div className="FieldP">Repositórios: <p>{quantRepos}</p></div>
                            </div>
                            <div className="Field">
                                <div className="FieldP">Seguidores: <p>{quantFollowers}</p></div>
                            </div>
                            <div className="Field">
                                <div className="FieldP">Seguindo: <p>{quantFollowing}</p></div>
                            </div>
                            <a href={url} target="_blank">
                                <div className="Field">
                                    <div className="FieldP">Ver perfil</div>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <main>
                        <strong>repos/{usuario}</strong>
                        <article>
                            <div className="ArticleCorpo">
                                <p>lorem-lsapp teste teste</p>
                                <div className="Info">
                                    <div>Stars: 1</div>
                                    <div>Watch: 1</div>
                                    <div>Fork: 1</div>
                                </div>
                            </div>
                            <div className="Bg">&nbsp;</div>
                        </article>
                        
                    </main>
                </div>
            </section>
        </div>
    )
}

export default Section