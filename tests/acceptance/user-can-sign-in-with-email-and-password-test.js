import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'empty/tests/helpers/start-app';

module('Acceptance | user can sign in with email and password', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('user can sign in with email and password', function(assert) {
  visit('/signin');

  fillIn("input[type='email']", "user@example.com");
  fillIn("input[type='password']", "validPassword");
  click("input[type='submit']");

  andThen(function() {
    assert.equal(currentURL(), '/projects');
  });
});
