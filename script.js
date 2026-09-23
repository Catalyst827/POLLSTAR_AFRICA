let counter = document.querySelector('.count');

let mytarget = counter.getAttribute('data');

let count = 0;

let target = Number(mytarget);

let observer = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting) {
        let timer = setInterval(() => {

            count++;

            counter.textContent = count;

            if (count >= target) {
                clearInterval(timer);
                observer.unobserve(counter);
            }

        }, 10);
    }

}, { threshold: 0.5 });
observer.observe(counter);