class Game {
    constructor(stepOneMin, stepOneMax, stepTwoMin, stepTwoMax, minStep, maxStep, health) {
        this.stepOneMin = stepOneMin;
        this.stepOneMax = stepOneMax;
        this.stepTwoMin = stepTwoMin;
        this.stepTwoMax = stepTwoMax;
        this.min = minStep;
        this.max = maxStep;
        this.computer = health;
        this.player = health;
    }

    stepOne = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    stepTwo = () => {
        return Math.floor(Math.random() * (this.stepTwoMax - this.stepTwoMin + 1)) + this.stepTwoMin;
    };

    stepTree = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    stepSelection = () => {
        const step = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            return step
    };

    game = () => {
        let healthComputer = this.computer;
        let healthPlayer = this.player;

        while (healthComputer > 0 && healthPlayer > 0) {
            let stepComputer = this.stepSelection();
            console.log('Шаг компьютра:' + stepComputer);
            if (stepComputer === 1) {
                let hitOnComputer = this.stepOne();
                console.log('Будет нанесен удар:' + hitOnComputer);
                healthComputer = healthComputer - hitOnComputer;
                console.log('Здоровье компьютера:' + healthComputer);
            }
            if (stepComputer === 2) {
                let hitOnComputer = this.stepTwo();
                console.log('Будет нанесен удар:' + hitOnComputer);
                healthComputer = healthComputer - hitOnComputer;
                console.log('Здоровье компьютера:' + healthComputer);
            }
            if (stepComputer === 3) {
                let hitOnComputer = this.stepTree();
                console.log('Будет исцелен:' + hitOnComputer);
                healthComputer = healthComputer + hitOnComputer;
                console.log('Здоровье компьютера:' + healthComputer);
            }
            if (healthComputer <= 0) {
                console.log('Убит компьютер');
                break;
            }

            let stepPlayer = this.stepSelection();
            console.log('Шаг игрока:' + stepPlayer);
            if (stepPlayer === 1) {
                let hitOnPlayer = this.stepOne();
                console.log('Будет нанесен удар:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            if (stepPlayer === 2) {
                let hitOnPlayer = this.stepTwo();
                console.log('Будет нанесен удар:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            if (stepPlayer === 3) {
                let hitOnPlayer = this.stepTree();
                console.log('Будет исцелен:' + hitOnPlayer);
                healthPlayer = healthPlayer + hitOnPlayer;
                console.log('Здоровье игрока:' + healthPlayer);
            }
            if (healthPlayer <= 0) {
                console.log('Убит игрок');
            }
        }



    }

}

const game = new Game(18, 25, 10, 35, 1, 3, 100);

game.game();