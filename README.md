# Empty

Demonstrates an "Error: Called stop() outside of a test context" error when
attempting to authenticate using Firebase/torii in an Ember acceptance test. The
code tracks closely to the example provided at:

https://www.firebase.com/docs/web/libraries/ember/guide.html#section-authentication

The Firebase App "empty.firebaseIO.com" is empty except that Email & Password
authentication is enabled and there is a user with email address
"user@example.com" and password "validPassword".

## Recreating Behavior

Attempt to login in the development environment (i.e., http://localhost:4200)
with username "user@example.com" and password "validPassword". This should
transition you to the "projects" route. An acceptance test attempting to
recreate the same behavior fails, however. Phantom JS 2.0 shows that
the currentUrl() remains "/signin" when "/projects" was expected. Running the
acceptance test in Safari or Chrome, however, shows an additional error message
from JSHint - unit/routes: global failure":

  Error: Called stop() outside of a test context
  Source: http://localhost:7357/assets/vendor.js:91318

