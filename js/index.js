// JavaScript source code
$(function () {
    var box = $('#box');
    var container = $('#container');
    var blockNav = $('#block-nav');
    var a = $('.a');
    var b = $('.b');
    var navIntro = $('#nav-intro');
    var navSkill = $('#nav-skill');
    var navWorkEXP = $('#nav-workEXP');
    var navPrjEXP = $('#nav-prjEXP');
    var navWantMore = $('#nav-wantMore');

    navIntro.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = 0;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    navSkill.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = -oW;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    navWorkEXP.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = -oW * 2;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    navPrjEXP.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = -oW * 3;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    navWantMore.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = -oW * 4;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });

    $(window).on('load', getWidth());
    $(window).resize(getWidth);
    function getWidth() {
        var oW = $(window).width() + 'px';
        var oW2 = $(window).width() * 5 + 'px';

        box.css('width', oW);
        container.css('width', oW2);
        blockNav.css('width', oW);
        a.css('width', oW);
    }
    var prev = $('#prev');
    var next = $('#next');
    next.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = container.offset().left - oW;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    prev.on('click', function () {
        if (!container.is(":animated")) {
            var oW = $(window).width();
            var left = container.offset().left + oW;
            container.animate({ 'left': left + 'px' }, 500);
            checkP(left);
        }
    });
    function checkP(e) {
        var oW = $(window).width();
        if (e >= 0) {
            prev.css('display', 'none');
        }
        if (e < 0) {
            prev.css('display', 'block');
        }
        if (e == -oW * 4) {
            next.css('display', 'none');
        }
        else {
            next.css('display', 'block');
        }
    }
    checkP(container.offset().left);
})