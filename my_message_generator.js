
/*
 * Return a random number between 0 and num
 */
function ran_num(num){
    return Math.floor(Math.random() * num);
}

// An object that stores three arrays with
// each array storing random messages
const options = {
    animal : ["chicken", "turtle", "monkey"],
    place: ["road", "river", "ocean"],
    reason: ["to meet their human friend", "to get to the other side"]
}

// loop through the options object and select
// one animal, place and reason in order to compose a message
var chosen_animal = "";
var chosen_place = "";
var chosen_reason = "";
for (const opt in options){
    var rn = ran_num(options[opt].length);
    var chosen_thing = options[opt][rn];
    switch (opt) {
        case "animal":
            chosen_animal = chosen_thing;
            break;
        case "place":
            chosen_place = chosen_thing;
            break;
        case "reason":
            chosen_reason = chosen_thing;
            break;
        default:
            console.log("error");
    }
}

console.log(`Joke of the day: \n Why did the ${chosen_animal} \
cross the ${chosen_place}? \
Answer: to ${chosen_reason}`);