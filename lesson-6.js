class Bird {
    constructor (name) {
        this.name = name ;
        this.points = 0;
        this.wasEaten = false;
        this.battle_skill=0;
    }
}
const birdcage = ["Bird 1", "Bird 2", "Bird 3", "Bird 4", "Bird 5", "Bird 6", "Bird 7", "Bird 8", "Bird 9", "Bird 10"]; // Курятник
for (let i = 0; i <birdcage.length; i++){ //Присваивание классов пернатым из массива "birdcage"
    birdcage[i] = new Bird("Bird " + (i+1));
}
function battle (z) { // Функция для наделения птиц силой в момент схватки.
    // Внимание! Птицы каждый раз наделяются силой заново, так что победитель в предыдущем раунде, может получить в следующей схватке меньше силы и проиграть
    z = Math.ceil(Math.random()*10);
    return z;
}

console.log("Ход битвы на арене по раундам.");
console.log("__________________________________________________________________________________________________");
let words = ["Победу одержала птица: '", "' с силой равной: '", "'  над птицей: '", "' с силой равной: '"]; // Фразы ведущего

let arena = birdcage.filter(item => item.wasEaten === false); // Птичья арена
while (arena.length > 1) {
    function getRandomInRange(min, max) { // функция для выбора случайного участника битвы
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let x = getRandomInRange(0, arena.length-1); // выбор для битвы случайного участника №1
    let y = getRandomInRange(0, arena.length-1); // выбор для битвы случайного участника №2
    if (x != y) {
        arena[x].battle_skill = battle(arena[x]); // Наделение участника силой
        arena[y].battle_skill = battle(arena[y]);// Наделение участника силой
        if (arena[x].battle_skill > arena[y].battle_skill) { // Силомер, он же измеритель пернатой силы
            arena[y].wasEaten = true; //  запись в личной карточке проигравшей птицы о проигрыше
            arena[x].points+=1; // Занесение очка в личную карточку победившей птицы
            console.log(words[0] + arena[x].name + words[1] + arena[x].battle_skill + words[2] + arena[y].name + words[3] + arena[y].battle_skill + "'"); // фразы ведущего для эксперимента построены с помощью переменных
        }
        else if(arena[x].battle_skill < arena[y].battle_skill) {
            arena[x].wasEaten = true;
            arena[y].points+=1;
            console.log("Победу одержала птица: '" + arena[y].name+ "' с силой равной: '" + arena[y].battle_skill+ "' над птицей: '" + arena[x].name + "' с силой равной: '" +arena[x].battle_skill+ "'"); // фразы ведущего без эксперимента
        }
    }
    arena = birdcage.filter(item => item.wasEaten === false); // Очередной запуск на арену несъеденных птиц из клетки для розыгрыша белетов на участие в битве
}
console.log("__________________________________________________________________________________________________");
console.log("ПОБЕДИТЕЛЬ: " + "в турнире победила птица '" + arena[0].name+ "' с количеством очков за одержанные победы: '" + arena[0].points + "'");
console.log(arena); // Вывод победителя турнира
console.log("__________________________________________________________________________________________________");
console.log("Общий итог: ");
console.log(birdcage);