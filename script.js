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

  const userMsg = document.querySelector(".message-template.user");
  const gemmaMsg = document.querySelector(".message-template.gemma");
  const chatBox = document.getElementById("templatePreview");
  const cta = document.getElementById("ctaMessage");

  // Show messages
  setTimeout(() => {
    userMsg.style.opacity = 1;
  }, 500);

  setTimeout(() => {
    gemmaMsg.style.opacity = 1;
  }, 1500);

  // Hide chat template and show CTA
  setTimeout(() => {
    chatBox.style.transition = "opacity 0.5s ease";
    chatBox.style.opacity = 0;
  }, 3000);

  setTimeout(() => {
    chatBox.style.display = "none";
    cta.style.display = "block";
  }, 3600);
