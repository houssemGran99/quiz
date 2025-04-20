document.addEventListener('DOMContentLoaded', () => {
  // Select all hexagons and popup elements
  const hexagons = document.querySelectorAll('.hexagon');
  const popup = document.getElementById('popup');
  const popupOverlay = document.getElementById('popup-overlay');
  const closePopupButton = document.getElementById('closePopupButton');
  const questionText = document.getElementById('question');
  const loadingDiv = document.getElementById('loading');
  const errorDiv = document.getElementById('error');
  const hexagonContainer = document.getElementById('hexagon-container');

  // Show loading state
  loadingDiv.style.display = 'block';

  // Function to fetch labels from the backend
  async function fetchLabels() {
    try {
      const response = await fetch('http://vps-d19efc6b.vps.ovh.net:3000/api/labels');
      const labels = await response.json();
      if (labels.length === 0) {
        console.error('No labels found');
        return null;
      }
      // Randomly select one label document
      const randomLabel = labels[Math.floor(Math.random() * labels.length)];
      return randomLabel;
    } catch (error) {
      console.error('Error fetching labels:', error);
      return null;
    }
  }

  // Initialize questions from backend data
  async function initializeQuestions() {
    const labelData = await fetchLabels();
    loadingDiv.style.display = 'none';

    return {
      'q-1': labelData.label1 || 'لا يوجد سؤال متاح',
      'q-2': labelData.label2 || 'لا يوجد سؤال متاح',
      'q-3': labelData.label3 || 'لا يوجد سؤال متاح',
      'lesson': labelData.lesson || 'لا يوجد درس متاح'
    };
  }

  // Load questions and set up event listeners
  initializeQuestions().then(questions => {
    // Add click event listener to each hexagon
    hexagons.forEach(hexagon => {
      hexagon.addEventListener('click', () => {
        // Set the question text based on the hexagon's ID
        questionText.textContent = questions[hexagon.id];
        // Show popup and overlay
        popup.style.display = 'block';
        popupOverlay.style.display = 'block';
        popup.classList.add('show');
      });
    });
  });

  // Close popup when the close button is clicked
  closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
    popup.classList.remove('show');
  });

  // Close popup when clicking outside the popup (on the overlay)
  popupOverlay.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
    popup.classList.remove('show');
  });
});