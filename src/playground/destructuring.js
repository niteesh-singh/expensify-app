// const person = {
//     name: 'Niteesh',
//     age: 27,
//     location: {
//         city: 'Pune',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);

const item = ['coffee (hot)', '$2.0', '$2.5', '$3.0'];

const [coffee, price] = item;
console.log(`A medium ${coffee} costs ${price}`);