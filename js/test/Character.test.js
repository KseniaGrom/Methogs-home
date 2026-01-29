import Character from '../Character.js';

test('Короткое имя вызывает ошибку', () => {
  expect(() => new Character('А')).toThrow('Ошибка имени персонажа');
});

test('Длинное имя вызывает ошибку', () => {
  expect(() => new Character('ОченьДлинноеИмя')).toThrow('Ошибка имени персонажа');
});

test('Нестроковое имя', () => {
  expect(() => new Character(123, 'Bowman')).toThrow('Ошибка имени персонажа');
  expect(() => new Character(null, 'Bowman')).toThrow('Ошибка имени персонажа');
  expect(() => new Character(undefined, 'Bowman')).toThrow('Ошибка имени персонажа');
});

test('Создать Bowman с правильными характеристиками', () => {
  const character = new Character('Player', 'Bowman');
  const result = {
    name: 'Player',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(character).toMatchObject(result);
});

describe('Метод levelUp', () => {
    test('Должен увеличить хп на 1', () => {
      const char = new Character('Леголас', 'Bowman');
      char.levelUp();
      expect(char.level).toBe(2);
    });

    test('Должен увеличить атаку на 20%', () => {
      const char = new Character('Леголас', 'Bowman');
      const initialAttack = char.attack;
      char.levelUp();
      expect(char.attack).toBe(Math.round(initialAttack * 1.2));
    });

    test('Должен увеличить защиту на 20%', () => {
      const char = new Character('Леголас', 'Bowman');
      const initialDefence = char.defence;
      char.levelUp();
      expect(char.defence).toBe(Math.round(initialDefence * 1.2));
    });

    test('Восстановление хп до 100', () => {
      const char = new Character('Леголас', 'Bowman');
      char.health = 50;
      char.levelUp();
      expect(char.health).toBe(100);
    });

    test('Ошибка, если персонаж мёртв', () => {
      const char = new Character('Леголас', 'Bowman');
      char.health = 0;
      expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего персонажа');
    });

    test('Правильное повышение несколько раз', () => {
      const char = new Character('Леголас', 'Bowman');
      char.levelUp();
      char.levelUp();
      expect(char.level).toBe(3);
      expect(char.health).toBe(100);
    });
  });

  describe('Метод damage', () => {
    test('Должен уменьшать здоровье с учетом защиты', () => {
      const char = new Character('Леголас', 'Bowman'); 
      char.damage(40);
      expect(char.health).toBe(70);
    });

    test('Не должен уменьшать здоровье ниже 0', () => {
      const char = new Character('Леголас', 'Bowman');
      char.damage(1000);
      expect(char.health).toBe(0);
    });

    test('Не должен изменять здоровье мертвого персонажа', () => {
      const char = new Character('Леголас', 'Bowman');
      char.health = 0;
      char.damage(50);
      expect(char.health).toBe(0);
    });

    test('Должен работать с нулевым уроном', () => {
      const char = new Character('Леголас', 'Bowman');
      char.damage(0);
      expect(char.health).toBe(100);
    });

    test('Должен работать с отрицательным уроном (лечение)', () => {
      const char = new Character('Леголас', 'Bowman');
      char.health = 50;
      char.damage(-20);
      expect(char.health).toBe(65);
    });
  });
