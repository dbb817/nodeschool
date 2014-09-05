var total = 0;
process.argv.forEach(function(val, index, array) {
  if (index > 1)
    total += Number(val);
});
console.log(total)
