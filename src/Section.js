import React from 'react-dom'

const Section = props =>([
    <section>
        <div className="Corpo">
            <aside>
                <div className="Photo" style={{backgroundImage:`url('https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg')`}}></div>
                <div className="Fi">
                    <div className="Field">
                        <div className="FieldP">Repositórios: <p>14</p></div>
                    </div>
                    <div className="Field">
                        <div className="FieldP">Seguidores: <p>200</p></div>
                    </div>
                    <div className="Field">
                        <div className="FieldP">Seguindo: <p>48</p></div>
                    </div>
                </div>
            </aside>
            <main>
                <strong>repos/gabrmaciel</strong>
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
                <article>
                    <div className="ArticleCorpo">
                        <p>lorem-lsapp</p>
                        <div className="Info">
                            <div>Stars: 1</div>
                            <div>Watch: 1</div>
                            <div>Fork: 1</div>
                        </div>
                    </div>
                    <div className="Bg">&nbsp;</div>
                </article>
                <article>
                    <div className="ArticleCorpo">
                        <p>lorem-lsapp</p>
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
])

export default Section