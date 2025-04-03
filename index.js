    const computer = computerMove();
    let result = '';

    const Score = JSON.parse(localStorage.getItem('Score')) || 
    {
        Wins,
        Losses,
        Draws
    };
    function Game(playermove)
    {

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