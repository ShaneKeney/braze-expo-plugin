# Barebones Braze Expo Plugin Project

The goal of this repo is to create a barebones Expo Managed Workflow project that leverages the @braze/expo-plugin and Braze SDK.  The main test case is to see if the Braze SDK (along with the plugin) can be used to accomdate push notifications with an embedded deep link and navigate to the appropriate screen in the app on press.

## TODO:

- [ ] Need Braze Sandbox Key information to be added to the app.config.ts file.
- [ ] Create a basic React Navigator using React Navigation.
  - [ ] Set up basic linking configuration for testing
- [ ] Install necessary braze dependencies
  - [ ] Braze Expo Plugin
  - [ ] Braze SDK (i.e. appboy etc.)
- [ ] Set up basic Auth gate (doesn't need to actually hit an API) but should simulate protected screens in an app.