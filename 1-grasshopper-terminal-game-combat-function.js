function combat(health, damage) {
  // Write your code here
  let life = health - damage;
  return life <= 0 ? 0 && "Health cannot go below 0" : life;
};