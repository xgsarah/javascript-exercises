const findTheOldest = function (people) {
  let oldestPerson = people[0];
  
  people.map((person) => {
    const currentDate = new Date();

    const personAge =
      (person?.yearOfDeath || currentDate.getFullYear()) - person.yearOfBirth;

    const oldestPersonAge =
      (oldestPerson?.yearOfDeath || currentDate.getFullYear()) -
      oldestPerson.yearOfBirth;

    oldestPerson = personAge > oldestPersonAge ? person : oldestPerson;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
