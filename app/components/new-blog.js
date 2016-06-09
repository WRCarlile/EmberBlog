import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        text: this.get('text'),
        comment: this.get('comment'),
      };
      this.set('addNewBlog', false);
      this.sendAction('save2', params);
    }
  }
});
