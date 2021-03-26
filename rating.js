const stars = document.querySelectorAll('.rating .star')
const note = document.querySelector('#note')

for (let index = 0; index < stars.length; index++) {
    const element = stars[index];
    element.addEventListener('click', () => {
        let prevElement = element.previousElementSibling;
        let nexElement = element.nextElementSibling
        while (prevElement != null) {
            prevElement.setAttribute('src', './star-filled.svg')
            prevElement = prevElement.previousElementSibling
        }
        while (nexElement != null) {
            nexElement.setAttribute('src', './star.svg')
            nexElement = nexElement.nextElementSibling
        }
        element.setAttribute('src', './star-filled.svg')
        note.value = index + 1
    })
}