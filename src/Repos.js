import React from 'react'
import ReactPaginate from "react-paginate"
import Repo from './Repo'

const Repos = (props) =>{
    

    return(
        <div>
            <div className="Tipos">
                <strong>Buscar por: </strong>
                <input type="text" placeholder="Linguagem"/>
                <input type="text" placeholder="Organização"/>
                <div style={{marginLeft:"0.5em"}}>⬆️⬇️</div>
            </div>
            
           {props.repos
            .slice(props.paginacaoAtual, props.paginacaoAtual + props.paginacaoReposPorPagina)
            .map((repo) => <Repo repo={repo} key={repo.id} />)}

            <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={props.paginacaoContador}
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