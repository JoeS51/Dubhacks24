// storeWrapper.js
import { createWrapper } from 'next-redux-wrapper';
import store from './store';

const storeWrapper = createWrapper(() => store);

export default storeWrapper;
