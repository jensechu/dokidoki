"use strict";

var updateCorrectCount = function() {
  var correctAnswerCount = $('.answer.correct.selected').length;

  $('.total-correct').text(correctAnswerCount);
}

var gatherTotalQuestions = function() {
  var questionsCount = $('.question').length;

  $('.total-questions').text(questionsCount);
}

var handleAnswerClick = function() {
  $('.answer').on('click', function() {
    var $selectedAnswer = $(this);

    $selectedAnswer.siblings().removeClass('selected');
    $selectedAnswer.addClass('selected');

    updateCorrectCount();
  });
}

var initQuiz = function() {
  gatherTotalQuestions();
  handleAnswerClick();
}

initQuiz();
