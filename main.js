document.addEventListener('DOMContentLoaded', function () {
    const specialtiesData = ['Dermatólogo', 'Dentista', 'Nutricionista', 'Gastroenterólogo', 'Laboratorio', 'Médico Clínico', 'Ginecólogo'];

    const specialtiesList = document.getElementById('specialtiesList');
    const specialtySelect = document.getElementById('specialty');

    specialtiesData.forEach(specialty => {
        const listItem = document.createElement('li');
        listItem.textContent = specialty;
        specialtiesList.appendChild(listItem);

        const option = document.createElement('option');
        option.value = specialty;
        option.textContent = specialty;
        specialtySelect.appendChild(option);
    });

    const scheduleButton = document.getElementById('scheduleButton');
    scheduleButton.addEventListener('click', scheduleAppointment);

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearAppointments);
});

function scheduleAppointment() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const specialty = document.getElementById('specialty').value;
    const date = document.getElementById('date').value;

    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate <= currentDate) {
        alert('Por favor, elija una fecha posterior a la fecha actual.');
        return;
    }

    const appointment = {
        name: name,
        surname: surname,
        email: email,
        specialty: specialty,
        date: date
    };

    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    alert(`Turno solicitado para ${name} ${surname} en la especialidad de ${specialty}, el ${date}.`);
}

function clearAppointments() {
    localStorage.removeItem('appointments');
    alert('La agenda ha sido vaciada correctamente.');
}
