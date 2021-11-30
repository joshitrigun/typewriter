const sentence = "hello there from lighthouse labs";
let t = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t);
  t += 100;
}
setTimeout(() => {
  process.stdout.write("\n");
}, t);
