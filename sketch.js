const images = [
  {
      description: 'Details about Earth: Earth is our home planet. Scientists believe Earth and its moon formed around the same time as the rest of the solar system. They think that was about 4.5 billion years ago. Earth is the fifth-largest planet in the solar system. Its diameter is about 8,000 miles.',
      src: 'Earth.jpg',
  },
  {
      description: 'what is a Nebula?A nebula is a giant cloud of dust and gas in space. Some nebulae (more than one nebula) come from the gas and dust thrown out by the explosion of a dying star, such as a supernova. Other nebulae are regions where new stars are beginning to form.',
      src: 'Nebula.jpg',
  },
  {
      description: 'what is Galaxy?A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, all held together by gravity.',
      src: 'Galaxy.jpg',
  },
  {
      description: 'Why is moon important to us?Moon presence helps stabilize our planet wobble and moderate our climate,fun fact: The Moon has a very thin atmosphere called an exosphere.',
      src: 'Moon.jpg',
  },
  {
      description: 'what are Shuttles used for?space shuttle, also called Space Transportation System, partially reusable rocket-launched vehicle designed to go into orbit around Earth, to transport people and cargo to and from orbiting spacecraft, and to glide to a runway landing on its return to Earth surface.',
      src: 'Shuttle.jpg',
  },
  {
      description: 'Who are Astronauts? An astronaut is a person who is specially trained to travel into outer space. Astronauts aboard a spacecraft may have different responsibilities. Typically there is a commander who leads the mission and a pilot. Other positions may include flight engineer, payload commander, mission specialist, and science pilot.',
      src: 'Astronaut.jpg',
  },
];

function get_random_image() {
  random_index = Math.floor(Math.random() * images.length);
  selected_image = images[random_index];
  document.querySelector('.description').innerHTML = selected_image.description;
  document.querySelector('#image_shower').src =  `./images/${selected_image.src}`;
}
