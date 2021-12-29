import { createTiles } from './create-tiles.js';

/*Create each HTML element, set id/class 
and append the respective elements*/
export const createInfoBoard = (objectData) => {
    const htmlElements = ['form', 'div', 'div', 'div', 'span', 'div'];

    //Iterate through the htmlElements array
    for (let htmlElement in htmlElements) {
        let boardElm = document.createElement(htmlElements[htmlElement]);

        if(htmlElement == 0 || htmlElement == 1) {
            if(htmlElement == 0) {
                boardElm.id = 'board';
            }

            if(htmlElement == 1) {
                boardElm.id = 'dropdown';
            }
            document.querySelector('#selection-board').append(boardElm);
        }

        if(htmlElement == 2) {
            boardElm.className = 'display-info';
            document.querySelector('#dropdown').append(boardElm);
        }

        if(htmlElement == 3 || htmlElement == 5) {
            if(htmlElement == 3) {
                boardElm.className = 'close-button';
            }

            if(htmlElement == 5) {
                boardElm.className = 'display-format';
            }

            document.querySelector('.display-info').append(boardElm);
        }

        if(htmlElement == 4) {
            boardElm.className = 'button-text';
            document.querySelector('.close-button').append(boardElm);
            document.querySelector('.button-text').innerHTML = 'Close&#8239;<i class="button-arrow">&#8743;</i>';
        }
    }
    createTiles(objectData); //Create image titles
}