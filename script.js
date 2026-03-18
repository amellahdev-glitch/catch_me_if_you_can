// get the elements
const movingButton = document.getElementById('no-btn');
const yesButton = document.getElementById('yes-btn');


movingButton.style.position = 'absolute';
yesButton.style.position = "absolute";
yesButton.style.marginRight = "70px";
movingButton.style.marginLeft = "70px";



// add event listener to the button
movingButton.addEventListener('click', function () {
    let randomX = Math.random() * 80
    let randomY = Math.random() * 80
    setTimeout(() => {
        movingButton.style.left = randomX + 'vw'
        movingButton.style.top = randomY + 'vh'
    }, 100);
})

yesButton.addEventListener('click', function () {
    alert('I knew you would say yes! 😊')
});