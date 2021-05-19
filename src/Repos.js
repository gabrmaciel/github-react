import React, {useState} from 'react'
import ReactPaginate from "react-paginate"
import Repo from './Repo'

const Repos = (props) =>{

    //Sets de hooks ---------//
    const [reposLanguage, setReposLanguage] = useState([])
    const [paginacaoContadorLanguage, setPaginacaoContadorLanguage] = useState(props.paginacaoContador)

    //--------------------//

    function atualizaReposLanguage(repo, linguagem){
        return repo.language == linguagem
    }
    
    function atualizaInputLinguagem(e){

        const linguagem = e.target.value

        clearTimeout(props.timer.current)
        props.timer.current = setTimeout(async()=> {
            
            const responseReposLanguage = props.repos.filter((repo)=>atualizaReposLanguage(repo, linguagem))
            setReposLanguage(responseReposLanguage)

            if(linguagem !== ""){
                const paginacaoContadorLanguage = Math.ceil(responseReposLanguage.length / props.paginacaoReposPorPagina)
                setPaginacaoContadorLanguage(paginacaoContadorLanguage)
            }

        }, 1000);
    }

    return(
        <div>
            <div className="Tipos">
                <strong>Filtrar por: </strong>
                <input type="text" placeholder="Linguagem" onChange={(e)=>atualizaInputLinguagem(e)}/>
            </div>

            {reposLanguage.length > 0 ?
                <div>
                    {reposLanguage
                    .slice(props.paginacaoAtual, props.paginacaoAtual + props.paginacaoReposPorPagina)
                    .map((repo)=> <Repo repo={repo} key={repo.id} />)}
                </div>
            :
                props.repos
                .slice(props.paginacaoAtual, props.paginacaoAtual + props.paginacaoReposPorPagina)
                .map((repo) => <Repo repo={repo} key={repo.id} />)
            }

            
            <ReactPaginate 
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={paginacaoContadorLanguage}
                    onPageChange={props.changePage}
                    containerClassName={"Paginate"}
                    previousLinkClassName={"PaginateDiv"}
                    nextLinkClassName={"PaginateDiv"}
                    disabledClassName={"PaginateDivBlock"}
                    activeClassName={"PaginateSelect"}
                    disableInitialCallback={true}
                    initialPage={0}
                    pageRangeDisplayed={0}
            />
        </div>
    )
}

export default Repos