//TASK 2
// 👉 Below it write an if statement that will console.log "Ben loves chocolate" if likesChocolate has a value of true else
//  console.log "Ben hates chocolate". The condition for the if, and the name Ben should both be read from the object using dot notation.
// 👉 Change the object's values and re run your code, the name and the boolean should effect how your program runs.

let person = {
    name: "Ben",
    likesChocolate: true,
  };

  if (person.likesChocolate === true) {
      console.log("Ben loves chocolate");
  } else {
      console.log("Ben hates chocolate");
  }

