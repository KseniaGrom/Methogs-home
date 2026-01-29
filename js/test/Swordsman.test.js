import Character from '../Swordsman.js';

test('should check the class Swordsman', () => {
  const character = new Character('Player', 'Swordsman');
  const result = {
    name: 'Player',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(character).toMatchObject(result);
});
