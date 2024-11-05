document.getElementById('btn-tr').addEventListener('click', function() {
    const lastNameInput = document.getElementById('last_name');
    const firstNameInput = document.getElementById('first_name');

    if (lastNameInput.innerText === 'Митюк' && firstNameInput.innerText === 'Михаил') {
        lastNameInput.innerText = 'Mityuk';
        firstNameInput.innerText = 'Mikhail';
    } else if (lastNameInput.innerText === 'Mityuk' && firstNameInput.innerText === 'Mikhail') {
        lastNameInput.innerText = 'Митюк';
        firstNameInput.innerText = 'Михаил';
    }
});