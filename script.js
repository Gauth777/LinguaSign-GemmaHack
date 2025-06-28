document.getElementById('speakBtn').addEventListener('click', function () {
  const text = document.getElementById('gestureSelect').value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});
