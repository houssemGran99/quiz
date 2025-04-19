document.addEventListener('DOMContentLoaded', () => {
  // Select all hexagons and popup elements
  const hexagons = document.querySelectorAll('.hexagon');
  const popup = document.getElementById('popup');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('closePopupButton');
  const questionText = document.getElementById('question');

  // Sample questions for each hexagon (you can customize these)
  const questions = {
    'q-1': 'ما هو لون السماء في يوم مشمس؟',
    'q-2': 'ما هو 2 + 2؟',
    'q-3': 'ما هو الحيوان الذي يعيش في البحر وله ثمانية أذرع؟',
    'lesson': 'العبرة: التعلم ممتع ومليء بالمفاجآت!'
  };

  // Add click event listener to each hexagon
  hexagons.forEach(hexagon => {
    hexagon.addEventListener('click', () => {
      // Set the question text based on the hexagon's ID
      questionText.textContent = questions[hexagon.id] || 'لا يوجد سؤال متاح';
      // Show popup and overlay
      popup.style.display = 'block';
      popupOverlay.style.display = 'block';
    });
  });

  // Close popup when the close button is clicked
  closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });

  // Close popup when clicking outside the popup (on the overlay)
  popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });
});


document.querySelectorAll('.hexagon').forEach(hex => {
  hex.addEventListener('click', () => {
    document.getElementById('popup-overlay').style.display = 'block';
    const popup = document.getElementById('popup');
    popup.classList.add('show');
  });
});

document.getElementById('closePopupButton').addEventListener('click', () => {
  document.getElementById('popup-overlay').style.display = 'none';
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
});