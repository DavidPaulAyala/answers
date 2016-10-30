import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Clicking OK is going to permanently delete this answer. Are you sure?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
