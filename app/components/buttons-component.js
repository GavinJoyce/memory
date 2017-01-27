import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);

    let people = Ember.A();

    for(let i=0; i<100; i++) {
      people.pushObject({
        id: i,
        name: `Person ${i}`
      });

      this.set('people', people);
    }
  }
});
