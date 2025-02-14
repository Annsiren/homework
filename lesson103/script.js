const myPersonalData = {
  firstName: 'Antonina',
  lastName: 'Rednaya',
  age: 30,
  greeting(name) {
    return `Hello, ${name}!`
  },
  greetingOfMe() {
    return `Hello, ${this.firstName} ${this.lastName}!`
  }
}

console.log(myPersonalData.greeting('Username'));
console.log(myPersonalData.greetingOfMe());

// ================================ //

const users = [
  {
    name: 'Alex',
    age: 33,
    isAdmin: true
  },
  {
    name: 'Ben',
    age: 31,
    isAdmin: false
  },
  {
    name: 'Clair',
    age: 27,
    isAdmin: true
  },
  {
    name: 'Louis',
    age: 34,
    isAdmin: false
  },
  {
    name: 'Ann',
    age: 30,
    isAdmin: false
  },
  {
    name: 'John',
    age: 25,
    isAdmin: true
  }
];

let counter = 0;

const isNotAdminCount = (users) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      counter++;
    };
  };
  console.log(`Количество пользователей, не явяляющихся администраторами, равно ${counter}`)
};

isNotAdminCount(users);