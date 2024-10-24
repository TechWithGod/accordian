


let faq = [
  {
    question: "What is Nusrat Fateh Ali Khan known for?",
    answer: "Nusrat Fateh Ali Khan is renowned for his Qawwali music, a form of Sufi devotional singing that originated from the Indian subcontinent. He is credited with modernizing and popularizing Qawwali on a global scale. His work not only kept the traditional elements of Qawwali intact but also added new layers of musical innovation that drew audiences from around the world. He incorporated classical music structures, improvisational singing, and contemporary instruments, which made Qawwali accessible to Western audiences while maintaining its deeply spiritual and devotional nature."
  },
  {
    question: "How did Nusrat Fateh Ali Khan influence Western music?",
    answer: "Nusrat Fateh Ali Khan's collaboration with Western musicians helped blend Eastern and Western musical traditions. He worked with artists like Peter Gabriel, who was fascinated by Nusrat's voice and spiritual energy. Peter Gabriel invited Nusrat to contribute to the soundtrack of the 1989 movie 'The Last Temptation of Christ.' His influence reached beyond just soundtracks, as he also worked with Eddie Vedder from Pearl Jam on the soundtrack for 'Dead Man Walking.' Nusrat's unique style of Sufi Qawwali was appreciated for its emotional depth, and it transcended cultural boundaries, inspiring many Western musicians to explore and incorporate elements of Eastern music into their own work."
  },
  {
    question: "What made Nusrat Fateh Ali Khan's voice unique?",
    answer: "Nusrat Fateh Ali Khan had an exceptional vocal range that spanned several octaves, which allowed him to seamlessly transition between high and low notes with remarkable ease. His ability to hold a single note for extended periods was one of his most admired skills, and it added a hypnotic quality to his performances. His voice had a raw, earthy quality that could convey deep spiritual ecstasy as well as profound emotional pain, which resonated with listeners regardless of their cultural or religious backgrounds. His voice, coupled with his impeccable sense of timing, rhythm, and control, set him apart from other vocalists."
  },
  {
    question: "How many albums did Nusrat Fateh Ali Khan release?",
    answer: "Nusrat Fateh Ali Khan recorded over 125 albums, making him one of the most prolific Qawwali artists in history. His extensive catalog includes traditional Qawwalis, collaborations with international artists, and movie soundtracks. These albums not only helped preserve centuries-old traditions but also introduced Qawwali to audiences worldwide. Many of his albums achieved commercial success in both South Asia and abroad, earning him a place in the Guinness World Records for having the largest recorded output by a Qawwali artist. His body of work continues to inspire musicians and remains an integral part of Sufi devotional music."
  },
  {
    question: "What awards did Nusrat Fateh Ali Khan receive during his career?",
    answer: "Throughout his illustrious career, Nusrat Fateh Ali Khan received numerous prestigious awards. He was honored with the UNESCO Music Prize in 1995, recognizing his significant contribution to world music and cultural exchange. He also received Pakistan's highest civilian award, the 'Pride of Performance,' for his outstanding achievements in music. In addition to these accolades, Nusrat was nominated for and won various international music awards, including the 'Legends' award at the UK Asian Music Awards posthumously in 2005. His work has also been acknowledged in the West, where Time magazine named him one of the Asian Heroes of the 20th Century."
  },
  {
    question: "How did Nusrat Fateh Ali Khan modernize Qawwali music?",
    answer: "Nusrat Fateh Ali Khan modernized Qawwali by infusing it with elements of contemporary music while staying true to its spiritual roots. He incorporated electronic instruments such as synthesizers and keyboards, which gave his performances a more contemporary feel. Additionally, his innovative approach to song arrangements, rhythmic variations, and improvisational singing made Qawwali more engaging for modern audiences. He often experimented with the length of performances, sometimes extending a single Qawwali for over an hour, captivating listeners with his dynamic vocal range and spiritual fervor. His unique style of fusing old and new elements of music ensured that Qawwali evolved while retaining its core essence."
  },
  {
    question: "What impact did Nusrat Fateh Ali Khan have on future generations of musicians?",
    answer: "Nusrat Fateh Ali Khan's impact on future generations of musicians is immeasurable. His ability to transcend cultural, linguistic, and religious barriers with his music has inspired artists across various genres, from classical to contemporary pop and rock. Many musicians, including AR Rahman, have cited Nusrat as a major influence on their work. His collaborations with Western artists opened up opportunities for cross-cultural music exchanges, allowing artists from different backgrounds to explore and experiment with new sounds. His legacy continues to influence young singers and musicians, particularly those in the Sufi, folk, and fusion music scenes."
  },
  {
    question: "What is the spiritual significance of Nusrat Fateh Ali Khan's music?",
    answer: "Nusrat Fateh Ali Khan's music carries deep spiritual significance, rooted in the Sufi tradition. His performances often revolved around themes of divine love, unity with God, and spiritual enlightenment. For many, his music serves as a means of connecting with the divine, as his Qawwalis are structured to induce a trance-like state where the listener can experience spiritual ecstasy. The repetitive nature of the music, combined with Nusrat's emotionally charged vocals, allows listeners to transcend their everyday experiences and enter a higher spiritual plane. His music has been widely appreciated in spiritual circles, and many consider his voice to be a divine gift."
  }
];

let Header = document.createElement('header');
Header.append(document.createElement('h1'));

Header.querySelector('h1').textContent = 'Ustaad Nusrat Fateh Ali Khan G';

document.body.appendChild(Header);

  window.addEventListener('resize', () => {


    const answers = document.querySelectorAll('.answer.expand');
    answers.forEach((answer) => {
      if(answer.scrollHeight === answer.clientHeight) {
        answer.style.height = `auto`;
      } else{
        answer.style.height = `${answer.scrollHeight}px`;
      }
    });
  });
  
  function questionClickHandler(){
 
    this.nextElementSibling.classList.toggle('expand');
    if(this.nextElementSibling.classList.contains('expand')) 
      {
        console.log(this.nextElementSibling.scrollHeight);
        this.nextElementSibling.style.height = `${this.nextElementSibling.scrollHeight}px`;
      } else {
        this.nextElementSibling.style.height = "0px";

      }
   


    console.log(this);
    console.log(this.nextElementSibling);
    console.log(this.querySelector('span').textContent);

    if(this.querySelector('span').className === 'fa-solid fa-plus') {
      this.querySelector('span').className = 'fa-solid fa-minus'; 
    } else {
      this.querySelector('span').className = 'fa-solid fa-plus'; 
    }
    
  }


let container = document.createElement('div');
container.setAttribute('class', 'container');

faq.forEach((question, index, questions) => {
  let indicator = document.createElement('div');
  indicator.setAttribute('class', 'indicator');
    let ques = document.createElement('div');
    let h2= document.createElement('h2');
    let span = document.createElement('span');

    ques.append(h2, span);
    span.className = 'fa-solid fa-plus';

    ques.setAttribute('class', 'question');
    h2.textContent = questions[index].question;
    let ans = document.createElement('p');
    ans.setAttribute('class', 'answer');
    ans.textContent = questions[index].answer;

    let questionContainer = document.createElement('div');
    questionContainer.setAttribute('id', index);
    questionContainer.setAttribute('class','question-container');

    questionContainer.append(ques, ans);

    container.appendChild(questionContainer);

    ques.addEventListener('click', questionClickHandler)

});




document.body.append(container);



