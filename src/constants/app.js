const page = 1;
const numbers = 30;
const includes = 'dob,gender,id,location,name,picture,registered';

export const url = `https://randomuser.me/api/?page=${page}&results=${numbers}&inc=${includes}`;
