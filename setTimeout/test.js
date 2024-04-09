let counter = 100;

function logCall(timeout) {
  console.log(new Date() + ": " + counter++ + " - " + timeout)
}

for(let i=0; i<6; i++) {
  console.log(new Date() + ": setTimeout " + i);
  setTimeout(logCall, i*1000, i)
}
  
  

