/////////////////////////////////////////////////////////////////////////
function hideContactBlock() {
    $('.hiden-contact-form').slideToggle(600);
    $('.hiden-contact-form_main-block textarea').val("");
};

$('.hide-contact-btn').on('click', hideContactBlock);
//Функція і обробник івентів для прихованного меню для зворотнього звязку

/////////////////////////////////////////////////////////////////
function hideServiceBlock() {
    $('.hiden-services').css({
        'display': 'flex'
    });
    $('.services-main_block').css({
        'border-radius': '0 0 15px 15px',
    });
};

$('.btn-for-services').on('click', hideServiceBlock);
//Блок який відображає на сайті додатковий блок в секції сервиси

///////////
function showLandingContactBlock () {
    $('.hiden-contact-form').slideToggle(600);
    $('.hiden-contact-form_main-block textarea').val("Мені потрібен Лендінг. Зв'яжіться зі мною найближчим часом");
};

$('#lending-button').on('click', showLandingContactBlock);
// Лендінг

///////////////////
function showIMContactBlock () {
    $('.hiden-contact-form').slideToggle(600);
    $('.hiden-contact-form_main-block textarea').val("Мені потрібен Інтернет магазин. Зв'яжіться зі мною найближчим часом");
};

$('#internet-shop-button').on('click', showIMContactBlock);
// Інтернет магазин

/////////////////////
function showCorporationContactBlock () {
    $('.hiden-contact-form').slideToggle(600);
    $('.hiden-contact-form_main-block textarea').val("Мені потрібен Корпоративний сайт. Зв'яжіться зі мною найближчим часом");
};

$('#korporation-button').on('click', showCorporationContactBlock);
// корпораьтвний сайт