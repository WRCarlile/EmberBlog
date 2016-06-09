import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        text: this.get('text'),
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
