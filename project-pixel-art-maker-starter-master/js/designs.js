/**
Sets variables for all required dom elements
*/
let canvas = $('#pixelCanvas');
let colorPicker = $('#colorPicker');
let randomButton = $( 'button, input[type="button"]' );
let inputHeight = $('#inputHeight');
let inputWidth = $('#inputWeight');
let submitButton = $('input[type="submit"]');


/**
Sets all required global variables
*/
let color = '#000000';
let colors = ['#6b5b95', '#ecdb54', '#e94b3c', '#6f9fd8', '#944743',
              '#dbb1cd', '#ec9787', '#00a591', '#6b5b95', '#6c4f3d',
              '#eadedb', '#bc70a4', '#bfd641', '#2e4a62', '#b4b7ba',
              '#c0ab8e', '#f0ede5', '#92b558', '#dc4c46', '#672e3b',
              '#f3d6e4', '#c48f65', '#223a5e', '#898e8c', '#005960',
              '#9c9a40', '#4f84c4', '#d2691e', '#578ca9', '#f6d155',
              '#004b8d', '#f2552c', '#95dee3', '#edcdc2', '#ce3127',
              '#5a7247', '#cfb095', '#4c6a92', '#92bbd5', '#838487']


/**
* @description Contructs a pixel grid for the canvas
*/
function makeGrid() {
    // grab and set values for height and width
    let height = inputHeight.val();
    let width = inputWidth.val();
    // loop through height and width to create an html string
    var htmlString = '';
    for (var tr = 0; tr < height; tr++) {
        htmlString += '<tr>';
        for (var td = 0; td < width; td++) {
            htmlString += '<td></td>';
        }
        htmlString += '</tr>';
    }
    // add the table html to table
    canvas.append(htmlString);
}


/**
* @description When the submit button is pressed, calls MakeGrid() to draw the
               pixel grid on the canvas.
* @param {event} e
*/
submitButton.click(function(e){
    // prevent default submit behavior
    e.preventDefault();
    // remove any existing grid
    canvas.empty();
    // create grid
    makeGrid();
});


/**
* @description Sets the color picked by the user
*/
colorPicker.change(function(){
    color = colorPicker.val();
});


/**
* @description When a td cell is clicked on, the cell's background color is
               replaced with the user's desired color
*/
canvas.on('click', 'td', function(){
    $(this).css('background-color', color);
});

/**
* @description Allows a user to choose a color at random
*/
randomButton.click(function(){
    // pick a random color from the colors array
    let randomNumber = Math.floor((Math.random() * (colors.length)));
    color = colors[randomNumber];
    // change the color of the color picker
    colorPicker.val(color);
});