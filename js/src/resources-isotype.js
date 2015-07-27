var filterValueArray = new Array();
$(window).load(function() {

    // init Isotope
    var $container = $('.isotype-resource-cards').isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });


    // bind filter button-isotype click
    $('#filters').on('click', 'a', function() {
        var value = $(this).attr('data-filter');
        var index = filterValueArray.indexOf(value);

        if (index === -1) {
            filterValueArray.push(value);
        } else {
            filterValueArray.splice(index, 1);
        }

        filterValueArray = $.unique(filterValueArray);
        filterValue = filterValueArray.toString();

        $container.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on button-isotypes
    $('.button-isotype-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'a', function(e) {
            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('is-checked');
        });
    });
});