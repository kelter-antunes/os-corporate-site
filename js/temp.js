$(document).ready(function() {
    $('#" + searchQueryHolder.Id + "').html($.hashParams().stq);

    if ($.queryParams().tag !== '') {
        if ($.hashParams().stq !== '') {
            $('#" + queryAndTag.Id + "').show();
        } else {
            $('#" + onlyTag.Id + "').show();
        }

    }
});