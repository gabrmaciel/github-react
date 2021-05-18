import React from 'react'

const Repos = props =>{
    <article>
        <div className="ArticleCorpo">
            <p>{props.name}</p>
            <div className="Info">
                <div>Stars: 1</div>
                <div>Watch: 1</div>
                <div>Fork: 1</div>
            </div>
        </div>
        <div className="Bg">&nbsp;</div>
    </article>
}

export default Repos