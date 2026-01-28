class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 ) {
            throw new Error ('Ошибка имени персонажа')
        }
        const validType = {
            Bowman: { attack: 25, defence: 25 },
            Swordsman: { attack: 40, defence: 10 },
            Magician: { attack: 10, defence: 40 },
            Undead: { attack: 25, defence: 25 },
            Zombie: { attack: 40, defence: 10 },
            Daemon: { attack: 10, defence: 40 }
        };

        if (!validType[type]) {
            throw new Error ('Ошибка класса персонажа')
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = validType[type].attack;
        this.defence = validType[type].defence;
    }
    
    levelUp () {
        if (this.health <= 0) {
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
            health -= points * (1 - defence / 100);
        }
        if (this.health < 0) {
            this.health = 0;
        }
    }

}
