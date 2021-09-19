<!-- <div class="disqus-container" >
        <div class="disqus-content">
            <?php if (is_subscribed_to_any_memberful_plan(get_current_user_id()) || current_user_can('editor') || current_user_can('administrator')) {?>
                <div id="story-<?php the_ID();?>" class="story-<?php the_ID();?> disq-init"></div>
                <div id="load-<?php the_ID();?>" class="comments-area modal" onclick="disqHandler('<?= $post->ID ?>', '<?= $link ?>', '<?= $post->ID ?> <?= $post->guid ?>', );"> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                    <h4>Comments</h4>
                </div>
                <div id="close-<?php the_ID();?>" class="comments-area modal disq-init" onclick="disqHandler('<?= $post->ID ?>', '<?= $link ?>', '<?= $post->ID ?> <?= $post->guid ?>', );"> 
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z"/></svg>
                    <h4>Close Comments</h4>
                </div>
            <?php
                } else {
                    get_template_part('template-parts/elsewhere-comment-blocked');
                }; ?>
        </div>
    </div>
</div> -->