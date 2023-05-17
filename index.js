
const accessLogExampleOne: AccessLogItem[] = [
	{
	  name: 'Luc',
	  direction: 'OUT'
	},
	{
	  name: 'Claudia',
	  direction: 'IN'
	},
	{
	  name: 'Luc',
	  direction: 'IN'
	},
	{
	  name: 'Luc',
	  direction: 'OUT'
	},
	{
	  name: 'Claudia',
	  direction: 'OUT'
	},
  ];
  // Would return:
  // {
  //   enteredWithoutExiting: []
  //   exitedWithoutEntering: ['Luc']
  // }
  
  
  const accessLogExampleTwo: AccessLogItem[] = [
	{
	  name: 'Luc',
	  direction: 'IN'
	},
	{
	  name: 'Claudia',
	  direction: 'IN'
	},
	{
	  name: 'Luc',
	  direction: 'IN'
	},
	{
	  name: 'Luc',
	  direction: 'OUT'
	},
	{
	  name: 'Claudia',
	  direction: 'OUT'
	},
	{
	  name: 'Claudia',
	  direction: 'OUT'
	},
	{
	  name: 'Luc',
	  direction: 'OUT'
	},
	  {
	  name: 'Luc',
	  direction: 'IN'
	},
		{
	  name: 'Luc',
	  direction: 'IN'
	},
  ];
  // Would return:
  // {
  //   enteredWithoutExiting: ['Luc']
  //   exitedWithoutEntering: ['Claudia', 'Luc']
  // }
  
  const accessLogExampleThree: AccessLogItem[] = [
	{
	  name: 'Luc',
	  direction: 'IN'
	},
  ];
  // Would return:
  // {
  //   enteredWithoutExiting: ['Luc']
  //   exitedWithoutEntering: []
  // }
  
  
  
  // Write a program that given an array of names in the order that they swiped into and out of a room
  // Does the following:
  // Returns the users that swiped into the room without swiping out
  // Returns the users that swiped out of the room without having swiped into it first
  // Log is chronological
  // Everyone starts outside of the room
  // You are given the complete log
  // Examples:
  
  // status = {}
  // status = {'Luc': 'IN'}
  
  // status = {'Luc': 'OUT'}
  
  
  type AccessLogItem = {
	name: string;
	direction: 'IN' | 'OUT'
  };
  
  interface IUserChangeRecord {
	enteredWithoutExiting: string[]
	exitedWithoutEntering: string[]
  }
  
  
  
  // const accessLogExampleThree: AccessLogItem[] = [
  //   {
  //     name: 'Luc',
  //     direction: 'IN'
  //   },
  // ];
  function accessLogParser(accessLog: AccessLogItem[]): IUserChangeRecord {
  
	let enteredWithoutExiting = []; 
	let exitedWithoutEntering =  []; 
	
  
	// let statusLog = {};
  
	for (let individual of accessLog) {
		if (!statusLog[individual.name]  && individual.direction === 'OUT'){
		  exitedWithoutEntering.push(individual.name)
		}
		if (statusLog[individual.name] === 'OUT' && individual.direction === 'OUT'){
		  exitedWithoutEntering.push(individual.name)
		}
  
	// 	// two ins in  a row 
		if (statusLog[individual.name] === 'IN' && individual.direction === 'IN'){
			enteredWithoutExiting.push(individual.name)
		}
	// 	statusLog[individual.name] = individual.direction 
	// }
  
	// check statusLog for any names that have the direction in 
	// for (let name in statusLog){
	//   const direction = statusLog[name]; 
	//   if(direction === 'IN'){
	// 	enteredWithoutExiting.push(name)
	//   }
	// }
  
	return {
	  enteredWithoutExiting,
	  exitedWithoutEntering
	}
  }
  
  console.log(accessLogParser(accessLogExampleOne))
  console.log(accessLogParser(accessLogExampleTwo))
  console.log(accessLogParser(accessLogExampleThree))
  
  
  // ___________________________________________
  
  // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  
  // You may assume that each input would have exactly one solution, and you may not use the same element twice.
  
  // You can return the answer in any order.
  // function twoSum(nums: number[], target: number): number[] {
  //   return [1, 1]
  // };
  
  // const nums = [2, 7, 11, 15], target = 9
  // console.log(twoSum(nums, target))
  // // Would return: [0,1]
  
  // const numsTwo = [3, 2, 4], targetTwo = 6
  // console.log(twoSum(numsTwo, targetTwo))
  // // Would return: [1,2]
  
  // const numsThree = [3, 3], targetThree = 6
  // console.log(twoSum(numsThree, targetThree))
  // // Would return: [0,1]
  