export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка имени персонажа');
    }

    const validType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (validType.indexOf(type) === -1) {
      throw new Error('Ошибка класса персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }

  levelUp () {
        if (this.health > 0) {
                this.level += 1;
                this.attack = Math.round(this.attack * 1.2);
                this.defence = Math.round(this.defence * 1.2);
                this.health = 100;
        } else {
            throw new Error ('Нельзя повысить левел умершего персонажа')
        }
    }
    
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        }
        if (this.health < 0) {
            this.health = 0;
        }
    }

}

