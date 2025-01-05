/*
HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tell_A_Story(Name, Mood, Activity) {
  let storyElements = [Name, Mood, Activity];

  console.log(
    `There once was a fisherman that went by the name of ${storyElements[0]}. `
  );
  console.log(
    `Now on one fine eavning ${storyElements[0]} was ${storyElements[2]} for a marlin, but the bugger was so fast that a ${storyElements[2]} net coulden't catch it. And that left poor ${storyElements[0]} Very very ${storyElements[1]}.`
  );
  console.log(
    `So on the next day ${storyElements[0]} went ${storyElements[2]} extra prepared and called his ${storyElements[2]} buddys. After houers of hunting the bugger, one of ${storyElements[0]}'s friends spotted the marlin.`
  );
  console.log(
    ` But even though the marlin was fast, it could not run away from the harpoon that ${storyElements[0]} shot at it.After that ${storyElements[0]} called his friends and enjoyed some coocked marlin, and ${storyElements[0]} was ${storyElements[1]} no more.`
  );
}
let storyEnd = tell_A_Story("Captin Gibs", "sad", "fishing");
