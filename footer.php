<!-- <script>
function disqHandler(postId, link, disqId) {
    var loadId = document.getElementById("load-"+postId);
    var closeId = document.getElementById("close-"+postId);
    var storyId = document.getElementById("story-"+postId);
    var disq = document.getElementsByClassName("disqus_thread");
    var disqId = disqId;
    var url = link;
    var id = postId;

    storyId.classList.toggle("disq-expanded");

    if (storyId.classList.contains("disq-expanded")){
        loadId.classList.toggle("disq-init");
        closeId.classList.toggle("disq-init");

            loadDisqus(url, id, storyId ,disqId);

    } else {
        loadId.classList.toggle("disq-init");
        closeId.classList.toggle("disq-init");
    }
};

function loadDisqus(url, id, storyId, disqId, disq){
    var disqus_shortname = 'stabmag';
    var disqus_identifier = disqId;
    var disqus_url = url;

    if (window.DISQUS) {
        jQuery('#disqus_thread').appendTo(storyId); // append the HTML to the control parent

        // if Disqus exists, call it's reset method with new parameters
        DISQUS.reset({
            reload: true,
            config: function() {
                this.page.identifier = disqus_identifier;
                this.page.url = disqus_url;
            }
        });
    } else {

        //insert a wrapper in HTML after the relevant "show comments" link
        jQuery('<div class="disqus_thread" id="disqus_thread"></div>').appendTo(storyId);
        disqus_identifier = disqId; // set the identifier argument
        disqus_url = url; // set the permalink argument

        // append the Disqus embed script to HTML
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
        jQuery('head').append(dsq);
    }
};
</script> -->