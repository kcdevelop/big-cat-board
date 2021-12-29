import { win } from './variables.js';

//Set the top postion of the "scrollTo" method
export const goToContent = (topPos, leftPos) => {
    var board = document.querySelector('#board'),
    imageTile = document.querySelectorAll('figure');

    let winHeight = win.outerHeight,
    boardHeight = board.scrollHeight,
    imageTileHeight = (imageTile[0].scrollHeight) * 2;
    
    /*Activate scrolling only if "board" element 
    extends beyong the window height*/
    if(boardHeight >= (winHeight - imageTileHeight)) {
        win.scrollTo({
            top: topPos,
            left: leftPos,
            behavior: 'smooth'
        });
    }
}
