alert("Remember a number from 1 to 100");

let arr = [];
let num;

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

for (; true; ) {
  if (arr.length % 2 === 0 && arr.length > 3) {
    for (; true; ) {
      num = +prompt(
        `Is your number:\n1) >=${arr[arr.length / 2]}\n2) <=${
          arr[arr.length / 2 - 1]
        }`
      );
      if (num === 1 || num === 2) {
        break;
      } else {
        alert("Input incorrect");
        continue;
      }
    }
  } else if (arr.length % 2 !== 0 && arr.length > 3) {
    for (; true; ) {
      num = +prompt(
        `Is your number:\n1) >${arr[arr.length / 2 + 0.5]}\n2) <${
          arr[arr.length / 2 - 1.5]
        }\n3) =${arr[arr.length / 2 - 0.5]}`
      );
      if (num === 1 || num === 2 || num === 3) {
        break;
      } else {
        alert("Input incorrect");
        continue;
      }
    }
  } else if (arr.length === 3) {
    for (; true; ) {
      num = +prompt(
        `Is your number:\n1) >=${arr[0]}\n2) <=${arr[2]}\n3) =${arr[1]}`
      );
      if (num === 1 || num === 2 || num === 3) {
        break;
      } else {
        alert("Input incorrect");
        continue;
      }
    }
    if (num === 1) {
      alert(`Your number is: ${arr[0]}`);
      console.log(arr);
      break;
    } else if (num === 2) {
      alert(`Your number is: ${arr[2]}`);
      console.log(arr);
      break;
    } else if (num === 3) {
      alert(`Your number is: ${arr[1]}`);
      console.log(arr);
      break;
    }
  } else if (arr.length === 2) {
    for (; true; ) {
      num = +prompt(`Is your number:\n1) >=${arr[0]}\n2) <=${arr[1]}`);

      if (num === 1 || num === 2 || num === 3) {
        break;
      } else {
        alert("Input incorrect");
        continue;
      }
    }
    if (num === 1) {
      alert(`Your number is: ${arr[0]}`);
      console.log(arr);
      break;
    } else if (num === 2) {
      alert(`Your number is: ${arr[1]}`);
      console.log(arr);
      break;
    }
  }
  if (num === 1) {
    arr = arr.slice(arr.length / 2);
    console.log(arr);
    continue;
  } else if (num === 2) {
    arr = arr.slice(0, arr.length / 2);
    console.log(arr);
    continue;
  } else if (num === 3 && arr.length % 2 !== 0 && arr.length > 3) {
    alert(`Your number is: ${arr[arr.length / 2 - 0.5]}`);
    break;
  }
}
