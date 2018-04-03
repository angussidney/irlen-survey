$(document).ready(function() {
    var mappings = {
        '#DCE6F2': '#grey',
        '#9AB8FC': '#blue',
        '#AAF2A0': '#green',
        '#FFFF8F': '#yellow',
        '#BF95DF': '#purple',
        '#E3B0AF': '#red'
    };
    var currentColour = localStorage.getItem('bg');
    $('body').css('background', currentColour);
    $(mappings[currentColour]).toggleClass('selected');

    $("#grey").click(function () {
        $('body').css('background', '#DCE6F2');
        localStorage.setItem('bg', '#DCE6F2');
        $(mappings[currentColour]).toggleClass('selected');
        $("#grey").toggleClass('selected');
        currentColour = '#DCE6F2';
    });
    $("#blue").click(function () {
        $('body').css('background', '#9AB8FC');
        localStorage.setItem('bg', '#9AB8FC');
        $(mappings[currentColour]).toggleClass('selected');
        $("#blue").toggleClass('selected');
        currentColour = '#9AB8FC';
    });
    $("#green").click(function () {
        $('body').css('background', '#AAF2A0');
        localStorage.setItem('bg', '#AAF2A0');
        $(mappings[currentColour]).toggleClass('selected');
        $("#green").toggleClass('selected');
        currentColour = '#AAF2A0';
    });
    $("#yellow").click(function () {
        $('body').css('background', '#FFFF8F');
        localStorage.setItem('bg', '#FFFF8F');
        $(mappings[currentColour]).toggleClass('selected');
        $("#yellow").toggleClass('selected');
        currentColour = '#FFFF8F';
    });
    $("#purple").click(function () {
        $('body').css('background', '#BF95DF');
        localStorage.setItem('bg', '#BF95DF');
        $(mappings[currentColour]).toggleClass('selected');
        $("#purple").toggleClass('selected');
        currentColour = '#BF95DF';
    });
    $("#red").click(function () {
        $('body').css('background', '#E3B0AF');
        localStorage.setItem('bg', '#E3B0AF');
        $(mappings[currentColour]).toggleClass('selected');
        $("#red").toggleClass('selected');
        currentColour = '#E3B0AF';
    });
});

function outputUpdateAge(value) {
    if (value == 4) {
        $('#age-output').val('4-');
    } else if (value == 12) {
        $('#age-output').val('12+');
    } else {
        $('#age-output').val(value);
    }
}

function outputUpdateHome(value) {
    if (value == 30) {
        $('#home-output').val('30+');
    } else {
        $('#home-output').val(value);
    }
}

function outputUpdateSchool(value) {
    if (value == 30) {
        $('#school-output').val('30+');
    } else {
        $('#school-output').val(value);
    }
}