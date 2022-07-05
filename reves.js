function reverse(test)
{
  if (!test || test.length < 2 || typeof test !== 'string'){
    return 'Woah use a string'
  }
    return test.split('').reverse().join('')
}

console.log(reverse('Hi hey'))