document.addEventListener('DOMContentLoaded', function () {
    const specialtiesData = ['Dermatólogo', 'Dentista', 'Nutricionista', 'Gastroenterólogo', 'Laboratorio', 'Médico Clínico', 'Ginecólogo'];

    const specialtiesList = document.getElementById('specialtiesList');
    specialtiesData.forEach(specialty => {
        const listItem = document.createElement('li');
        listItem.textContent = specialty;
        specialtiesList.appendChild(listItem);

        const specialtySelect = document.getElementById('specialty');
        const option = document.createElement('option');
        option.value = specialty;
        option.textContent = specialty;
        specialtySelect.appendChild(option);
    });
});

function scheduleAppointment() {
    const name = document.getElementById('name').value;
    const specialty = document.getElementById('specialty').value;
    const date = document.getElementById('date').value;

    const currentDate = new Date();
    const selectedDate = new Date(date);
    if (selectedDate <= currentDate) {
        alert('Por favor, elija una fecha posterior a la fecha actual.');
        return;
    }

    alert(`Turno solicitado para ${name} en la especialidad de ${specialty}, el ${date}.`);
}
