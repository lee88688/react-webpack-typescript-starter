import * as React from 'react';
// import { render } from "./lvgl-reconciler/lvgl-reconciler";
// import { render } from '@quickgl/runtime';
import App from './components/App';
// import './mock/index';

if (typeof window === 'undefined') {
  const runtime = require('@quickgl/runtime');
  console.log('render!', global.execTimeoutFn);
  // const rootEl = createContainer('');
  const rootEl = {
    appendChild(child) {
      attachToScreen(child);
    },
  };
  runtime.render(<App />, rootEl);
}

// const testrender = TestRenderer.create(<App/>);
// console.log(JSON.stringify(testrender.toJSON(), null, 2));
