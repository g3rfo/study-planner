import { shakeAnimation } from "../shakeAnimation";
import { closePopup } from "../../Hooks/usePopup";

export const saveSubject = (inputId, action, setSubjects, title = '') => {
  let isValid = true;

  const nameInput = document.getElementById(inputId);
  const name = nameInput.value;

  const colorInput = Array.from(document.getElementsByName('color-option'));
  let selectedColor = colorInput.find(option => option.checked)?.value;

  if (!name) {
    shakeAnimation(nameInput);
    nameInput.placeholder = 'Enter at least one letter';
    isValid = false;
  }

  if (action === 'save' && !selectedColor) {
    shakeAnimation(document.getElementById('color-form'));
    isValid = false;
  }

  if (isValid) {
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    // check if there already subject with this name
    if (Object.hasOwn(subjects, name)) {
      shakeAnimation(nameInput);
      nameInput.placeholder = 'This name already taken';
      nameInput.value = '';
      return false;
    };

    if (action === 'save') {
      subjects[name] = {color: selectedColor, tasks: []};
    } else if (action === 'rename') {
      const oldName = title;

      if (oldName && subjects[oldName]) {
        subjects[name] = subjects[oldName];
        delete subjects[oldName];
      }
    } else return;
    // add new subject in subjects in local storage and update subjects state
    
    localStorage.setItem('subjects', JSON.stringify(subjects));
    setSubjects(JSON.parse(localStorage.getItem('subjects')));
    if (action === 'save') {
      closePopup();
    } 
    else {
      return true;
    }
  }
}