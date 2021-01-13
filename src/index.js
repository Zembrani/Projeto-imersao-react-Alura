import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => (<div>pagina 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/cadastro/video" component={CadastroVideo} exact></Route>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact></Route>
      <Route component={Pagina404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

