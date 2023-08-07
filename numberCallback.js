let numbers = [1,2,4,7,3,5,6];
console.log('sort', numbers.sort((a,b) => a-b));
console.log('filter', numbers.filter(n => n%2 ===0));
console.log('map', numbers.map(n => n/2));