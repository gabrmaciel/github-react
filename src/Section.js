import React, {useState, useRef} from 'react'
import axios from 'axios'
import Repos from './Repos'
import Header from './Header'

const Section = () =>{

    //Sets de hooks ---------//

        //Github Informações
        const [usuario, setUsuario] = useState('')
        const [photo, setPhoto] = useState('')
        const [quantRepos, setQuantRepos] = useState(0)
        const [quantFollowers, setQuantFollowers] = useState(0)
        const [quantFollowing, setQuantFollowing] = useState(0)
        const [url, setUrl] = useState('')

        const [repos, setRepos] = useState([])

        //Timer de callback
        const timer = useRef(null)

        //Paginação
        const [pagina, setPagina] = useState(0)
        const paginacaoReposPorPagina = 10
        const paginacaoAtual = pagina * paginacaoReposPorPagina
        const paginacaoContador = Math.ceil(repos.length / paginacaoReposPorPagina)
        const changePage = ({selected}) =>{
            setPagina(selected)
        }
         
    //--------------------//

    function atualizaInput(e){

        setUsuario('')
        setPhoto('')
        setQuantRepos(0)
        setQuantFollowers(0)
        setQuantFollowing(0)
        setUrl('')

        setRepos([])

        clearTimeout(timer.current)
        timer.current = setTimeout(async()=> {
            try {
                const valor = e.target.value

                if(valor === ""){
                    setUsuario('')
                    setPhoto('')
                    setQuantRepos(0)
                    setQuantFollowers(0)
                    setQuantFollowing(0)
                    setUrl('')

                    setRepos([])

                    return
                }

                setUsuario(valor)
    
                const url = 'https://api.github.com/users/' + valor
                const userResponse = await axios.get(url+'?client_id=b35f947df79d89b81cd1&client_secret=906158d18bbb76ec7ea58efe06ac08b45a4f4c3a')
                
                setPhoto(userResponse.data.avatar_url)
                setQuantRepos(userResponse.data.public_repos)
                setQuantFollowers(userResponse.data.followers)
                setQuantFollowing(userResponse.data.following)
                setUrl('https://github.com/'+valor)
    
                const reposResponse = await axios.get(url+'/repos?client_id=b35f947df79d89b81cd1&client_secret=906158d18bbb76ec7ea58efe06ac08b45a4f4c3a&page='+pagina+'&per_page=100')
                setRepos(reposResponse.data)
    
            } catch (error) {
                console.log(error)
            }
        }, 1000)
    }
    
    return(
        <div>
            <Header onChange={atualizaInput} />
            <section>
                <div className="Corpo">
                    {repos.length > 0 && 
                        <aside>
                            <div className="Photo" style={{backgroundImage:`url("${photo}")`}}>
                                <a href={url} target="_blank"><div className="PhotoVer">Ver</div></a>
                            </div>
                            <div className="Fi">
                                <div className="Field">
                                    <div className="FieldP">Usuário: <p>{usuario}</p></div>
                                </div>
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
                    }
                    <main>
                        {repos.length > 0 ? 
                            <Repos repos={repos} paginacaoAtual={paginacaoAtual} paginacaoReposPorPagina={paginacaoReposPorPagina} paginacaoContador={paginacaoContador} changePage={changePage} />
                         : 
                            <div class="NaoHa">Não há Repositórios</div>
                        }
                        
                        
                    </main>
                </div>
            </section>
        </div>
    )
}

export default Section