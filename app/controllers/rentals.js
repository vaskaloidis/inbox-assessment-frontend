import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.store
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    },
    createRental() {
      let newRecord = this.store.createRecord('rental', {title: this.get('title')});
      newRecord.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your rental`);
        this.set('title', '');
      });
    },
    updateRental() {
      let rental = this.get('model').findBy(this.get('id'), '1');
      rental.set('title', this.get('title'));
      rental.save();
    }
  }
});
