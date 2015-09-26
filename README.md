# Empty

Demonstrates an "Error: Called stop() outside of a test context" error when
attempting to authenticate using Firebase/Torii in an Ember acceptance test. The
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
from JSHint - unit/routes: global failure:

    Error: Called stop() outside of a test context
    Source: http://localhost:7357/assets/vendor.js:91318

The console in the developer tools also shows the following message:

    FIREBASE WARNING: Exception was thrown by user callback. Error: Called stop() outside of a test context
        at Object.extend.stop (http://localhost:7357/assets/test-support.js:3000:10)
        at exports.default._emberTestingAdaptersAdapter.default.extend.asyncStart (http://localhost:7357/assets/vendor.js:52454:13)
        at asyncStart (http://localhost:7357/assets/vendor.js:43110:47)
        at Object.async (http://localhost:7357/assets/vendor.js:43124:7)
        at fulfill (http://localhost:7357/assets/vendor.js:66638:22)
        at handleMaybeThenable (http://localhost:7357/assets/vendor.js:66598:9)
        at resolve (http://localhost:7357/assets/vendor.js:66611:7)
        at resolvePromise (http://localhost:7357/assets/vendor.js:66755:9)
        at http://localhost:7357/assets/vendor.js:100968:15
        at http://localhost:7357/assets/vendor.js:91327:20 
