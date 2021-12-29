import dataURL, { tileImagePath } from './variables.js';

export const getData = async () => {
    const dataSet = await fetch(dataURL),
              dataResponse = dataSet.json();
    
    dataResponse.then(data => {
            createInfoBoard(data.bigCats);
    });
}

export const createInfoBoard = (data1) => {
    const elemStrcture = ['form', 'div', 'div', 'div', 'span', 'div'];

    for (let boardElms in elemStrcture) {
        let boardElm = document.createElement(elemStrcture[boardElms]);

        if(boardElms == 0 || boardElms == 1) {
            if(boardElms == 0) {
                boardElm.id = 'board';
            }

            if(boardElms == 1) {
                boardElm.id = 'dropdown';
            }
            document.querySelector('#selection-board').append(boardElm);
        }

        if(boardElms == 2) {
            boardElm.className = 'display-info';
            document.querySelector('#dropdown').append(boardElm);
        }

        if(boardElms == 3 || boardElms == 5) {
            if(boardElms == 3) {
                boardElm.className = 'close-button';
            }

            if(boardElms == 5) {
                boardElm.className = 'display-format';
            }

            document.querySelector('.display-info').append(boardElm);
        }

        if(boardElms == 4) {
            boardElm.className = 'button-text';
            document.querySelector('.close-button').append(boardElm);
            document.querySelector('.button-text').innerHTML = 'Close&#8239;<i class="button-arrow">&#8743;</i>';
        }
    }
     createTiles(data1);
}

export const createTiles = (elms) => {
    const selectionBoard = document.querySelector('#board');
    
    for (let elm in elms) {
        let figure = document.createElement('figure'),
            figCaption = document.createElement('figcaption'),
            figCaptionTxt = document.createTextNode(elms[elm].name),
            overlay = document.createElement('div'),
            radioInput = document.createElement('input');

            figCaption.style.backgroundImage = `url("${tileImagePath}${elms[elm].background}")`;
            figure.className = 'selection-block';
            figure.id = elm.replace(' ', '-');
            overlay.className = 'overlay';
            
            radioInput.name = 'selection';
            radioInput.type = 'radio';
            radioInput.value = elm; 

            overlay.appendChild(figCaptionTxt);
            figCaption.append(overlay);
            figure.append(radioInput, figCaption);
            
             document.querySelector('#board').append(figure);
    }

    let countElem = document.querySelectorAll('figure'),
         boardHeight = countElem.length * 5;
         
    selectionBoard.style.minHeight = `${boardHeight}%`;
}

