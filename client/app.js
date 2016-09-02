import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';

render(<Main>
        <p>HI</p>
       </Main>, document.getElementById('root'))