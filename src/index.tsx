import * as React from "react";
import { render } from "./lvgl-reconciler/lvgl-reconciler";
import App from "./components/App";
import './mock/index';

if (typeof window === 'undefined') {
    console.log('render!');
    const rootEl = createContainer('');
    render(<App />, rootEl);
}

// const testrender = TestRenderer.create(<App/>);
// console.log(JSON.stringify(testrender.toJSON(), null, 2));
