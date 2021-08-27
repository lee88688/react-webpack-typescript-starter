import * as React from "react";
import { render } from "./lvgl-reconciler/lvgl-reconciler";
import TestRenderer from 'react-test-renderer';
import App from "./components/App";
import './mock/index';

const rootEl = createContainer('');

render(<App />, rootEl);

const testrender = TestRenderer.create(<App/>);
// console.log(JSON.stringify(testrender.toJSON(), null, 2));
