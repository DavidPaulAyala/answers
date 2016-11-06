import Ember from 'ember';

export function answerFrequency(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-comment"></span>(not answered yet)');
    }
  }

export default Ember.Helper.helper(answerFrequency);
