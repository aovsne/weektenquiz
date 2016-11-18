answerArray = [
	{
		answer: 'no',
	},
	{
		answer: 'yes',
	},
	{
		answer: '1935',
	},
	{
		answer: 'india',
	},
	{
		answer: 'tibetan',
	},
	{
		answer: 'snowlion',
	},
	{
		answer: 'yes',
	},
]


function getAnswer(){
	var correct = 0
	var incorrect = 0

	for (i = 0; i < answerArray.length; i++){
		var question = document.getElementById('question' + [i])
		var answer = document.getElementById('answer' + [i]).value.toLowerCase()

		if(answer == answerArray[i].answer){
			question.className = 'right'
			correct++
		}else{
			question.className = 'wrong'
			incorrect++
		}
	}document.getElementById('correct').textContent = correct
	 document.getElementById('incorrect').textContent = incorrect
}

$(document).ready(function(){
	$('button.btn').click(function(){
		$('.correct').fadeIn(2000)
		$('.incorrect').fadeIn(3000)
	})
})