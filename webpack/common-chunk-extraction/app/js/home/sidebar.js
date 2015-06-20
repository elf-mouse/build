//import $ from 'jquery';
import { jquery as $, test } from 'utils'; // './../common/utils';

let $W = $(window);

test('ok');

// 1
/*export let name = 'sidebar1';
export function run() {
  console.log('width', $W.width(), 'height', $W.height());
};*/

// 2
let sidebar = {
  name: 'sidebar2',
  run() {
    console.log('width', $W.width(), 'height', $W.height());
  }
};

export default sidebar;
