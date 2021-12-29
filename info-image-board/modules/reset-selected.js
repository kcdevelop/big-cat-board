import { goToContent } from './go-to-content.js';

//Reset the selected image title
export const resetSelected = () => {
    let  figures = document.querySelectorAll('figure'),
          dropdown = document.querySelector('#dropdown');

    //Remove the "active" class and reset the checkbox
    figures.forEach((resetFigureBoxes) => {
        resetFigureBoxes.classList.remove('active');
        resetFigureBoxes.querySelector('input').checked = '';
    });

    //Set height of the "dropdown" element to zero
    dropdown.style.height = `0px`;

    try {
        //Return to the top of page
        goToContent(0, 0);
    } catch (err) {
        //Do Nothing
    }
}