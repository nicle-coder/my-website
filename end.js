const buttons = document.querySelectorAll('.pill-btn');
const overlayInner = document.getElementById("overlayInner");
const talakayanBtn = document.getElementById("talakayanBtn");
const talakayanDropdown = document.getElementById("talakayanDropdown");
const closeBtn = document.getElementById("closeBtn");
const siteHeader = document.getElementById("siteHeader");
const heroSection = document.querySelector(".hero");

// Content for each section
const contents = {
  
  panimula: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Panimula</h2>
          <p>Maligayang pagdating sa aking website na naglalayong magbahagi ng kaalaman tungkol sa mga akdang pampanitikan noong Panahon ng Hapon, partikular sa tradisyunal na tulang Haiku.</p>
          <p>Dito, makikita ninyo ang masusing talakayan tungkol sa kasaysayan at kahalagahan ng Haiku sa panitikang Pilipino, kasamang mga halimbawa at pagsusulit upang masukat at mapalalim ang inyong kaalaman.</p>
          <p>Ang platform na ito ay nagbibigay-daan sa mga mag-aaral na matuto sa mas madaling paraan at sa mas nakaka-engganyong karanasan gamit ang teknolohiya.</p>
        </div>
      </div>
    `
  },
  
  author: {
    html: `
      <div class="author-container">
        <img src="Screenshot 2025-12-04 120458.png" alt="Stephanie M. Marca - Author" />
      </div>
    `
  },
  
  sukatin: {
    html: `
      <div class="quiz-container">
        <div class="quiz-inner">
          <div class="quiz-header">
            <h2>Sukatin Natin!</h2>
            <p class="quiz-intro">
              Bago natin simulan ang ating talakayan patungkol sa "Gintong Panahon ng Panitikang Pilipino" ay atin munang sukatin ang inyong kaalaman patungkol dito. Narito ang ilang mga katanungan na magbibigay sa inyo ng ideya patungkol sa ating aralin.
            </p>
          </div>
          
          <div class="question-item" data-question="1">
            <div class="question-text">1. Ano ang tawag sa panahong itinuturing na pinakamasigla at pinakamayabong sa panitikang Pilipino?</div>
            <div class="options">
              <div class="option" data-answer="A">A. Panahon ng Amerikano</div>
              <div class="option" data-answer="B">B. Gintong Panahon</div>
              <div class="option" data-answer="C">C. Panahon ng Hapon</div>
              <div class="option" data-answer="D">D. Panahon ng Rebolusyon</div>
            </div>
          </div>
          
          <div class="question-item" data-question="2">
            <div class="question-text">2. Kailan nagsimula ang tinatawag na Gintong Panahon ng Panitikan?</div>
            <div class="options">
              <div class="option" data-answer="A">A. Panahon bago dumating ang Espanyol</div>
              <div class="option" data-answer="B">B. Panahon ng Amerikano</div>
              <div class="option" data-answer="C">C. Panahon ng Hapon</div>
              <div class="option" data-answer="D">D. Panahon ng Komonwelt</div>
            </div>
          </div>
          
          <div class="question-item" data-question="3">
            <div class="question-text">3. Sino ang tinaguriang Ama ng Balagtasan?</div>
            <div class="options">
              <div class="option" data-answer="A">A. Jose Garcia Villa</div>
              <div class="option" data-answer="B">B. Julian Cruz Balmaceda</div>
              <div class="option" data-answer="C">C. Hermogenes Ilagan</div>
              <div class="option" data-answer="D">D. Francisco "Balagtas" Baltazar</div>
            </div>
          </div>
          
          <div class="question-item" data-question="4">
            <div class="question-text">4. Aling uri ng panitikan ang higit na sumigla noong Gintong Panahon?</div>
            <div class="options">
              <div class="option" data-answer="A">A. Komiks</div>
              <div class="option" data-answer="B">B. Balagtasan</div>
              <div class="option" data-answer="C">C. Maikling Kuwento</div>
              <div class="option" data-answer="D">D. Nobela</div>
            </div>
          </div>
          
          <div class="question-item" data-question="5">
            <div class="question-text">5. Bakit tinawag na "ginto" ang panahong ito?</div>
            <div class="options">
              <div class="option" data-answer="A">A. Dahil maraming akda ang naisulat sa Ingles</div>
              <div class="option" data-answer="B">B. Dahil nagkaroon ng pag-unlad sa teknolohiya</div>
              <div class="option" data-answer="C">C. Dahil ito ang panahon ng kasaganaan at kalidad ng panitikang Pilipino</div>
              <div class="option" data-answer="D">D. Dahil maraming Pilipino ang umunlad ang kabuhayan</div>
            </div>
          </div>
          
          <button class="submit-btn" id="submitQuiz">Suriin ang Sagot</button>
          
          <div class="quiz-result" id="quizResult" style="display:none;"></div>
        </div>
      </div>
    `
  },
  
  kasaysayan: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Kasaysayan</h2>
          <p><strong>Kasaysayan (Panahon ng Hapon)</strong></p>

          <p>Noong panahon ng Hapon, maraming impluwensya ang naging bahagi ng panitikan sa Pilipinas. Lumipat sa pagsulat ng mga panitikang Pilipino ang mga manunulat na nagsusulat sa wikang Ingles dahil sa pinagbawal ng mga Hapon ang anumang impluwensya ng mga Amerikano sa bansa tulad ng panitikan.</p>
          
          <p>Ito ang panahon na kinikilalang Gintong Panahon ng Panitikang Pilipino dahil sa ang mga uri ng panitikan ay nasusulat sa wikang Tagalog. Naging tanyag ang mga akdang patungkol sa buhay sa lalawigan gaya ng pagsasaka at pangingisda dahil sa pagmamahal ng Hapones sa hanapbuhay na ito.</p>
          
          <p>Pumapaksa ang karamihan ng mga akda noong panahong ito ay pagkamakabayan, pag-ibig at kaliksan na makikita sa mga tula, maikling kuwento, dula at iba pa. Dinala ng mga Hapones ang kanilang malalim na pananampalataya at sining na makikita sa kanilang mga templo, origami, ikebana, at iba pang sining.</p>
          
          <p>Sa panitikan dinala nila ang haiku at tanka na isang uri ng tulang may layong pagsama-samahin ang mga ideya at imahe sa pamamagitan ng kakaunting salita lamang na tinumbasan ng mga makatang Pilipino na tinawag na tanaga.</p>

          <p>Sa kabuuan, ang panahon ng Hapon ay nagdulot ng malalim na impluwensya sa panitikan ng Pilipinas. Ito ay nagbigay-buhay sa iba't ibang uri ng akda na hanggang ngayon ay patuloy na kinikilala at iniuugnay sa kanilang kultura at kasaysayan.</p>
        </div>
      </div>
    `
  },
  
  haiku: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Haiku</h2>
          <p>Ang haiku ay isang tradisyunal na anyo ng maikling tula mula sa Japan na kilala sa pagiging payak ngunit puno ng kahulugan. Binubuo ito ng tatlong taludtod na may bilang-pantig na 5-7-5, kaya't kabuuang 17 pantig lamang. Dahil sa napakaikling anyo nito, ang haiku ay nangangailangan ng matipid ngunit malalim na paggamit ng mga salita, kung saan bawat taludtod ay nagbibigay ng malinaw na imahen o damdamin.</p>
          
          <p>Karaniwang paksa ng haiku ang kalikasan, mga panahon (seasons), pagbabago ng kapaligiran, at mga simpleng karanasan sa araw-araw. Sa tradisyon ng mga Hapon, mahalaga ang tinatawag na kigo, o salitang tumutukoy sa partikular na panahon (hal. tagsibol, taglagas), upang makapagbigay ng tiyak na mood o emosyon. Gayunpaman, sa modernong panitikan, maaaring sumalamin ang haiku sa iba't ibang karanasan ng tao, tulad ng saya, lungkot, pag-asa, o pagninilay.</p>
          
          <p>Malaki ang diin ng haiku sa pagmamasid. Layunin nitong makuha ang isang sandali—isang iglap—at ilarawan ito sa paraang simple ngunit makapagpaparamdam sa mambabasa ng katahimikan, pagninilay, o biglang pag-unawa. Hindi ito nangangailangan ng tugma; bagkus, nakatuon ito sa larawan (imagery) at emosyon.</p>
          
          <p>Sa kabuuan, ang haiku ay isang uri ng tula na nagpapakita na hindi kailangan ng mahabang salita upang makapagpahayag ng malalim na damdamin at pag-unawa sa mundo.</p>
        </div>
      </div>
    `
  },
  
  halimbawa: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Mga Halimbawa</h2>
          <p>Mga halimbawa ng Haiku na isinalin o adaptado sa Filipino:</p>
          <br>
          <p><strong>Anyaya</strong><br>
          Ulilang damo<br>
          Sa tahimik na ilog<br>
          Halika, sinta.</p>
          <br>
          <p><strong>Umagang Payapa</strong><br>
          Pula ang langit<br>
          Humahalik ang hangin<br>
          Gising ang araw</p>
          <br>
          <p><strong>Ulan</strong><br>
          Pumatak patak<br>
          Lamig sa bawat sulok<br>
          Tahimik ngayon</p>
          <br>
          <p><strong>Dagat</strong><br>
          Alon tumiklop<br>
          Hinagod ang buhangin<br>
          Awit ng dagat</p>
          <br>
          <p><strong>Pagsibol</strong><br>
          Sanga'y umusbong<br>
          Sinag ng bagong araw<br>
          Bagong pag-asa</p>
        </div>
      </div>
    `
  },
  
  pagsusulit: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Pagsusulit</h2>
          <p>Upang malaman kung kayo ay mayroong natutuhan sa ating talakayan patungkol sa mga Panitikan sa Panahon ng Hapon (Haiku), ating subukin ang inyong kaalaman sa pamamagitan ng pagsagot sa pagsusulit na aking inihanda. Handa na ba kayo? Tara, simulan na natin!</p>
          <br>
          <p><strong>Panuto:</strong> Piliin sa loob ng kahon ang tamang salita na angkop sa bawat pahayag. Isulat ang sagot sa patlang bago ang bilang. Gumamit ng hiwalay na papel sa pagsagot.</p>
          <br>
          <p style="text-align: center; background: rgba(212,175,55,0.2); padding: 15px; border-radius: 8px; border: 2px solid var(--gold);">
            <strong>Gintong Panahon</strong> • <strong>Haiku</strong> • <strong>5-7-5</strong> • <strong>Tanaga</strong> • <strong>Kigo</strong><br>
            <strong>Kalikasan</strong> • <strong>Japan</strong> • <strong>17</strong> • <strong>Panahon ng Hapon</strong> • <strong>Makabuluhan</strong> • <strong>Imahe</strong>
          </p>
          <br>
          <p>1. Ang panahon ng Hapon sa Pilipinas ay kilala rin bilang __________ dahil sa paglago ng panitikang nasusulat sa wikang Tagalog.</p>
          <p>2. Isang tradisyunal na anyo ng maikling tula mula sa Japan ay ang __________.</p>
          <p>3. Binubuo ang haiku ng tatlong taludtod na may bilang-pantig na __________.</p>
          <p>4. Ang kabuuang bilang ng pantig sa isang haiku ay __________.</p>
          <p>5. Ang haiku ay nagbigay-inspirasyon sa mga makatang Pilipino na lumikha ng __________.</p>
          <p>6. Sa haiku, mahalaga ang tinatawag na __________, o salitang tumutukoy sa partikular na panahon.</p>
          <p>7. Karaniwang paksa ng haiku ay ang __________, mga panahon, at simpleng karanasan sa araw-araw.</p>
          <p>8. Ang haiku ay nakatuon sa malinaw na __________ at damdamin, hindi sa tugma.</p>
          <p>9. Ang mga akdang patungkol sa buhay sa lalawigan gaya ng pagsasaka at pangingisda ay naging tanyag noong __________.</p>
          <p>10. Layunin ng haiku na makuha ang isang sandali at ilarawan ito sa paraang simple ngunit __________ sa mambabasa.</p>
        </div>
      </div>
    `
  },
  
  gawain: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Gawain</h2>
          <p><strong>Panuto:</strong> Sa isang buong papel, gumawa ng isang haiku na naglalarawan ng kalikasan, damdamin, o isang simpleng karanasan sa buhay. Sundin ang estruktura at mga pamantayan sa ibaba. Isulat ang iyong sagot sa espasyong ibinigay at lagyan ng pamagat ang iyong tula.</p>
          <br>
          <h3 style="color: var(--gold); text-align: center; margin: 20px 0;">PAMANTAYAN</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <thead>
              <tr style="background: rgba(212,175,55,0.3); border: 2px solid var(--gold);">
                <th style="padding: 12px; text-align: left; border: 1px solid var(--gold);">Antas</th>
                <th style="padding: 12px; text-align: left; border: 1px solid var(--gold);">Deskripsyon</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: rgba(255,255,255,0.05);">
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4); vertical-align: top;"><strong>4 – Napakahusay</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4);">Ang haiku ay sumusunod sa estrukturang 5-7-5, malinaw at makabuluhan ang mensahe, may magandang imahen o damdamin, at maayos ang wika. Kaakit-akit at kahanga-hanga ang kabuuang presentasyon.</td>
              </tr>
              <tr style="background: rgba(255,255,255,0.03);">
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4); vertical-align: top;"><strong>3 – Mahusay</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4);">Karamihan sa estruktura at pantig ay tama, malinaw ang mensahe, may imahen o damdamin, at maayos ang wika. Maganda ang kabuuang presentasyon ngunit may kaunting kakulangan.</td>
              </tr>
              <tr style="background: rgba(255,255,255,0.05);">
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4); vertical-align: top;"><strong>2 – Katamtaman</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4);">May mga mali sa estruktura o pantig, ang mensahe ay hindi ganap na malinaw, limitado ang imahen o damdamin, at may ilang kahinaan sa wika. Ang presentasyon ay medyo maayos.</td>
              </tr>
              <tr style="background: rgba(255,255,255,0.03);">
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4); vertical-align: top;"><strong>1 – Kailangan pang pagbutihin</strong></td>
                <td style="padding: 12px; border: 1px solid rgba(212,175,55,0.4);">Hindi sumusunod sa estruktura, mahina o hindi malinaw ang mensahe, walang imahen o damdamin, at may kahirapan sa wika. Ang kabuuang presentasyon ay hindi kaakit-akit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  
  reperensyal: {
    html: `
      <div class="panimula-box">
        <div class="panimula-inner">
          <h2>Reperensyal</h2>
          <br>
          <p>DepEd. (2025). <em>DepEd MELC 2025: Most essential learning competencies.</em> Teach Pinas. <a href="https://www.teachpinas.com" target="_blank" style="color: var(--gold); text-decoration: underline;">https://www.teachpinas.com</a></p>
          <br>
          <p>LR-Portal. (n.d.). <em>Grade 8 Matatag LMs.</em> <a href="https://www.lr-portal.com" target="_blank" style="color: var(--gold); text-decoration: underline;">https://www.lr-portal.com</a></p>
          <br>
          <p>Pinoy Class. (n.d.). <em>Halimbawa ng haiku – Haiku halimbawa.</em> <a href="https://www.pinoyclass.com" target="_blank" style="color: var(--gold); text-decoration: underline;">https://www.pinoyclass.com</a></p>
          <br>
          <p><em>Tanka at haiku: Mga halimbawa at kahulugan nito.</em> <a href="https://www.examplewebsite.com" target="_blank" style="color: var(--gold); text-decoration: underline;">https://www.examplewebsite.com</a></p>
        </div>
      </div>
    `
  }
};

// Function to show content
function showContent(section) {
  const content = contents[section];
  if (content) {
    overlayInner.innerHTML = content.html;
    
    // Hide header, show close button, and blur background
    siteHeader.style.display = 'none';
    closeBtn.classList.add('visible');
    heroSection.classList.add('blurred');
    
    // Mark active button
    buttons.forEach(btn => {
      if (btn.getAttribute('data-section') === section) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Remove active from Talakayan if not a dropdown section
    if (!['kasaysayan', 'haiku', 'halimbawa', 'pagsusulit'].includes(section)) {
      talakayanBtn.classList.remove('active');
    }
    
    // Initialize quiz if on sukatin section
    if (section === 'sukatin') {
      initializeQuiz();
    }
    
    // Initialize pagsusulit if on that section
    if (section === 'pagsusulit') {
      initializePagsusulit();
    }
  }
}

// Quiz functionality
function initializeQuiz() {
  const correctAnswers = {
    '1': 'B',
    '2': 'C',
    '3': 'D',
    '4': 'B',
    '5': 'C'
  };
  
  const userAnswers = {};
  
  // Handle option selection
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
    option.addEventListener('click', function() {
      const questionItem = this.closest('.question-item');
      const questionNum = questionItem.getAttribute('data-question');
      const answer = this.getAttribute('data-answer');
      
      // Remove selected class from siblings
      questionItem.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Add selected class to clicked option
      this.classList.add('selected');
      
      // Store user answer
      userAnswers[questionNum] = answer;
    });
  });
  
  // Handle submit
  const submitBtn = document.getElementById('submitQuiz');
  const resultDiv = document.getElementById('quizResult');
  
  submitBtn.addEventListener('click', function() {
    if (Object.keys(userAnswers).length < 5) {
      alert('Mangyaring sagutin ang lahat ng tanong!');
      return;
    }
    
    let score = 0;
    
    // Check answers and mark correct/wrong
    Object.keys(correctAnswers).forEach(questionNum => {
      const questionItem = document.querySelector(`[data-question="${questionNum}"]`);
      const userAnswer = userAnswers[questionNum];
      const correctAnswer = correctAnswers[questionNum];
      
      questionItem.querySelectorAll('.option').forEach(opt => {
        const optAnswer = opt.getAttribute('data-answer');
        
        if (optAnswer === correctAnswer) {
          opt.classList.add('correct');
        }
        
        if (optAnswer === userAnswer && userAnswer !== correctAnswer) {
          opt.classList.add('wrong');
        }
      });
      
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    
    // Show results
    const percentage = (score / 5) * 100;
    let message = '';
    
    if (percentage >= 80) {
      message = 'Napakahusay! Ikaw ay may malalim na kaalaman sa Gintong Panahon!';
    } else if (percentage >= 60) {
      message = 'Mahusay! May magandang pag-unawa ka sa paksa.';
    } else {
      message = 'Mayroon ka pang kailangang pag-aralan. Magpatuloy!';
    }
    
    resultDiv.innerHTML = `
      <h3>Resulta ng Pagsusulit</h3>
      <p>Iskor: <strong>${score} sa 5</strong> (${percentage}%)</p>
      <p>${message}</p>
    `;
    resultDiv.style.display = 'block';
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Natapos na';
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// Pagsusulit functionality
function initializePagsusulit() {
  const correctAnswers = {
    '1': 'gintong panahon',
    '2': 'haiku',
    '3': '5-7-5',
    '4': '17',
    '5': 'tanaga',
    '6': 'kigo',
    '7': 'kalikasan',
    '8': 'imahe',
    '9': 'panahon ng hapon',
    '10': 'makabuluhan'
  };
  
  const submitBtn = document.getElementById('submitPagsusulit');
  const resultDiv = document.getElementById('pagsusulitResult');
  
  if (!submitBtn || !resultDiv) {
    console.error('Pagsusulit elements not found');
    return;
  }
  
  submitBtn.addEventListener('click', function() {
    const inputs = document.querySelectorAll('.pagsusulit-input');
    let allAnswered = true;
    
    // Check if all fields are filled
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allAnswered = false;
      }
    });
    
    if (!allAnswered) {
      alert('Mangyaring sagutin ang lahat ng tanong!');
      return;
    }
    
    let score = 0;
    
    // Check each answer
    inputs.forEach(input => {
      const questionNum = input.closest('.pagsusulit-question').getAttribute('data-question');
      const userAnswer = input.value.trim().toLowerCase();
      const correctAnswer = correctAnswers[questionNum];
      
      // Compare answers
      if (userAnswer === correctAnswer) {
        score++;
        input.style.background = 'rgba(34,139,34,0.5)';
        input.style.borderColor = '#32CD32';
        input.style.color = '#fff';
      } else {
        input.style.background = 'rgba(220,20,60,0.5)';
        input.style.borderColor = '#DC143C';
        input.style.color = '#fff';
        
        // Show correct answer
        const questionDiv = input.closest('.pagsusulit-question');
        const correctSpan = document.createElement('span');
        correctSpan.style.color = '#32CD32';
        correctSpan.style.marginLeft = '10px';
        correctSpan.style.fontWeight = '700';
        correctSpan.style.display = 'block';
        correctSpan.style.marginTop = '8px';
        correctSpan.textContent = `✓ Tamang sagot: ${correctAnswers[questionNum]}`;
        questionDiv.appendChild(correctSpan);
      }
      
      // Disable input
      input.disabled = true;
    });
    
    // Show results
    const percentage = (score / 10) * 100;
    let message = '';
    
    if (percentage >= 90) {
      message = 'Napakahusay! Ikaw ay may malalim na kaalaman sa Haiku!';
    } else if (percentage >= 80) {
      message = 'Mahusay! Maganda ang iyong pag-unawa sa paksa.';
    } else if (percentage >= 70) {
      message = 'Mabuti! May natutuhan ka na, magpatuloy pa.';
    } else {
      message = 'Mayroon ka pang kailangang pag-aralan. Huwag sumuko!';
    }
    
    resultDiv.innerHTML = `
      <h3>Resulta ng Pagsusulit</h3>
      <p>Iskor: <strong>${score} sa 10</strong> (${percentage}%)</p>
      <p>${message}</p>
    `;
    resultDiv.style.display = 'block';
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Natapos na';
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

// Function to close/reset content
function closeContent() {
  // Clear the content
  overlayInner.innerHTML = '';
  
  // Hide close button, show header, and remove blur
  closeBtn.classList.remove('visible');
  siteHeader.style.display = 'flex';
  heroSection.classList.remove('blurred');
  
  // Remove all active states
  talakayanDropdown.style.display = 'none';
  buttons.forEach(btn => btn.classList.remove('active'));
  talakayanBtn.classList.remove('active');
}

// Button click handlers
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const section = btn.getAttribute('data-section');
    if (section && section !== 'talakayanBtn') {
      showContent(section);
      talakayanDropdown.style.display = 'none';
    }
  });
});

// Talakayan dropdown toggle
talakayanBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const isVisible = talakayanDropdown.style.display === 'flex';
  talakayanDropdown.style.display = isVisible ? 'none' : 'flex';
});

// Dropdown buttons
const dropdownButtons = talakayanDropdown.querySelectorAll('button');
dropdownButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const section = btn.getAttribute('data-section');
    showContent(section);
    talakayanDropdown.style.display = 'none';
    talakayanBtn.classList.add('active');
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  talakayanDropdown.style.display = 'none';
});

// Close button handler
closeBtn.addEventListener('click', closeContent);

// ESC key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeContent();
  }
});

// Initialize - show header, no content
siteHeader.style.display = 'flex';
closeBtn.classList.remove('visible');