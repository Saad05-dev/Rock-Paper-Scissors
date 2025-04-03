  let result = '';

    const Score = JSON.parse(localStorage.getItem('Score')) || 
    {
        Wins: 0,
        Losses: 0,
        Draws: 0
    };
    update();

    function Game(playermove)
    {
        const computer = computerMove();

        if(playermove == 'rock')
        {
            if(computer == 'rock')
                result = 'draw';
            else if(computer == 'scissors')
                result = 'win'
            else if(computer == 'paper')
                result = 'lost';
        }
        if(playermove == 'scissors')
        {
            if(computer == 'rock')
                result = 'lost';
            else if(computer == 'scissors')
                result = 'draw'
            else if(computer == 'paper')
                result = 'win';
        }
        if(playermove == 'paper')
        {
            if(computer == 'rock')
                result = 'win';
            else if(computer == 'scissors')
                result = 'lost'
            else if(computer == 'paper')
                result = 'draw';
        }
        if(playermove == 'reset')
        {
            Score.Wins = 0;
            Score.Losses = 0;
            Score.Draws = 0;
            result = '';
            document.querySelector('.result').innerHTML = result;

            document.querySelector('.moves').innerHTML = ``;
            localStorage.removeItem('Score');
            update();
            return;
        }

        if (result == 'win')
        {
            Score.Wins++;
        }
        else if ( result == 'lost')
        {
            Score.Losses++;
        }
        else
        {
            Score.Draws++;
        }

        localStorage.setItem('Score',JSON.stringify(Score));

        update();

        document.querySelector('.result').innerHTML = result;

        document.querySelector('.moves').innerHTML = `You picked ${playermove} == Computer picked ${computer}`;
    }
    function update()
    {
        document.querySelector('.stats').innerHTML = `Wins: ${Score.Wins},Losses: ${Score.Losses},Draw: ${Score.Draws}`;
    }

    function computerMove()
    {
        const choice = Math.random();
        let computer = '';
        if(choice >= 0 && choice < 1/3)
        {
            computer = 'rock';
        }
        if(choice >= 1/3 && choice < 2/3)
        {
            computer = 'scissors';
        }
        if(choice >= 2/3 && choice < 1)
        {
            computer = 'paper'
        }
        return computer;
    }