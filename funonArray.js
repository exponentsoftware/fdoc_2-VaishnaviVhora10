function scores_greater85(users){

    return users.filter(({ scores }) => scores > 85);
}

function addUser(user_data, { name, scores, skills, age }) {
    const username = name;
    const existingUser = user_data.some(({ name }) => name === username);
    if (existingUser) {
    console.log("user already exists");
    }
    else{
    const user = { name, scores, skills, age };
    user_data.push(user);
    return user;
    }
   
  }
 
  const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];
console.log(scores_greater85(users));
console.log(addUser(users, { name: "Vaishnavi", scores: 95, skills: ['coding'], age: 25 }));