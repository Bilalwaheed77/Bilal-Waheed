// var arr1 = [1, 2, 3];
// var arr2 = [0, 8, 9, 11, 13, 15];

// var newArr = [];
// const arrsort = (arr1, arr2) => {
//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) {
//       newArr.push(arr1.shift());
//     } else {
//       newArr.push(arr2.shift());
//     }
//   }
//   newArr = [...newArr, ...arr1, ...arr2];
//   return newArr;
// };

// var result = arrsort(arr1, arr2);
// console.log(result);

// class App {
//   value = 9;

//   handle = () => {
//     console.log(this.value);
//   };
// }

// var app = new App();
// app.handle();

// class App2 extends App {
//   constructor() {
//     super();
//     this.value2 = 10;
//     this.value = 1;
//   }
//   handle2() {
//     console.log(this.value, this.value2);
//   }
// }

// var app2 = new App2();
// app2.handle2();

// var obj = {
//   name: "jafeel"
// };

// var obj2 = {};
// obj2 = { ...obj, age: 20 };
// console.log(obj2);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
// const element = <div>Hello World</div>;

// ReactDOM.render(element, document.querySelector("app")); yehi nechy likha hai smjhany k liye yeh.
// reactDOM mein ek hi element ap render kr skty ho agr likhna tw ek div k andr likhy gay 
// ReactDOM.render(<div><App/></div>, <Home/>, document.querySelector("app"));

ReactDOM.render(<Router><App/></Router>, document.getElementById("app"));

// ReactDOM.render(
    // what to render
    // <App/>,
//    where to render
//     document.getElementById("app"));