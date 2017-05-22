
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    }else {
      reject('A & b need to be numbers');
    }

  })
}


addPromise('andrew',3).then(function (sum) {
  console.log('success', sum);

}, function (err) {
  console.log('error', err);
});
