import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

const App = () => {
  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/1760665?s=460&v=4" alt="Bruno Rodrigues" />
              <div className="user-info">
                <strong>Bruno Rodrigues</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Fullstack in Venturus, In Love with Java and Javascript</p>
              <a href="https://github/com/brunocrodriguessouza">Acessar Perfil no Github</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/1760665?s=460&v=4" alt="Bruno Rodrigues" />
              <div className="user-info">
                <strong>Bruno Rodrigues</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Fullstack in Venturus, In Love with Java and Javascript</p>
              <a href="https://github/com/brunocrodriguessouza">Acessar Perfil no Github</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/1760665?s=460&v=4" alt="Bruno Rodrigues" />
              <div className="user-info">
                <strong>Bruno Rodrigues</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Fullstack in Venturus, In Love with Java and Javascript</p>
              <a href="https://github/com/brunocrodriguessouza">Acessar Perfil no Github</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/1760665?s=460&v=4" alt="Bruno Rodrigues" />
              <div className="user-info">
                <strong>Bruno Rodrigues</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
              <p>Fullstack in Venturus, In Love with Java and Javascript</p>
              <a href="https://github/com/brunocrodriguessouza">Acessar Perfil no Github</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;