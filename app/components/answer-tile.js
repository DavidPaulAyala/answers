import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Clicking OK is going to permanently delete this answer. Are you sure?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    upvote(answer) {
      var params = {
        vote: answer.get('vote') + 1
      };
      this.sendAction('updateAnswer', answer, params);
    },
    
    downvote(answer) {
      var params = {
        vote: answer.get('vote') - 1
      };
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
