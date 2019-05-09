import Route from '@ember/routing/route';

export default Route.extend({
  
  model() {
    return this.store.createRecord('rental');
  },
  
  actions: {
    
    saveRental(newRental) {
      // newRental.save().then(() => this.transitionTo('rentals'));
      // const newRecord = this.store.createRecord('rental', formParams);
  
      newRental.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your rental`);
        // this.set('title', '');
        this.transitionTo('rentals');
      });
    },
    
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
