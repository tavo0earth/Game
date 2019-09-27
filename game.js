class Game {
    constructor() {
        this.stepOneMin = 18;
        this.stepOneMax = 25;
        this.stepTwoMin = 10;
        this.stepTwoMax = 35;
        this.min = 1;
        this.max = 3;
        this.computer = 100;
        this.player = 100;
    }

    //Метод определяющий случайный шаг
    stepSelection = () => {
        return  Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    };

    //Метод определяющий случайный уровень нанесения урона в шаге 1
    stepOne = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    //Метод определяющий случайный уровень нанесения урона в шаге 2
    stepTwo = () => {
        return Math.floor(Math.random() * (this.stepTwoMax - this.stepTwoMin + 1)) + this.stepTwoMin;
    };

    //Метод определяющий случайный уровень исцеления в шаге 3
    stepTree = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    //Запуск программы
    start = () => {

        //Присвоение переменным Игрока и Компьютера уровня здоровья
        let healthComputer = this.computer;
        let healthPlayer = this.player;

        //Цикл который остановится при достижении здоровья Игрока или Компьютера нулю или меньше
        while (healthComputer > 0 && healthPlayer > 0) {
            //Компьютер делает шаг и присваивается в переменную
            let stepComputer = this.stepSelection();
            console.log('Шаг компьютра:' + stepComputer);
            //Условие, если шаг 1, то будет нанесен уровень случайного урона, соответствующего диапазону из шага 1
            if (stepComputer === 1) {
                let hitOnComputer = this.stepOne();
                console.log('Будет нанесен урон:' + hitOnComputer);
                healthComputer = healthComputer - hitOnComputer;
                console.log('Здоровье компьютера:' + healthComputer);
            }
            /*
            1) Условие, если шаг 2, то будет нанесен уровень случайного урона, соответствующего диапазону из шага 2
            2) При этом есть внутреннее условие, если здоровье компьютера равно или меньше 35, то он получает шанс на
            исцеление, в качестве замены шага 2 на шаг 3, дающего исцеление.
            */
            if (stepComputer === 2) {
                if (healthComputer <= 35) {
                    let hitOnComputer = this.stepTree();
                    console.log('Компьютер получил шанс на исцеление:' + hitOnComputer);
                    healthComputer = healthComputer + hitOnComputer;
                    console.log('Здоровье компьютера:' + healthComputer);
                }
                else {
                    let hitOnComputer = this.stepTwo();
                    console.log('Будет нанесен урон:' + hitOnComputer);
                    healthComputer = healthComputer - hitOnComputer;
                    console.log('Здоровье компьютера:' + healthComputer);
                }
            }
            //Условие, если шаг 3, то будет нанесен уровень случайного исцеления, соответствующего диапазону из шага 3
            if (stepComputer === 3) {
                let hitOnComputer = this.stepTree();
                console.log('Будет исцелен:' + hitOnComputer);
                healthComputer = healthComputer + hitOnComputer;
                console.log('Здоровье компьютера:' + healthComputer);
            }
            //Условие, если уровень здоровья Компьютера меньше или равен 0, то Компьютер проиграл и игра заканчивается.
            if (healthComputer <= 0) {
                console.log('Компьютер проиграл');
                break;
            }

            //Игрок делает шаг и присваивается в переменную
            let stepPlayer = this.stepSelection();
            console.log('Шаг игрока:' + stepPlayer);
            //Условие, если шаг 1, то будет нанесен уровень случайного урона, соответствующего диапазону из шага 1
            if (stepPlayer === 1) {
                let hitOnPlayer = this.stepOne();
                console.log('Будет нанесен урон:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            //Условие, если шаг 2, то будет нанесен уровень случайного урона, соответствующего диапазону из шага 2
            if (stepPlayer === 2) {
                let hitOnPlayer = this.stepTwo();
                console.log('Будет нанесен урон:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            //Условие, если шаг 3, то будет нанесен уровень случайного исцеления, соответствующего диапазону из шага 3
            if (stepPlayer === 3) {
                let hitOnPlayer = this.stepTree();
                console.log('Будет исцелен:' + hitOnPlayer);
                healthPlayer = healthPlayer + hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            //Условие, если уровень здоровья Игрока меньше или равен 0, то Игрок проиграл и игра заканчивается.
            if (healthPlayer <= 0) {
                console.log('Игрок проиграл');
            }
        }
    }
}

const game = new Game();

game.start();
