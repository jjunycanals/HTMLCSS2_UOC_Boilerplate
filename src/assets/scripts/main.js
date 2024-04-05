/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import {router} from '../router/index.routes';
/**
 * Write any other JavaScript below
 */
window.addEventListener('hashchange', () => {
  router(window.location.hash)
})
