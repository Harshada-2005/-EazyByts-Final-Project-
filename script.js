let currentEvent = {};

function goTo(section) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(section).classList.add('active');

  if (section === 'dashboard') loadBookings();
}

function showEvent(title, desc) {
  currentEvent = { title, desc };
  document.getElementById('eventTitle').textContent = title;
  document.getElementById('eventDesc').textContent = desc;
  goTo('eventDetail');
}

function bookEvent() {
  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  bookings.push(currentEvent);
  localStorage.setItem('bookings', JSON.stringify(bookings));
  alert('🎫 Booking Confirmed!');
  goTo('dashboard');
}

function loadBookings() {
  const bookingList = document.getElementById('bookingList');
  bookingList.innerHTML = '';
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  if (bookings.length === 0) {
    bookingList.innerHTML = '<li>No bookings yet. Go book one!</li>';
    return;
  }

  bookings.forEach(event => {
    const li = document.createElement('li');
    li.textContent = `${event.title} - ${event.desc}`;
    bookingList.appendChild(li);
  });
}
