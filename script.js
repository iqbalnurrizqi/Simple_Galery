const container = document.querySelector('.container')
const jumbo = document.querySelector('.jumbo')
const thumb = document.querySelectorAll('thumb')

container.addEventListener('click', function(e) {
    if (e.target.className == 'thumb' ) {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500)

        if( thumb.classList.contains('active') ) {
            thumb.classList.remove('active')

            thumb.classList = 'thumb';
        }

    e.targer.classList.add('active')
    }
})