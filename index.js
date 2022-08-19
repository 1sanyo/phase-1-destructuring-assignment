const farmAnimals = 'cow horse sheep pig chicken';

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

const  [bessie, , dolly, babe, little] = farmAnimals.split(' ');

const [blackAndWhite, , black, pink, ,] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const [, , , , , indg, ,] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink'

  const muppet = {
    partner: 'Kermit'
  };
  
  const {muppetName, color, song, job, partner} = muppet;
  
  const nestedMuppet = {
    nestedName: 'Kermit',
    nestedColor: 'green',

    const nestedMuppet = {
      nestedPartner: 'Miss Piggy'
    };
    
    const {song2, song4} = nestedMuppet.album.theMuppetMovie;
    const {nestedJob, nestedPartner} = nestedMuppet;
    
    
    // Strings
    
    // 1. Use destructuring to assign appropriate variables based on the sounds animals make.