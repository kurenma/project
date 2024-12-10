
    document.addEventListener("DOMContentLoaded", function() {
        const sortButtonAsc = document.getElementById('sortAsc');
        const sortButtonDesc = document.getElementById('sortDesc');
        
        sortButtonAsc.classList.add('active');

        function sortEvents(order) {
            const events = Array.from(document.querySelectorAll('.soon__first, .soon__second'));
            const eventsContainer = document.querySelector('.events-container');

            events.sort((a, b) => {
                const dateA = new Date(a.querySelector('input[name="date"]').value);
                const dateB = new Date(b.querySelector('input[name="date"]').value);
                
                return order === 'asc' ? dateA - dateB : dateB - dateA;
            });

            eventsContainer.innerHTML = '';
            events.forEach(event => eventsContainer.appendChild(event));
        }

        sortButtonAsc.addEventListener('click', () => {
            sortEvents('asc');
            sortButtonAsc.classList.add('active');
            sortButtonDesc.classList.remove('active');
        });
    

        sortButtonDesc.addEventListener('click', () => {
            sortEvents('desc');
            sortButtonDesc.classList.add('active');
            sortButtonAsc.classList.remove('active');
        });

    });
