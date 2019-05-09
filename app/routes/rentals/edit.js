import Route from '@ember/routing/route';

export default Route.extend({
  
  model() {
    return this.store.createRecord('rental');
  },
  
  actions: {
    
    saveRental(newRental) {
      newRental.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your rental`);
        this.transitionTo('rentals');
      });
    },
    
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
