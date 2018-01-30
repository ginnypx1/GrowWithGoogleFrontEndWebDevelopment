/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.

 NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your Code:
Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff!
 */

// your code goes here
var time = 60;

var timeFifty = "Orbiter transfers from ground to internal power"; 
var timeThirtyOne = "Ground launch sequencer is go for auto sequence start";
var timeSixteen = "Activate launch pad sound suppression system"; 
var timeTen = "Activate main engine hydrogen burnoff system"; 
var timeSix = "Main engine start";
var timeZero = "Solid rocket booster ignition and liftoff!"

while (time >=0) {
    // evaluate what to print
    if (time === 50) {
        console.log(timeFifty);
    } else if (time === 31) {
        console.log(timeThirtyOne);
    } else if (time === 16) {
        console.log(timeSixteen);
    } else if (time === 10) {
        console.log(timeTen);
    } else if (time === 6) {
        console.log(timeSix);
    } else if (time === 0) {
        console.log(timeZero);
    } else {
        console.log("T-" + time + " seconds");
    }
    // decrease time
    time = time -1;
}
