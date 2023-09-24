
// ELEMENTS

const buttonFree = document.getElementById('button-free');
const buttonPro = document.getElementById('button-pro');
const buttonEnterprise = document.getElementById('button-enterprise');

const componentFree = document.getElementById('component-free');
const componentPro = document.getElementById('component-pro');
const componentEnterprise = document.getElementById('component-enterprise');

const sliderUsers = document.getElementById('slider-users');
const labelUsers = document.getElementById('label-users');
const price = document.getElementById('price');


// EVENTS

buttonFree.addEventListener('click', function () {
    $('#exampleModal').modal('show'); // Show the modal
});
buttonPro.addEventListener('click', function () {
    $('#exampleModal').modal('show'); // Show the modal
});
buttonEnterprise.addEventListener('click', function () {
    $('#exampleModal').modal('show'); // Show the modal
});


sliderUsers.addEventListener('change', function () {
    const sliderValue = this.value;
    
    
    if(this.value >=0 && this.value <= 10){
        document.getElementById('price').innerHTML = `Recomended Free plan for ${sliderValue} users`;
        componentFree.classList.add('highlighted');

        componentPro.classList.remove('highlighted');
        componentEnterprise.classList.remove('highlighted');

    } else if(sliderValue > 10 && sliderValue <= 20){
        document.getElementById('price').innerHTML = `Recommended Pro plan for ${sliderValue} users`;
        componentPro.classList.add('highlighted');

        componentFree.classList.remove('highlighted');
        componentEnterprise.classList.remove('highlighted');

        
    } else if(sliderValue > 20){
        document.getElementById('price').innerHTML = `Recommended Enterprise plan for ${sliderValue} users`;
        componentEnterprise.classList.add('highlighted');

        componentFree.classList.remove('highlighted');
        componentPro.classList.remove('highlighted');
    }   

});