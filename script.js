// Check if browser supports speech synthesis
if ('speechSynthesis' in window) {
  const buttons = document.querySelectorAll('.button-row button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const text = button.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    });
  });
} else {
  alert('Sorry, your browser does not support speech synthesis.');
}
