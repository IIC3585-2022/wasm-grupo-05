// import Module from  "./wrapper.js"
import { get_all_subsets } from "./allSubsets.js"
const Module = require('./wrapper.js');



const calcBtn = document.getElementById("calc-btn");
const fibN = document.getElementById("fib-n").value.split(',');
const inputLen = fibN.length;

const jsRunner = (arr) => {
    const secondsJS = new Date().getTime();
    console.log(get_all_subsets(arr))
    const javascripTime = (new Date().getTime()) - secondsJS;
    return javascripTime;
}

const cRunner = (arr, inputLen, Module) => {
    const secondsC = new Date().getTime();
    Module._printPowerSet(arr, inputLen);
    const cTime = (new Date().getTime()) - secondsC;
    return cTime;
}

Module().then( mymod => {
    calcBtn.onclick = () => {
        console.log("AAAAAAAAAAAAAAAAAA")
    let jsTime = jsRunner(fibN.value);
    let cTime = cRunner(fibN.value, inputLen, mymod);
    addToTable([jsTime, cTime]);
    }
    }
)

const addToTable = (resultArr) => {
const table = document.getElementById("result-table");
let row = table.insertRow(-1);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
cell1.innerHTML = `${parseInt(fibN.value)}`;
cell2.innerHTML = `${resultArr[0]} ms`;
cell3.innerHTML = `${resultArr[1]} ms`;
}



