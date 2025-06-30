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


  const video = document.getElementById('webcam');

  async function setupCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      video.srcObject = stream;
    } catch (error) {
      console.error('Error accessing webcam:', error);
      alert('Could not access the webcam. Please allow camera permission.');
    }
  }
