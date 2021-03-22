// Your code here
function wrapAdjective(msg = "*") {
  return function (string = "special") {
    return `You are ${msg}${string}${msg}!`;
  };
}

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function actionApplyer(integer, arr) {
  if (arr.length === 0) return 0;
  else {
    return (integer * 2 + 1000) % 7;
  }
}

// let actionApplyer = function (start, ray) {
//   let a = start;

//   for (let i = 0; i < ray.length; i++) {
//     a = ray[i](a);
//   }

//   return a;
// };
