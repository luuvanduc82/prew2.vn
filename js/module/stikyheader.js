export default function fixHeader() {
    window.addEventListener('scroll', function(e) {
        let value = e.target.documentElement.scrollTop;

        if (value > 100) {
            this.document.querySelector('.header').classList.add('transparent');
            this.document.querySelector('.social_contacts').classList.add('active');
            this.document.querySelector('.img_logo').src = "./assets/images/logo2.png";
        } else {
            this.document.querySelector('.header').classList.remove('transparent');
            this.document.querySelector('.social_contacts').classList.remove('active');
            this.document.querySelector('.img_logo').src = "./assets/images/Property 1=Default.png";
        }
    });
    //collapmenu
    var coll = document.getElementsByClassName("toggle_mobile ");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // this.classList.toggle("active");
            var content = document.querySelector('.menu_primary');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 10 + "px";
            }
        });
    }
}