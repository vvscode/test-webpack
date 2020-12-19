import { greet } from './greet';

setTimeout(() => {
  greet(Number(prompt("Your age???")));
  
}, 100);