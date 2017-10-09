var commands = [
    {
        pattern: /play music/,
        askQuestion: 'which song do you want to hear sir?',
        todo: 'play music'
    },
    {
        pattern: /next music/,
        askQuestion: '',
        todo: 'next music'
    },
    {
        pattern: /previous music/,
        askQuestion: '',
        todo: 'previous music'
    },
    {
        pattern: /(hello|hi) jarvis/g,
        speak: 'hello sir'
    }
];

var cRegExpressions = [];
commands.forEach(function(c) {
    cRegExpressions.push({
        regExp: new RegExp(c.pattern, 'i'),
        askQuestion: (typeof c.askQuestion !== 'undefined') ? c.askQuestion : '',
        todo: (typeof c.todo !== 'undefined') ? c.todo : '',
        speak: (typeof c.speak !== 'undefined') ? c.speak : '',
    });
});

function processCommand(command) {    

    var matchCommand = cRegExpressions.find(function(item) { 
        return (command.match(item.regExp) !== null) ? item : null;
    });

    console.log(matchCommand);

    if (typeof matchCommand !== 'undefined') {
        if (matchCommand.askQuestion !== '') {
            console.log(matchCommand.askQuestion);
            document.querySelector('#text-command-input').value = '';
        } else if (matchCommand.todo !== '') {
            console.log(matchCommand.todo);
        } else if (matchCommand.speak !== '') {
            console.log(matchCommand.speak);
        }
    }
}

(function () {
   var inputEl = document.querySelector('#text-command-input'); 
   inputEl.addEventListener('keypress', function(event) {
       if (event && event.charCode === 13) {
           var command = event.target.value;
           console.log(command);
           processCommand(command);
       }
   }); 

})(); 
