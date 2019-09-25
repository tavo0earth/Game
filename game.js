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

        if (step === 1) {
            return this.stepOne() + step
        }
        if (step === 2) {
            return this.stepTwo()
        }
        if (step === 3) {
            return this.stepTree()
        }
    };

    game = () => {
        let healthComputer = this.computer;
        let healthPlayer = this.player;

        while (healthComputer > 0 && healthPlayer > 0) {
            let stepComputer = this.stepSelection();
            console.log('Удар по компьютру:' + stepComputer);

            healthComputer = healthComputer - stepComputer;
            console.log('Здоровье компьютера:' + healthComputer);
            if (healthComputer <= 0) {
                console.log('Убит компьютер');
                break;
            }

            let stepPlayer = this.stepSelection();
            console.log('Удар по игроку:' + stepPlayer);
            healthPlayer = healthPlayer - stepPlayer;
            console.log('Здоровье игрока:' + healthPlayer);
            if (healthPlayer <= 0) {
                console.log('Убит игрок');
            }
        }



    }

}

const game = new Game(18, 25, 10, 35, 1, 3, 100);

game.game();