$(document).ready(function() {
    var left, top, padding;
    var text = "", textSet = false;
    var offset = 150;
    var duration = 300;

    /* This for applying the selected class for left nav menu for Tutorial*/
    var completeURL, url, pageName;
    completeURL = $(location).attr('href');
    if (completeURL.length > 0) {
        url = completeURL.split('pskills.org/');
        if(url[1].indexOf("?") != -1){
            pageName = "/"+url[1].substr(0,url[1].indexOf("?"));
        }else{
            pageName = "/"+url[url.length - 1];
        }
        var currentNavMenu = $('.list-group a[href="' + pageName + '"]')
        currentNavMenu.addClass('active-nav');

        if (currentNavMenu.prev().hasClass('list-group-item')) {
            $('#prev').attr('href', currentNavMenu.prev().attr('href'));
        } else {
            $('#prev').hide();
        }
        if (currentNavMenu.next().hasClass('list-group-item')) {
            $('#next').attr('href', currentNavMenu.next().attr('href'));
        } else {
            $('#next').hide();
        }
    }
    //end of nav menu selection 

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $("#menu-bar").addClass("topMenuDyanmic");
            $('#attempt-details').css('top', '45px');
            $('#refresh-msgId').css('top', '45px');
        } else {
            $("#menu-bar").removeClass("topMenuDyanmic");
            $('#attempt-details').css('top', '168px');
            $('#refresh-msgId').css('top', '168px');
        }
    });

    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    $("#post-button").click(function() {
        $("#jason").toggle();
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
    var assignTopLeftToBox = function(currentId) {

        switch (currentId) {
            case "box-1":
                top = "15%";
                padding = "7.5% 0";
                text = "take new chanlenges";
                break;

            case "box-2":
                left = "10%";
                top = "15%";
                padding = "7.5% 0";
                text = "learn in better way";
                break;

            case "box-3":
                left = "0%";
                top = "15%";
                text = "find a solutions of real time problems";
                break;

            case "box-4":
                left = "15%";
                top = "15%";
                text = "frequently asked question in prorammings";
                break;

            case "box-5":
                left = "9%";
                top = "15%";
                text = "download books and s/w here";
                break;

            case "box-6":
                left = "14%";
                top = "15%";
                text = "get ready for interview";
                break;

            default:
                break;
        }
    };

    $('div[id^="box-"]').mouseenter(function() {
        $(this).find('div').remove();
        assignTopLeftToBox($(this).attr('id'));
        var that = $(this);
        $(this).find('span').animate({
            left: "-=" + left
        }, 500, function() {
            // Animation complete.
            that.find('div').remove();
        }).animate({
            position: 'relative',
            top: "-=" + top
        }, 500, function() {
            //$(this).parent().css("padding",padding);
            // Animation complete.
            if (!textSet)
                that.append('<div class="subBoxText">' + text + '</div>');
            textSet = true;
        });
    });

    $('div[id^="box-"]').mouseleave(function() {
        var that = $(this);
        assignTopLeftToBox($(this).attr('id'));
        $(this).find('span').animate({
            left: "+=" + left
        }, 10, function() {
            // Animation complete.
            that.find('div').remove();
            textSet = false;
        }).animate({
            top: "+=" + top
        }, 10, function() {
            // Animation complete.
            that.find('div').remove();
            textSet = false;
        });
    });

    var attempt_question = [], unattempt_question = [];
    var removeIdFromArray, addIdInToArray, updateStatusView;

    $('.online-test').each(function() {
        var defaultQuestionsText = $(this).children().find('a').text();
        var allQuestion = defaultQuestionsText.substr(0, defaultQuestionsText.indexOf(':'));
        unattempt_question.push($.trim(allQuestion));
    });

    removeIdFromArray = function(removeQuestion) {
        for (defaultArrIndex in unattempt_question) {
            if (unattempt_question[defaultArrIndex] === removeQuestion)
                unattempt_question.splice(defaultArrIndex, 1);
        }
    };

    addIdInToArray = function(addQuestion) {
        findStatusOfShowId = $.inArray(addQuestion, attempt_question);
        if (findStatusOfShowId === -1) {
            attempt_question.push(addQuestion);
        }
    };

    updateStatusView = function(attemptarr, unattemptarr) {

        $('#attempt ul').empty();
        $('#un-attempt ul').empty();
        //attemptarr.sort();
        for (var atpIndex = 0; atpIndex < attemptarr.length; atpIndex++) {
            var tempId = attemptarr[atpIndex].toLowerCase().replace(/\s/g, '');
            $('#atmpt').append('<li><a style="text-decoration: none !important;" href="#' + tempId.substr(0, 4) + parseInt(parseInt(tempId.substr(4, tempId.length - 4)) - 1) + '">' + attemptarr[atpIndex] + '</a></li>');
        }

        for (var unatpIndex = 0; unatpIndex < unattemptarr.length; unatpIndex++) {
            var tempId = unattemptarr[unatpIndex].toLowerCase().replace(/\s/g, '');
            $('#unatmpt').append('<li><a style="text-decoration: none !important;" href="#' + tempId.substr(0, 4) + parseInt(parseInt(tempId.substr(4, tempId.length - 4)) - 1) + '">' + unattemptarr[unatpIndex] + '</a></li>');
        }

        $('#atmt-header').empty().append('Attempted Questions : ' + attemptarr.length);
        $('#unatmt-header').empty().append('Un-Attempted Questions : ' + unattemptarr.length);
    };

    $('.online-test-options .input-group input').click(function() {
        var currentQuestionText, currentQuestion;
        currentQuestionText = $(this).parent().parent().parent().parent().parent().find('a').text();
        currentQuestion = currentQuestionText.substr(0, currentQuestionText.indexOf(':'));
        //alert(currentQuestionText);
        removeIdFromArray($.trim(currentQuestion));
        addIdInToArray($.trim(currentQuestion));
        updateStatusView(attempt_question, unattempt_question);
        $('#attempt-details').show();
    });

    $('.discriptions').each(function() {
        if ($(this).text().split('Description :')[1].length === 47 || $(this).text().split('Description :')[1].length === 43) {
            $(this).hide();
        }
    });

});


$(window).on('resize', function() {
    if (window.matchMedia('(max-width: 981px)').matches) {
        $('#preLink').empty();
        $('#preLink').append('<a href="example.com/script.php">prev</a>');
    }
    else {
        $('#preLink').empty();
        $('#preLink').html('prev');
    }
});


//$('*[class^="box"]')