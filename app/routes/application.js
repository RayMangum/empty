import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn() {
      let controller = this.controllerFor("signin");
      let provider="password";
      let email = controller.get("email");
      let password = controller.get("password");
      this.get("session").open("firebase", { provider, email, password }).then(() => {
        this.transitionTo("projects");
      }, (error) => {
        controller.set("error", error);
      });
    },
    signOut() {
      this.get("session").close().then(() => {
        this.transitionTo("signin");
      });
    }
  }
});
