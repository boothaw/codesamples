global $wp_query;
wp_enqueue_script('load-more', get_template_directory_uri() . '/js/load-more.js', array(), '1.0.0', true);

wp_localize_script( 'load-more', 'load_more', array(
    'ajaxurl' => site_url() . '/wp-admin/admin-ajax.php',
    'posts' => json_encode( $wp_query->query_vars ),
    'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
    'nonce' => wp_create_nonce('load_more_nonce'),
) );

add_action('wp_ajax_load_more', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more', 'load_more_posts');

function load_more_posts() {

    if (!isset($_POST['nonce']) || !wp_verify_nonce($_POST['nonce'], 'load_more_nonce')) {
        exit;
    }

    $elsewhere_cat_id = get_cat_ID('elsewhere'); 
    $cat_name = $_POST['category'];
    $max = $_POST['max'];

    if ($cat_name == 'stabcinema') {
        $cat_name == 'cinema';
    } else {
        $cat_name == $_POST['category'];
    };

    $args = array(
        'posts_per_page' => 8,
        'category__not_in' => $elsewhere_cat_id,
        'category_name' => $cat_name,
        'paged' => $_POST['page'] + 1,
    );

    $lastposts = get_posts($args);

    if (!empty($lastposts)) {
        foreach ($lastposts as $post) :
            setup_postdata($post);

        $homeID = get_option('page_on_front');
        $title = get_the_title($post->ID);
        $categories = get_the_category($post->ID);
        $photo = get_the_post_thumbnail_url($post->ID);
        $categories = get_the_category($post->ID);
        $primary_cat = get_post_primary_category($post->ID);
        $lastmodified = get_the_date('M j, Y', $post->ID);
        $title = get_the_title($post->ID);
        $excerpt = get_the_excerpt($post->ID);
        $excerptResult = wp_trim_words($excerpt, 15);
        $link = get_permalink($post->ID);
        $type = get_field('post_type', $post->ID);
        $size = "small";
        $page = get_page_by_path($link);
        $author = get_the_author_meta('display_name', $post_ID->post_author);  
        $length = get_field('film_length', $post->ID);
        $length_enable = get_field('enable_film_length', $post->ID);    
        ?>

                <div class="load__more-function">
                    <a class="__article-card--horizontal" href="<?php echo $link ?>">
                        <div class="__article-card--horizontal--thumbnail"
                            style="background-image: url(<?php echo $photo; ?>)">
                            <div class="img__tag-container">
                                <?php if (strtoupper($primary_cat) == 'CINEMA' && $type == 'Premium' &&  $length_enable == 'Enable') { ?>
                                        <img class="premium__label"
                                            src="<?php echo get_template_directory_uri(); ?>/assets/premo.png">
                                        <div class="cinema-duration">
                                            <p><?php echo $length ?></p>
                                        </div>
                                <?php } else { ?>
                                    <?php if ($type == 'Premium') { ?>
                                        <img class="premium__label"
                                            src="<?php echo get_template_directory_uri(); ?>/assets/premo.png">
                                    <?php } ?>
                                    <?php if (strtoupper($primary_cat) == 'CINEMA' && $length_enable == 'Enable') { ?>
                                        <div class="cinema-duration">
                                            <p><?php echo $length ?></p>
                                        </div>
                                <?php } } ?>
                            </div>
                        </div>
                        <div class="__article-card--horizontal--content">
                            <div>
                                <h2 class="editorial-title small">
                                    <?php echo $title; ?>
                                </h2>
                                <div class="category__container">
                                    <label class="category__label <?php echo $size; ?>">
                                        By
                                        <span class="category__label">
                                            <?php echo $author; ?>
                                        </span>
                                        /
                                        <span class="category--<?php echo $categories[0]->name; ?>">
                                            <?php echo get_post_primary_category($post->ID); ?>
                                        </span>  
                                    </label>
                                </div>
                                <p class="editorial-excerpt">
                                    <?php echo $excerptResult; ?>
                                </p>
                            </div>
                            <div class="category__label <?php echo $size; ?> comment-count">
                                <img class="comment-count__logo"
                                        src="<?php echo get_template_directory_uri(); ?>/assets/comment.png">
                                <span class="disqus-comment-count" data-disqus-url="<?php echo $link; ?>"></span>
                                <span><?php echo $lastmodified; ?></span>
                            </div>
                        </div>
                    </a>
                </div>

             <script>
                window && DISQUSWIDGETS.getCount({reset: true});
            </script>

        <?php
        endforeach;
        wp_reset_postdata();
        die();
    } 
}