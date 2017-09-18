const CLIPBOARD_INPUT_ID = 'vimvixen-clipboard-input';

const init = (doc) => {
  let input = doc.createElement('input');
  input.type = 'text';
  input.id = CLIPBOARD_INPUT_ID;
  input.style.position = 'fixed';
  input.style.left = '-100%';
  doc.body.append(input);
};

const copyLocation = (doc) => {
  let input = doc.getElementById(CLIPBOARD_INPUT_ID);
  input.value = doc.location.href;
  input.select();
  let result = document.execCommand('copy');
  input.blur();
  return result;
};

export { init, copyLocation };
