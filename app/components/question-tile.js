import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToList(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
