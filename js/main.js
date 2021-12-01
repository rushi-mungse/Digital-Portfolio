


$(document).ready(function () {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });



    const bars = document.querySelectorAll('.progress_bar');

    const runCounter = () => {
        bars.forEach((bar) => {
            let percentage = bar.dataset.percent;
            bar.style.width = percentage + "%";
            let tooltip = bar.children[0];
            tooltip.innerHTML = percentage + "%";

        });

        const counters = document.querySelectorAll('.counter')

        counters.forEach(count => {
            count.innerHTML = 0;
            let target = count.dataset.counter;

            const countIt = () => {
                let displayedCount = +count.innerText;
                if (displayedCount < target) {
                    count.innerText = Math.ceil(displayedCount + 1);
                    setTimeout(countIt, 3)
                } else {
                    count.innerText = target;
                }
            }
            countIt()
        })
    }

    let counterWrap = document.querySelector('.counter_wrapper');

    let options = {
        rootMargin: '0px 0px -100px 0px'
    }
    let done = 0;
    const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter()
        }
    }, options)
    counterObserver.observe(counterWrap);

    //img filter

    var $wrapper = $('.portfolio_wrapper');

    $wrapper.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        let selector = link.dataset.filter;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutMode: "masonry",
                animationOptions: {
                    duration: 750,
                    easing: "linear"
                }
            });
            let active = e.target
            links.forEach(link => {
                link.classList.remove('active')
            })
            active.classList.add('active')
        });
    });

    $('.magnific').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        }
    })
});
const print = document.querySelector('#btn-print')
print.addEventListener('click', () => {
    window.print();
})

const clickSendBtn = document.querySelector('#send_massage');

const userName = document.querySelector('#name')
const email = document.querySelector('#email')

let Name;
let Email;
userName.addEventListener('change', (e) => {
    Name = e.target.value;
})
userName.addEventListener('change', (e) => {
    Email = e.target.value;
})


clickSendBtn.addEventListener('click', () => {
    if (Name && Email) {
        alert(`${Name} 
Thank You For Replying!`)
    } else {
        alert('All field required!!')
    }
})