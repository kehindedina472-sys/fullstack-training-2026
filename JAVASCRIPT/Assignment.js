function getUserAge(birthYear) {
    const currentYear = new Date().getFullYear(); 
    const age = currentYear - birthYear;
    return age;
}


console.log(getUserAge(2005)); 