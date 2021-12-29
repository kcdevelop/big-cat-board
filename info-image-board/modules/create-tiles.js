import { imageFilePath } from './variables.js';
import { setSelected } from './set-selected.js';

/*Create the respective number of image tiles, based 
on the number of properties in the JSON object*/
export const createTiles = (objectData) => {
    const selectionBoard = document.querySelector('#board');
    
    //Checks to ensure there are no empty image tiles (multiples of four)
    if(Object.keys(objectData).length % 4 == 0) {
        
        //Iterate through the "objectData" array
        for (let data in objectData) {
            let imageTile = document.createElement('figure'),
            caption = document.createElement('figcaption'),
            captionTxt = document.createTextNode(objectData[data].name),
            overlay = document.createElement('div'),
            radioInput = document.createElement('input');
            
            imageTile.className = 'image-tile';
            imageTile.id = data.replace(' ', '-');
            
            radioInput.name = 'selection';
            radioInput.type = 'radio';
            radioInput.value = data; 

            overlay.className = 'overlay';
            overlay.appendChild(captionTxt);

            caption.style.backgroundImage = `url("${imageFilePath}${objectData[data].background}")`;
            caption.append(overlay);
            imageTile.append(radioInput, caption);
            
             document.querySelector('#board').append(imageTile);
        }

        //Set the tile height based on the number of tiles
        let countElem = document.querySelectorAll('figure'),
        boardHeight = (countElem.length / 4) * 150;
        selectionBoard.style.minHeight = `${boardHeight}px`;
    } else {
        //Display error message if tiles are not in multiples of four
        selectionBoard.innerHTML = `Unable to load "The Big Cat Board."`;
    }
    setSelected(); //Add eventListeners for the image tiles
}