/* eslint-disable no-console */
enum Love {
  Yes = 'yes',
  No = 'no',
}

interface Identity {
  name: string;
  age: number;
  job: string;
  loveNetflix: Love;
}

const identity: Identity = {
  name: 'Daniel',
  age: 22,
  job: 'Student',
  loveNetflix: Love.Yes,
};

console.log(
  `Me : My name is ${identity.name}, i am ${identity.age} years old and i am a ${identity.job}.\n
  Someone : Do you love netflix ? 
  Me : ${identity.loveNetflix}`
);
