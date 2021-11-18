// Task 4 - Reassigning Properties
// 👉 Copy this object into a new linked JavaScript file or script tag within html and fill in the blank values to represent 
// yourself, but do not touch the isBootcamper key, it must remain as false (just for a little bit...).

let person = {
    firstName: "troy",
    lastName: "webber",
    isBootcamper: false,
  };
  
//   👉 Below your object, reassign the property of isBootcamper using the assignment operator, make it true!

person.isBootcamper = true;

// Task 5 - Nested Objects

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "URGENT",
    },
  },
};

let text = communication.payload.message.text;

if (communication.payload.message.priority === "URGENT") {
  console.log ("please send biscuits!");
}