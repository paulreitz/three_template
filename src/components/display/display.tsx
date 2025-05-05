import { Component, onMount, onCleanup, createSignal } from 'solid-js';
import styles from './display.module.scss';

import Game from '../../game/game';

const Display: Component = () => {
    const [canvasID, _setCanvasID] = createSignal<string>('canvas');
    let game: Game | null = null;

    onMount(() => {
        if (!game) {
            game = new Game(canvasID());
        }
    });

    onCleanup(() => {
        if (game) {
            game.dispose();
            game = null;
        }
    })

    return (
        <div class={styles.container}>
            <canvas id={canvasID()} class={styles.canvas} />
        </div>
    );
};

export default Display;
