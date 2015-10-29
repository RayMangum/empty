import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn() {
      let controller = this.controllerFor("signin");
      let provider="password";
      let email = controller.get("email");
      let password = controller.get("password");
      if (Ember.testing){
        var waiter = (() => false);
        Ember.Test.registerWaiter(waiter);
      }
      this.get("session").open("firebase", { provider, email, password }).then(() => {
        if (Ember.testing){
          Ember.Test.unregisterWaiter(waiter);
        }
        this.transitionTo("projects");
      }, (error) => {
        if (Ember.testing){
          Ember.Test.unregisterWaiter(waiter);
        }
        controller.set("error", error);
      });
    },
    signOut() {
      if (Ember.testing){
        var waiter = (() => false);
        Ember.Test.registerWaiter(waiter);
      }
      this.get("session").close().then(() => {
        if (Ember.testing){
          Ember.Test.unregisterWaiter(waiter);
        }
        this.transitionTo("signin");
      });
    }
  }
});
