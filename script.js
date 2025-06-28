<!-- JS Practice -->
<button id="signBtn">Say Hello in Sign</button>
<script>
  document.getElementById('signBtn').addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance("Hello, how are you?");
    speechSynthesis.speak(utterance);
  });
</script>
