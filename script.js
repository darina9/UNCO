
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  }
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const timeParts = countdownElement.innerText.split(':');
        let hours = parseInt(timeParts[0]);
        let minutes = parseInt(timeParts[1]);
        let seconds = parseInt(timeParts[2]);   
        
        seconds--;   
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }    
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }    
        
        countdownElement.innerText =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;    
        
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
        }
    }   
    
    document.getElementById('countdown').innerText = '10:00:00';    
    
    const countdownInterval = setInterval(updateCountdown, 1000);
 


const showElementWithDelay = (selector, delay) => {
    const element = document.querySelector(selector);
    if (element) {
        setTimeout(() => {
            element.classList.add('visible');
        }, delay);
    }
};

window.addEventListener('scroll', () => {
    const workflowAlgorithm = document.querySelector('.workflow-algorithm');
    if (isElementInViewport(workflowAlgorithm)) {
        
        showElementWithDelay('.workflow_1', 0);
        showElementWithDelay('.arrow_1_2', 200);
        showElementWithDelay('.workflow_2', 400);
        showElementWithDelay('.arrow_2_3', 600);
        showElementWithDelay('.workflow_3', 800);
        showElementWithDelay('.arrow_2_4', 1000);
        showElementWithDelay('.workflow_4', 1200);
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

   
    const isVisible = (
        rect.top <= windowHeight && rect.bottom >= 0 &&
        rect.left <= windowWidth && rect.right >= 0
    );
   
    return isVisible;
}


  
  function toggleAnswer(button) {
    const answer = button.nextElementSibling.querySelector('.faq-list__item_answer');
    const isVisible = answer.classList.contains('visible');
    const btn = button.querySelector('svg');
  
    if (isVisible) {
      answer.classList.remove('visible');
      btn.classList.remove('active'); 
    } else {
      answer.classList.add('visible');
      btn.classList.add('active'); 
    }
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownList = document.getElementById('dropdown-list');
    const contactMethodInput = document.getElementById('contact-method');
    const contactInfoInput = document.getElementById('contact-info');
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    dropdownBtn.addEventListener('click', function() {
        dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
        dropdownBtn.classList.toggle('active');
    });

    dropdownList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const method = e.target.textContent;
            contactMethodInput.value = method;
            dropdownList.style.display = 'none';
            dropdownBtn.classList.remove('active');

            
            contactInfoInput.removeEventListener('input', restrictPhoneInput);
            contactInfoInput.removeEventListener('input', restrictEmailInput);

            switch (e.target.dataset.value) {
                case 'method_1':
                    contactInfoInput.placeholder = '+49';
                    contactInfoInput.pattern = '\\+\\d+'; 
                    contactInfoInput.addEventListener('input', restrictPhoneInput);
                    break;
                case 'method_2':
                    contactInfoInput.placeholder = 'example@example.com';
                    contactInfoInput.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'; 
                    contactInfoInput.addEventListener('input', restrictEmailInput);
                    break;
                case 'method_3':
                    contactInfoInput.placeholder = 'Paste messenger link';
                    contactInfoInput.pattern = '.*'; 
                    break;
                case 'method_4':
                    contactInfoInput.placeholder = 'Paste social network link';
                    contactInfoInput.pattern = '.*'; 
                    break;
                default:
                    contactInfoInput.placeholder = 'Enter your contact information';
                    contactInfoInput.pattern = '.*'; 
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (!dropdownList.contains(e.target) && e.target !== dropdownBtn && !dropdownBtn.contains(e.target)) {
            dropdownList.style.display = 'none';
            dropdownBtn.classList.remove('active');
        }
    });

    function restrictPhoneInput(e) {
        const regex = /[^\d+]/g;
        e.target.value = e.target.value.replace(regex, '');
    }

    function restrictEmailInput(e) {
        const regex = /[^a-zA-Z0-9@._%+-]/g;
        e.target.value = e.target.value.replace(regex, '');
    }

    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);

        fetch('https://formspree.io/f/xrgnnbbk', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                formStatus.innerText = 'Form submitted successfully!';
                formStatus.style.display = 'block';
                formStatus.style.color = 'green';
                form.reset(); 

                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                formStatus.innerText = 'There was an error submitting the form.';
                formStatus.style.display = 'block';
                formStatus.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.innerText = 'There was an error submitting the form.';
            formStatus.style.display = 'block';
            formStatus.style.color = 'red';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const bannerImg = document.getElementById('banner-img');
    const bannerHeight = bannerImg.offsetHeight;

    
    window.addEventListener('scroll', function() {
        
        if (window.scrollY > bannerHeight && window.innerWidth > 767) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

   
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
