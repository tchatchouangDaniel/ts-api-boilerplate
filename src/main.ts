/* eslint-disable no-console */
interface Identity {
  name: string;
  age: number;
  job: string;
}

const identity: Identity = {
  name: 'Daniel',
  age: 22,
  job: 'Student',
};

console.log(
  `My name is ${identity.name}, i am ${identity.age} years old and i am a ${identity.job}`
);
