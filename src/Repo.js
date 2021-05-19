import React from 'react'

const Repos = ({repo}) =>{
    return(
        <a href={repo.html_url} target="_blank">
            <article>
                <div className="ArticleCorpo">
                    <div className="InfoCorpo">
                        <p>{repo.name}</p>
                        <div>{repo.description}</div>
                    </div>
                    <div className="Info">
                        
                        <div>💻 {repo.language}</div>
                        <div>⭐ {repo.stargazers_count}</div>
                    </div>
                </div>
                <div className="Bg">&nbsp;</div>
            </article>
        </a>
    )
}

export default Repos