//const Module = require('./allSubsetsWASM.js');

/*Module.onRuntimeInitialized = () => {

  const func = Module.cwrap('printPowerSet', null, ['number', 'number']);
  const encoder = new TextEncoder();
  const arr = ['a', 'b', 'c', 'd'];

  const chars = arr.map(x => x.charCodeAt(0));
  console.log(chars);

  const ptrArray = new Int8Array(arr.length); 
  
  for (let i = 0; i < arr.length; i++)
  {
    ptrArray[i] = chars[i];
  }
  
  arrayBuffer = Module._malloc(arr.length * ptrArray.BYTES_PER_ELEMENT);

  Module.HEAP8.set(ptrArray, arrayBuffer);
  //Module._printPowerSet(arrayBuffer, arr.length);
  func(arrayBuffer, arr.length);
};*/

import('./allSubsetsWASM.js').then(({malloc, _printPowerSet, HEAP8}) => {
  const arr = ['a', 'b', 'c', 'd'];

  const chars = arr.map(x => x.charCodeAt(0));
  console.log(chars);

  const ptrArray = new Int8Array(arr.length); 
  
  for (let i = 0; i < arr.length; i++)
  {
    ptrArray[i] = chars[i];
  }
  
  arrayBuffer = malloc(arr.length * ptrArray.BYTES_PER_ELEMENT);

  HEAP8.set(ptrArray, arrayBuffer);
  _printPowerSet(arrayBuffer, arr.length);

});

