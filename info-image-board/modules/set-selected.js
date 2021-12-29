import { getSelectedInfo } from './get-selected-info.js';
import { resetSelected } from './reset-selected.js';

//Set eventListeners
export const setSelected = () => {
    
    //Set eventListener to get the value of the selected image tile
    document.querySelectorAll('input[type="radio"]').forEach((selectionBox) => {
        selectionBox.addEventListener('click', (event) => {
                resetSelected();
                getSelectedInfo(event.target.value);
        });
    });
    
    //Set eventListener to close the "dropdown" element
    document.querySelector('.close-button').addEventListener('click', () => {
        resetSelected();
    });
}