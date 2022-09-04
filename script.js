let selectBtn = document.querySelector('.btn');
selectBtn.addEventListener('click' , (ea)=>{
      selectBtn.classList.add('fade');
      let voiceRecongnition = new webkitSpeechRecognition()
      voiceRecongnition.lang ='en-GB';
      voiceRecongnition.addEventListener('result' , (e)=>{
            document.querySelector('.text').value =e.results[0][0].transcript;
               selectBtn.classList.remove('fade');

      })
      voiceRecongnition.start();
})
