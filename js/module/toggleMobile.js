export default function ToggleMobile() {

    document.querySelector('.toggle_mobile').addEventListener('click', function() {
        document.querySelector('.menu_primary').classList.toggle('active');
        // $('.overlay').classList.toggle('active');
        document.querySelector('.toggle_mobile').classList.toggle('active');
    })
}