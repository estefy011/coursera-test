// STEP 6: Wrap the entire contents of SpeakGoodbye.js inside of an IIFE
// See Lecture 52, part 2
// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
(function(window) {
  var byeSpeaker = {};
  var speakWord = "Goodbye";

  byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
