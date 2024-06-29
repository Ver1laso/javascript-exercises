function checkBirthAndDeath (person) {
    return person.hasOwnProperty('yearOfBirth') && person.hasOwnProperty('yearOfDeath');
}




const findTheOldest = function(people) {

    let oldestPerson = {name: '', age: 0};

    for (let i = 0; i < people.length ; i++){
        if(checkBirthAndDeath(people[i])){
            let age = people[i].yearOfDeath - people[i].yearOfBirth;

            if(age > oldestPerson.age){
                oldestPerson.name = people[i].name;
                oldestPerson.age = age;
            }
        }else {
            let currentYear = 2024;
            let age = currentYear - people[i].yearOfBirth;
            if(age > oldestPerson.age){
                oldestPerson.name = people[i].name;
                oldestPerson.age = age;
            }
        }
    }
    return oldestPerson;
    
};
// Do not edit below this line
module.exports = findTheOldest;
