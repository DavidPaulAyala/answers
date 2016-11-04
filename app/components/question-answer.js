import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    delete(question) {
    if(confirm('Whoa!!! Do you REALLY want to delete this question?')) {
      this.sendAction('destroyQuestion', question);
      }
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },
    updateAnswer(answer, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key] !== undefined) {
         answer.set(key, params[key]);
       }
     });
     answer.save();
   }
  }
});
