document.addEventListener('DOMContentLoaded', () => {
  const backgroundImageElement = document.getElementById('background-image');
  const images = [
      'images/38LowellDr_EveshamNJ_03.jpeg',
      '/images/Delaware_17.jpg',
      '/images/23CostillAve_ClaytonNJ_01.jpg',
      '/images/UmassLowellvsStPeters_031723_019.jpg',
      '/images/15MeridianCirNewtownPa21.jpg',
      '/images/201906011A5A9472.jpg',
      '/images/9305+Pacific+Ave+Apt+B_Margate+NJ_01.jpeg',
      '/images/Villanova1BrettBaskin030522007.jpg',
      // Add more image paths as needed'
  ];
  let currentIndex = 0;

  function changeBackgroundImage() {
      backgroundImageElement.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
  }

  // Change the background image every 5 seconds
  setInterval(changeBackgroundImage, 5000);

  // Initialize the first image
  changeBackgroundImage();
});
