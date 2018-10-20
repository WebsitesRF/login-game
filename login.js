stages = [];

stage1 = function() {
    actions = [];
    actions.push(() => $('#s1-b1').text('?'));
    actions.push(() => $('#s1-b2').text('?'));
    actions.push(() => $('#s1-b3').text('?'));
    actions.push(() => $('#s1-b4').val('?'));
    actions.push(() => $('#s1-b4').val('????????????????????????????????'));
    actions.push(() => {
        $('#s1-b5').removeClass('hide');
        $('#s1-b5').addClass('marquee');
    });
    actions.push(() => stage2());

    var element = $('#s1-b1');
    actionHandler(actions, element);
};

function stage2() {
    $('#target').html($('#s2').html());

    actions = [];
    actions.push(() => $('#s2-b1').css("font-size", "20px"));
    actions.push(() => $('#s2-b1').css("font-size", "40px"));
    actions.push(() => $('#s2-b1').css("font-size", "80px"));
    // actions.push(() => $('#s2-b1').addClass('page-center'));
    actions.push(() => $('#s2-b1').css("font-size", "160px"));
    actions.push(() => $('#s2-b1').css("font-size", "320px"));
    actions.push(() => {
        $("#s2-b1").removeClass('rotate');
        $("#s2-b1").addClass('square-slow');
    });
    actions.push(() => {
        $("#s2-b1").removeClass('square-slow');
        $("#s2-b1").addClass('square-med');
    });
    actions.push(() => {
        $("#s2-b1").removeClass('square-med');
        $("#s2-b1").addClass('square-fast');
    });
    actions.push(() => {
        $("#s2-b1").removeClass('square-fast');
        $("#s2-b1").addClass('square-light-speed');
    });
    actions.push(() => {
        $("#s2-b2").addClass('rotate');
    });
    actions.push(() => {
        $("#s2-b1").clone().appendTo('#s2-b2');
    });
    actions.push(() => stage3());

    actionHandler(actions, $('#s2-b1'));
}

function stage3() {
    $('#target').html($('#s3').html());

    $('#s3-b1').change(function() {
        var value = $('#s3-b1').val();
        if (value == 100) {
            stage4();
        }
    });
}

function stage4() {
    $('#target').html($('#s4').html());
}

function actionHandler(actions, $element) {
    var clicks = 0;

    $element.off().on('click', function(event) {
        event.preventDefault();
        actions[clicks]();
        if (clicks == actions.length-1) {
            $element.off();
        }
        clicks++;
    });
}

// setup
$(document).ready(function() {
    $('#s1-b1').click(function(event) {
        event.preventDefault();
        stage1();
    });

    var text = "";
    for (var i = 0; i < 20; i++) {
        text += "??????????????";
    }
    var output = "";
    for (i = 0; i < 60; i++) {
        output += text + "\n";
    }

    $('#s1-b5').text(output);
});
