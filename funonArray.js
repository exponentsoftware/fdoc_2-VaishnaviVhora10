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
    }}

    function addUserSkill(user_data, user, skill) {
        const existingUser = user_data.some(({ name }, index, arr) => {
          const result = name === user;
          if (result) user_data[index].skills.push(skill);
          return result;
        });
        if (!existingUser) return false;
        return true;
      }

      function userEdit(user_data, username, user){
        const existingUser = user_data.some(({ name }, index, arr) => {
            const result = name === username;
            if (result) user_data[index] = user;
            return result;
          });
          if (!existingUser) return false;
          return true;
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
console.log(addUserSkill(users, 'Vaishnavi', 'reading'));
console.log(userEdit(users, "Sara", { name: "VAISHNAVI", scores: 105, skills: "communication", age: 26 }));
// console.log(users)