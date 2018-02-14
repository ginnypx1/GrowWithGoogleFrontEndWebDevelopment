/**
Sets variables for all required dom elements
*/
let canvas = $('#pixelCanvas');
let colorPicker = $('#colorPicker');
let inputHeight = $('#inputHeight');
let inputWidth = $('#inputWeight');
let submitButton = $( 'button, input[type="submit"]' );


/**
Sets all required global variables
*/
let color = '#000000';


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