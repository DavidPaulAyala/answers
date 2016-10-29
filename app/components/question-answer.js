import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    delete(question) {
    if(confirm('Whoa!!! Do you REALLY want to delete this question?')) {
      this.sendAction('destroyQuestion', question);
      }
    }
  }
});