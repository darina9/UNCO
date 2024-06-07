
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
    
        // Уменьшаем количество секунд
        seconds--;
    
        // Если секунды равны 0, уменьшаем минуты и сбрасываем секунды до 59
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
    
        // Если минуты равны 0, уменьшаем часы и сбрасываем минуты до 59
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
    
        // Обновляем отображение таймера
        countdownElement.innerText =
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
        // Если таймер достиг нуля, прекращаем отсчет
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(countdownInterval);
        }
    }
    
    // Устанавливаем начальное значение таймера
    document.getElementById('countdown').innerText = '10:00:00';
    
    // Обновляем обратный отсчет каждую секунду
    const countdownInterval = setInterval(updateCountdown, 1000);
 

//     const showElementWithDelay = (selector, delay) => {
//       const element = document.querySelector(selector);
//       if (element) {
//           setTimeout(() => {
//               element.classList.add('visible');
//           }, delay);
//       }
//   };
  
//   window.addEventListener('scroll', () => {
//       if (isElementInViewport(document.querySelector('.workflow-algorithm'))) {
//           showElementWithDelay('.workflow_1', 0);
//           showElementWithDelay('.arrow_1_2', 200);
//           showElementWithDelay('.workflow_2', 400);
//           showElementWithDelay('.arrow_2_3', 600);
//           showElementWithDelay('.workflow_3', 800);
//           showElementWithDelay('.arrow_2_4', 1000);
//           showElementWithDelay('.workflow_4', 1200);
          
//       }
//   });
  
//   function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
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

    // Проверка, что элемент частично виден в viewport
    const isVisible = (
        rect.top <= windowHeight && rect.bottom >= 0 &&
        rect.left <= windowWidth && rect.right >= 0
    );

   
    return isVisible;
}

// Первоначальная проверка после загрузки страницы
// window.addEventListener('load', () => {
//     const workflowAlgorithm = document.querySelector('.workflow-algorithm');
//     if (isElementInViewport(workflowAlgorithm)) {
//         console.log('Element is in viewport on load');
//         showElementWithDelay('.workflow_1', 0);
//         showElementWithDelay('.arrow_1_2', 200);
//         showElementWithDelay('.workflow_2', 400);
//         showElementWithDelay('.arrow_2_3', 600);
//         showElementWithDelay('.workflow_3', 800);
//         showElementWithDelay('.arrow_2_4', 600);
//         showElementWithDelay('.workflow_4', 800);
//     }
// });
  
  function toggleAnswer(button) {
    const answer = button.nextElementSibling.querySelector('.faq-list__item_answer');
    const isVisible = answer.classList.contains('visible');
    const btn = button.querySelector('svg');
  
    if (isVisible) {
      answer.classList.remove('visible');
      btn.classList.remove('active'); // Удаляем класс active, когда ответ скрыт
    } else {
      answer.classList.add('visible');
      btn.classList.add('active'); // Добавляем класс active, когда ответ виден
    }
  }
  
//   document.addEventListener('DOMContentLoaded', function() {
//     const dropdownBtn = document.getElementById('dropdown-btn');
//     const dropdownList = document.getElementById('dropdown-list');
//     const contactMethodInput = document.getElementById('contact-method');
//     const contactInfoInput = document.getElementById('contact-info');
   

  

//     dropdownBtn.addEventListener('click', function() {
//         dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
//         dropdownBtn.classList.toggle('active');
        
//     });

//     dropdownList.addEventListener('click', function(e) {
//         if (e.target.tagName === 'LI') {
//             const method = e.target.textContent;
//             contactMethodInput.value = method;
//             dropdownList.style.display = 'none';
//             dropdownBtn.classList.remove('active');
           

//             // Remove previous input restrictions
//             contactInfoInput.removeEventListener('input', restrictPhoneInput);
//             contactInfoInput.removeEventListener('input', restrictEmailInput);

//             switch (e.target.dataset.value) {
//                 case 'method_1':
//                     contactInfoInput.placeholder = '+49';
//                     contactInfoInput.pattern = '\\+\\d+'; // Pattern for phone number
//                     contactInfoInput.addEventListener('input', restrictPhoneInput);
//                     break;
//                 case 'method_2':
//                     contactInfoInput.placeholder = 'example@example.com';
//                     contactInfoInput.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'; // Pattern for email
//                     contactInfoInput.addEventListener('input', restrictEmailInput);
//                     break;
//                 case 'method_3':
//                     contactInfoInput.placeholder = 'Paste messenger link';
//                     contactInfoInput.pattern = '.*'; // General pattern (any input)
//                     break;
//                 case 'method_4':
//                     contactInfoInput.placeholder = 'Paste social network link';
//                     contactInfoInput.pattern = '.*'; // General pattern (any input)
//                     break;
//                 default:
//                     contactInfoInput.placeholder = 'Enter your contact information';
//                     contactInfoInput.pattern = '.*'; // General pattern (any input)
//             }
//         }
//     });

//     document.addEventListener('click', function(e) {
//         if (!dropdownList.contains(e.target) && e.target !== dropdownBtn && !dropdownBtn.contains(e.target)) {
//             dropdownList.style.display = 'none';
//             dropdownBtn.classList.remove('active');
            
//         }
//     });

//     function restrictPhoneInput(e) {
//         const regex = /[^\d+]/g;
//         e.target.value = e.target.value.replace(regex, '');
//     }

//     function restrictEmailInput(e) {
//         const regex = /[^a-zA-Z0-9@._%+-]/g;
//         e.target.value = e.target.value.replace(regex, '');
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownList = document.getElementById('dropdown-list');
    const contactMethodInput = document.getElementById('contact-method');
    const contactInfoInput = document.getElementById('contact-info');
    const form = document.getElementById('contact-form');

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

            // Remove previous input restrictions
            contactInfoInput.removeEventListener('input', restrictPhoneInput);
            contactInfoInput.removeEventListener('input', restrictEmailInput);

            switch (e.target.dataset.value) {
                case 'method_1':
                    contactInfoInput.placeholder = '+49';
                    contactInfoInput.pattern = '\\+\\d+'; // Pattern for phone number
                    contactInfoInput.addEventListener('input', restrictPhoneInput);
                    break;
                case 'method_2':
                    contactInfoInput.placeholder = 'example@example.com';
                    contactInfoInput.pattern = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'; // Pattern for email
                    contactInfoInput.addEventListener('input', restrictEmailInput);
                    break;
                case 'method_3':
                    contactInfoInput.placeholder = 'Paste messenger link';
                    contactInfoInput.pattern = '.*'; // General pattern (any input)
                    break;
                case 'method_4':
                    contactInfoInput.placeholder = 'Paste social network link';
                    contactInfoInput.pattern = '.*'; // General pattern (any input)
                    break;
                default:
                    contactInfoInput.placeholder = 'Enter your contact information';
                    contactInfoInput.pattern = '.*'; // General pattern (any input)
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

    // Handle form submission via AJAX
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting the default way
        const formData = new FormData(form);

        fetch('https://formspree.io/f/mkndlaza', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
                form.reset(); // Reset the form after successful submission
            } else {
                alert('There was an error submitting the form.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    });
});
