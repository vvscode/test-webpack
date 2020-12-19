const innerGreet = (age) =>{
  if (age > 18) {
    alert('Приветствую');
  } else if (age > 5) {
    alert('Привет');
  } else {
    alert('Агу');
  }
}

export const greet = (age) => {
  innerGreet(age + 2);
}