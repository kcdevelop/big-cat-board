import { goToContent } from './go-to-content.js';

//Show/hide the loaded information
export const showHideContent = () => {
    let dropdown = document.querySelector('#dropdown'),
         display = document.querySelector('.display-info');
    
    //Set height of the "dropdown" element, based on the height of the content
    dropdown.style.transition = `height .5s linear`;
    dropdown.style.height = `${display.offsetHeight}px`;

    try {
        //Go to the content "dropdown"
        goToContent(display.offsetTop, 0);
    } catch (err) {
        //Do Nothing
    }

    //Call the reset function after 1.5 minutes
    let showTimer = setTimeout(() => {
        clearTimeout(showTimer);
        resetSelected();
    }, 90000);
}