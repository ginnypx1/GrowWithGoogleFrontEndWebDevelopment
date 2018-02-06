/*
 * Programming Quiz: Facebook Friends (7-5)

Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

// your code goes here
var facebookProfile = {
    name: "Ginny Pennekamp",
    friends: 15,
    messages: ["Hello world!", "What up?", "Anyone out there?"],
    postMessage: function postMessage(message) {
        // adds a new message to facebookProfile.messages
        facebookProfile.messages.push(message);
        return "Your message has been posted";
    },
    deleteMessage: function deleteMessage(index) {
        // deletes message at index from facebookProfile.messages
        facebookProfile.messages.splice(index, 1);
        return "Your message has been deleted";

    },
    addFriend: function addFriend() {
        // increases friend count by one
        facebookProfile.friends += 1;
        return "You now have " + facebookProfile.friends + " friends.";

    },
    removeFriend: function removeFriend() {
        // decreases friend count by one
        facebookProfile.friends -= 1;
        return "You now have " + facebookProfile.friends + " friends.";
    }
};

facebookProfile.postMessage("Yo!");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);

facebookProfile.addFriend();
console.log(facebookProfile.friends);

facebookProfile.removeFriend();
console.log(facebookProfile.friends);