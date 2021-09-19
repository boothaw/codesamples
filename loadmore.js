$('#load-more').click(function(){

var button = $(this),
    data = {
        'action': 'load_more',
        'query': load_more.posts,
        'page' : load_more.current_page,
        'nonce': load_more.nonce,
        'category': '<?php echo $category_name ?>',
    };

    $.ajax({
        url : load_more.ajaxurl,
        data : data,
        type : 'POST',
        beforeSend : function ( xhr ) {
            button.text('Loading...');
        },
        success : function( data ){
            if( data && data !== '0' ) {

                //reset button text
                button.text( 'Load More' );

                //append new data
                $('.load-more-target').append(data);

                load_more.current_page++;

            } else {
                button.hide();
            }
        }
    });
});
