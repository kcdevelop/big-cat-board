import { data } from './get-data.js';
import { createInfoBoard } from './create-info-board.js';
import { resizeContent } from './resize-content.js';
import { win } from './variables.js';

//Create the board structure
createInfoBoard(data.entries);

const displayFormat = document.querySelector('.display-format');

//Resize
win.addEventListener('resize', () => {
    if(displayFormat.childElementCount > 0) {
        resizeContent();
    }
});