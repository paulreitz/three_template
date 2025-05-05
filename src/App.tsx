import type { Component } from 'solid-js';
import Display from './components/display/display';

import styles from './App.module.scss';

const App: Component = () => {
    return (
        <div class={styles.App}>
            <Display />
        </div>
    );
};

export default App;
