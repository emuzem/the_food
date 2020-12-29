window.addEventListener('DOMContentLoaded', () => {
    //tabs
    let tabsContent = document.querySelectorAll('.offer__slide'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabcontent = document.querySelectorAll('.tabcontent');

    function hideTabsContent(content, tabs, slides) {
        content.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
        slides.forEach(item => {
            item.classList.add('hide');
        });
    }

    function showTabsContent(content, tabs, slides, i=0){
        content[i].classList.add('show', 'fade');
        content[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
        slides[i].classList.add('show', 'fade');
        slides[i].classList.remove('hide');
    }
    hideTabsContent(tabsContent, tabs, tabcontent);
    showTabsContent(tabsContent, tabs, tabcontent, 0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabsContent(tabsContent, tabs, tabcontent);
                    showTabsContent(tabsContent, tabs, tabcontent, i);
                }
            });
        }
    });

    //timing

    const deadline = '2021-09-12';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 *24)),
        hours = Math.floor((t / (1000*60*60) % 24)),
        minutes = Math.floor((t/1000/60) % 60),
        seconds = Math.floor((t/1000) %60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock (selector, endtime){
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');
    let timeInterval = setInterval(updateClock, 1000);
    updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //modal

    const openModal = document.querySelectorAll('[data-modal]'),
    theModal = document.querySelector('.modal');

    function showModal (){
    theModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
    }
    
    function hideModal(){
        theModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    openModal.forEach((elem) => elem.addEventListener('click', showModal));



    theModal.addEventListener('click', (e)=> {
        if (e.target === theModal || e.target.getAttribute('data-close') === '') {
            hideModal(theModal);
        document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (event)=> {
        if(event.code === 'Escape' && theModal.style.display === 'block'){
            hideModal(theModal);
            document.body.style.overflow = '';
        }
    });

    const modalTimerId = setTimeout(showModal, 5000);

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
    }}

    window.addEventListener('scroll', showModalByScroll);

    //classes for cards

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH(){
            this.price = this.price * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));

            if(this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
            element.innerHTML = ` 
                                    <img src="${this.src}" alt="${this.alt}">
                                    <h3 class="menu__item-subtitle">${this.title}</h3>
                                    <div class="menu__item-descr">${this.descr}</div>
                                    <div class="menu__item-divider"></div>
                                    <div class="menu__item-price">
                                    <div class="menu__item-cost">Цена:</div>
                                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>`;
            }
            this.parent.append(element);
        }
    }

    new MenuCard(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'img/tabs/elite.jpg',
        'elite',
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item',
        'big'
    ).render();

    new MenuCard(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render();

    //forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: "success, we'll write back soon",
        fail: "something went wrong"
    }

    forms.forEach(item => {
        postData(item);
    })

    function postData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(object),
            })
                .then((response) => {
                    console.log(response);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.fail);
                })
            .finally(()=>{
                form.reset();
            });
        });
    }
            function showThanksModal(message) {
                const prevModalDialog = document.querySelector('.modal__dialog');
                prevModalDialog.classList.add('hide');
                showModal();

                const thanksModal = document.createElement('div');
                thanksModal.classList.add('modal__dialog');
                thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
        </div>
        `;

                document.querySelector('.modal').append(thanksModal);
                setTimeout(() => {
                    prevModalDialog.classList.remove('hide');
                    prevModalDialog.classList.add('show');
                    thanksModal.remove();
                    prevModalDialog.classList.remove('hide');
                    hideModal();
                }, 4000);
            }
        });