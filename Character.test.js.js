const Character = require('./Character');

test('should create Bowman', () => {
    const hero = new Character('Legolas', 'Bowman');
    expect(hero.name).toBe('Legolas');
    expect(hero.type).toBe('Bowman');
    expect(hero.health).toBe(100);
    expect(hero.level).toBe(1);
    expect(hero.attack).toBe(25);
    expect(hero.defence).toBe(25);
});

test('should not create with short name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Ошибка имени персонажа');
});

test('should level up', () => {
    const hero = new Character('Aragorn', 'Swordsman');
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.health).toBe(100);
});

test('should take damage', () => {
    const hero = new Character('Test', 'Bowman');
    hero.damage(40);
    expect(hero.health).toBe(70);
});