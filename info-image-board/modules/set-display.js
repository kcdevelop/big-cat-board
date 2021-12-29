import { showHideContent } from './show-hide-content.js';

//Set the information to be displayed
export const setDisplay = (selectionKey, setInfo) => {
    try {
        let figure = document.querySelector(`#${selectionKey.replace(' ', '-')}`);

        //Add the "active" class to the selected image tile
        figure.classList.add('active');
        
        //Add the formated content to the "display-format" element
        document.querySelector('.display-format').innerHTML = `
        <div>
            <p>A ${setInfo.name} is a ${setInfo.kind} that is found in ${setInfo.geography}. Its habitats include ${setInfo.habitat}.</p>
            <p>It is ${setInfo.color}. They weigh between ${setInfo.weight} and are between ${setInfo.length}.</p>
            <p>Audibly, it ${setInfo.sound}.</p>
            <p>They eat ${setInfo.food}.</p>
        </div>`;

        //Call to the "showHideContent" function to show the content
        showHideContent();
    } catch (err) {
        //Do Nothing
    }
}