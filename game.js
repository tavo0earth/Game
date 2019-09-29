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

    //Random step method.
    stepSelection = () => {
        return  Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    };

    // Method that determines the random level of damage in step 1.
    stepOne = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    // Method that determines the random level of damage in step 2.
    stepTwo = () => {
        return Math.floor(Math.random() * (this.stepTwoMax - this.stepTwoMin + 1)) + this.stepTwoMin;
    };

    //Method for determining a random healing level in step 3.
    stepTree = () => {
        return Math.floor(Math.random() * (this.stepOneMax - this.stepOneMin + 1)) + this.stepOneMin;
    };

    // Program launch.
    start = () => {

        //Assigning Player and Computer Health Levels to Variables.
        let healthComputer = this.computer;
        let healthPlayer = this.player;

        //A cycle that will stop when the health of the Player or Computer is zero or less.
        while (healthComputer >= 0 && healthPlayer >= 0) {

            //The Computer takes a step and is assigned to a variable.
            const stepComputer = this.stepSelection();
            console.log('Computer step:' + stepComputer);

            /*
            Condition, if step 1, then the level of random damage corresponding to the range from step 1 will
            be dealt.
            */
            if (stepComputer === 1) {
                const hitOnComputer = this.stepOne();
                console.log('Will be dealt damage:' + hitOnComputer);
                healthComputer = healthComputer - hitOnComputer;
                console.log('Computer health:' + healthComputer);
            }

            /*
            1) Condition, if step 2, then the level of random damage corresponding to the range from step 2 will
            be dealt.
            2) In this case, there is an internal condition, if the computer's health is equal to or less than 35,
            then it gets a chance healing, as a substitute for step 2 to step 3, giving healing.
            */
            if (stepComputer === 2) {
                if (healthComputer <= 35) {
                    const hitOnComputer = this.stepTree();
                    console.log('The computer got a chance for healing:' + hitOnComputer);
                    healthComputer = healthComputer + hitOnComputer;
                    console.log('Computer health:' + healthComputer);
                }
                else {
                    const hitOnComputer = this.stepTwo();
                    console.log('Will be dealt damage:' + hitOnComputer);
                    healthComputer = healthComputer - hitOnComputer;
                    console.log('Computer health:' + healthComputer);
                }
            }

            /*
            Condition, if step 3, then the level of random healing corresponding to the range from step 3 will
            be applied.
            */
            if (stepComputer === 3) {
                const hitOnComputer = this.stepTree();
                console.log('Will be healed:' + hitOnComputer);
                healthComputer = healthComputer + hitOnComputer;
                console.log('Computer health:' + healthComputer);
            }

            /*
            Condition, if the health level of the Computer is less than or equal to 0, then the Computer has
            lost and the game ends.
            */
            if (healthComputer <= 0) {
                console.log('Computer lost');
                break;
            }

            //The Player takes a step and is assigned to a variable.
            const stepPlayer = this.stepSelection();
            console.log('Player step:' + stepPlayer);

            /*
            Condition, if step 1, then the level of random damage corresponding to the range from step 1 will
            be dealt.
            */
            if (stepPlayer === 1) {
                const hitOnPlayer = this.stepOne();
                console.log('Will be dealt damage:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Player health:' + healthPlayer);
            }

            /*
            Condition, if step 2, then the level of random damage corresponding to the range from step 2 will
            be dealt.
            */
            if (stepPlayer === 2) {
                const hitOnPlayer = this.stepTwo();
                console.log('Will be dealt damage:' + hitOnPlayer);
                healthPlayer = healthPlayer - hitOnPlayer;
                console.log('Player health:' + healthPlayer);
            }

            /*
            Condition, if step 3, then the level of random healing corresponding to the range from step 3 will
            be applied.
            */
            if (stepPlayer === 3) {
                const hitOnPlayer = this.stepTree();
                console.log('Will be healed:' + hitOnPlayer);
                healthPlayer = healthPlayer + hitOnPlayer;
                console.log('Player health:' + healthPlayer);
            }

            /*
            Condition, if the health level of the Player is less than or equal to 0, then the Computer has
            lost and the game ends.
            */
            if (healthPlayer <= 0) {
                console.log('Player lost');
            }
        }
    }
}

const game = new Game();

game.start();
