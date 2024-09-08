document.getElementById('btnPost').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('postModal'));
    myModal.show();
});

document.getElementById('btnIdioma').addEventListener('click', function() {
    // Obtener los valores seleccionados de los select
    const idiomaSeleccionado = document.getElementById('idioma').value;
    const nivelSeleccionado = document.getElementById('nivel').value;

    // Crear el nuevo div con el HTML especificado
    const newDiv = document.createElement('div');
    newDiv.className = 'px-4 py-4';
    newDiv.style.backgroundColor = '#E7F3FE';
    newDiv.style.borderRadius = '10px';
    newDiv.innerHTML = `
        <p class="fw-bold mb-1" style="color: #1a4282;">Idioma</p>
        <p>${idiomaSeleccionado || 'No seleccionado'}</p>
        <hr>
        <p class="fw-bold mb-1" style="color: #1a4282;">Nivel</p>
        <p>${nivelSeleccionado || 'No seleccionado'}</p>
        <hr>
        <div class="d-flex align-items-center row">
            <div class="col-6">
                <button class="btn btn-light w-100" style="color: #1a4282; letter-spacing: 0.1rem; font-weight: 500;">
                    ELIMINAR
                </button>
            </div>
            
            <div class="col-6">
                <button class="btn btn-light w-100" style="color: #1a4282; letter-spacing: 0.1rem; font-weight: 500;">
                    EDITAR
                </button>
            </div>
        </div>
    `;

    // Agregar el nuevo div al contenedor
    document.getElementById('idiomasContainer').appendChild(newDiv);

    const buttons = newDiv.querySelectorAll('button.btn-light');

    // Añadir eventos a los botones dentro del nuevo div
    buttons[0].addEventListener('click', function(e) {
        e.preventDefault();
        newDiv.remove(); // Elimina el div
    });

    buttons[1].addEventListener('click', function(e) {
        e.preventDefault()
        // Obtener los valores del div
        const idioma = newDiv.querySelectorAll('p')[1].textContent;
        const nivel = newDiv.querySelectorAll('p')[3].textContent;

        // Eliminar el div
        newDiv.remove();
        
        // Rellenar los campos con los datos obtenidos
        document.getElementById('idioma').value = idioma;
        document.getElementById('nivel').value = nivel;
    });
    
    document.getElementById('idioma').value = "";
    document.getElementById('nivel').value = "";
});

document.getElementById('btnExp').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const empresa = document.getElementById('empresa').value;
    const cargo = document.getElementById('cargo').value;
    const desde = document.getElementById('desde').value;
    const hasta = document.getElementById('hasta').value;

    // Crear el nuevo div con el HTML especificado
    const newDiv = document.createElement('div');
    newDiv.className = 'px-4 py-4';
    newDiv.style.backgroundColor = '#E7F3FE';
    newDiv.style.borderRadius = '10px';
    newDiv.innerHTML = `
        <p class="fw-bold mb-1" style="color: #1a4282;">Empresa</p>
        <p>${empresa || 'No especificada'}</p>
        <hr>
        <p class="fw-bold mb-1" style="color: #1a4282;">Cargo</p>
        <p>${cargo || 'No especificado'}</p>
        <hr>
        <p class="fw-bold mb-1" style="color: #1a4282;">Desde</p>
        <p>${desde || 'No especificada'}</p>
        <hr>
        <p class="fw-bold mb-1" style="color: #1a4282;">Hasta</p>
        <p>${hasta || 'No especificada'}</p>
        <hr>
        <div class="d-flex align-items-center row">
            <div class="col-6">
                <button class="btn btn-light w-100" style="color: #1a4282; letter-spacing: 0.1rem; font-weight: 500;">
                    ELIMINAR
                </button>
            </div>
            
            <div class="col-6">
                <button class="btn btn-light w-100" style="color: #1a4282; letter-spacing: 0.1rem; font-weight: 500;">
                    EDITAR
                </button>
            </div>
        </div>
    `;

    // Agregar el nuevo div al contenedor
    document.getElementById('expContainer').appendChild(newDiv);

    const buttons = newDiv.querySelectorAll('button.btn-light');

    // Añadir eventos a los botones dentro del nuevo div
    buttons[0].addEventListener('click', function(e) {
        e.preventDefault();
        newDiv.remove(); // Elimina el div
    });

    buttons[1].addEventListener('click', function(e) {
        e.preventDefault();
        // Obtener los valores del div
        const empresaText = newDiv.querySelectorAll('p')[1].textContent;
        const cargoText = newDiv.querySelectorAll('p')[3].textContent;
        const desdeText = newDiv.querySelectorAll('p')[5].textContent;
        const hastaText = newDiv.querySelectorAll('p')[7].textContent;

        // Eliminar el div
        newDiv.remove();
        
        // Rellenar los campos con los datos obtenidos
        document.getElementById('empresa').value = empresaText;
        document.getElementById('cargo').value = cargoText;
        document.getElementById('desde').value = desdeText;
        document.getElementById('hasta').value = hastaText;
    });

    // Limpiar los campos después de agregar el nuevo div
    document.getElementById('empresa').value = "";
    document.getElementById('cargo').value = "";
    document.getElementById('desde').value = "";
    document.getElementById('hasta').value = "";
});
