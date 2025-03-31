const t1 = performance.now();

for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "This is para " + i;
  document.body.appendChild(para);
}
const t2 = performance.now();
console.log("total time taken by code 1" + (t2 - t1));



const t3 = performance.now();
let mydiv = document.createElement("div");
for (let i = 1; i <= 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is" + i;
  mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("the performance is "+(t4 - t3));
