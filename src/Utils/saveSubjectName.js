import { shakeAnimation } from "./shakeAnimation";
import { closePopup } from "../Hooks/usePopup";

export const saveSubjectName = (inputId, action, setSubjects, title = '') => {
  const input = document.getElementById(inputId);
  const name = input.value;

  // user enter name of subject
  if (name) { // input has name
    let subjects = JSON.parse(localStorage.getItem('subjects'));
    // check if there already subject with this name
    if (Object.hasOwn(subjects, name)) {
      shakeAnimation(input);
      input.placeholder = 'This name already taken';
      input.value = '';
      return false;
    };

    if (action === 'save') {
      subjects[name] = [];
    } else if (action === 'rename') {
      const oldName = title;

      console.log(oldName);

      if (oldName && subjects[oldName]) {
      subjects[name] = subjects[oldName];
      delete subjects[oldName];
      }
    } else {
      return;
    }
    // add new subject in subjects in local storage and update subjects state
    
    localStorage.setItem('subjects', JSON.stringify(subjects));
    setSubjects(JSON.parse(localStorage.getItem('subjects')));
    if (action === 'save') {
      closePopup();
    } 
    else {
      return true;
    }

  } else { // input empty
    shakeAnimation(input);
    input.placeholder = 'Enter at least one letter';
    return false;
  }
}