import React from 'react'

const Repos = ({repo}) =>{
    return(
        <a href={repo.html_url} target="_blank">
            <article>
                <div className="ArticleCorpo">
                    <p>{repo.name}</p>
                    <div className="Info">
                        <div>{repo.language}</div>
                    </div>
                </div>
                <div className="Bg">&nbsp;</div>
            </article>
        </a>
    )
}

export default Repos