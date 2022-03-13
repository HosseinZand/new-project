const images = [
  {
      name: 'Earth',
      src: 'Earth.jpg',
  },
  {
      name: 'Nebula',
      src: 'Nebula.jpg',
  },
  {
      name: 'Galaxy',
      src: 'Galaxy.jpg',
  },
  {
      name: 'Moon',
      src: 'Moon.jpg',
  },
  {
      name: 'Shuttle',
      src: 'Shuttle.jpg',
  },
  {
      name: 'Astronaut',
      src: 'Astronaut.jpg',
  },
];

function get_random_image() {
  random_index = Math.floor(Math.random() * images.length);
  selected_image = images[random_index];
  document.querySelector('#image_name').innerHTML = selected_image.name;
  document.querySelector('#image_shower').src =  `./images/${selected_image.src}`;
}
