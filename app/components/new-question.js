import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content') || "Why do people leave input fields blank sometimes",
        author: this.get('author') || "Anonymous",
        note: this.get('note') || "none entered",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
