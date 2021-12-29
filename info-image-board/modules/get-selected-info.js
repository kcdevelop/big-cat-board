import { data } from './get-data.js';
import { setDisplay } from './set-display.js';

//Provides the selected item name
export const getSelectedInfo = (selectedItem) => {
    setDisplay(selectedItem, data.entries[selectedItem]);
}