$(function() {

    $('a.menu').hover(function(){
        $(this).animate({
            color: "#fff",
            backgroundColor: "#3D311B"
        }, '1000');
    });
    $('a.menu').mouseleave(function(){
        $(this).animate({
            color: "#3D311B;",
            backgroundColor: "#e2d8ba"
        }, 'fast');
    });

    $('#rsvp-confirm').hover(function(){
        $(this).animate({
            backgroundColor: '#3E2D24',
            color: '#fff'
        }, '1000');
    });
    $('#rsvp-confirm').mouseleave(function(){
        $(this).animate({
            backgroundColor: '#BEB79A',
            color: '#fff'
        }, 'fast');
    });


    $('#rsvp').submit(function(e) {
        e.preventDefault();
    });

    $('#counter').text(updateCounter());
    $('#rsvp').validate();

    $('#rsvp input.sub_button').click(function() {
        var isValid = true;
        if(!$('input[name=name]').valid()) {
            isValid = false;
        }
        var name = $('input[name=name]').val();
        if(!$('input[name=email]').valid()) {
            isValid = false;
        }
        var email = $('input[name=email]').val();
        if(!$('input[name=attending]').valid()) {
            isValid = false;
        }
        var attending = $('input[name=attending]:checked').val();
        if(!$('input[name=guests]').valid()) {
            isValid = false;
        }
        var guests = $('input[name=guests]').val();
        
        var comments = $('textarea[name=comments]').val();
        if (isValid) {
            var dataString = 'name=' + name +
                    '&email=' + email +
                    '&attending=' + attending +
                    '&guests=' + guests +
                    '&comments=' + comments;
            $.ajax({
                type: 'POST',
                url: 'submitrsvp.php',
                data: dataString,
                success: function(data) {
                    var json = JSON.parse(data);
                    $('#rsvp').slideUp("slow", function(){                        
                        $('#rsvp-msg').slideDown("slow", function(){
                            $('#rsvp-msg').html(json.msg);
                        });    
                    });
                    
                }
            });
        } else {
            $('#rsvp').validate();
        }
    });
});

Date.prototype.getDOY = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
};

function updateCounter() {
    var today = new Date();
    var daynum = today.getDOY();
    var targetDate = new Date("September 28, 2013 00:00:00");
    var targetDateDayNum = targetDate.getDOY();
    return (targetDateDayNum - daynum) + 1;
}