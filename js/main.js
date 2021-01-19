window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timing = require('./modules/timing'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider');
    tabs();
    modal();
    timing();
    cards();
    calc();
    forms();
    slider();
});