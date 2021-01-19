function modal () {
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
}

module.exports = modal;