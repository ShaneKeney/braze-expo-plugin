// WARNING THIS ISN'T VERSIONED
import { ExpoConfig, ConfigContext } from '@expo/config';

export const ENV = {
  APP_ENV: 'development',
  APP_SCHEME: 'brazetestdev',
  APP_DISPLAY_NAME: '(Test) Braze Expo Plugin',
  APP_BUNDLE_ID: 'com.rally2.dev.bep-test',

  BUILD_NUMBER: '1',
  APP_VERSION: '1.0.0',
  OTA_NUMBER: '1',

  // Braze Environment variables
  BRAZE_IOS_API_KEY: '<insert ios key here>',
  BRAZE_BASE_URL: '<insert base url here>', // e.g. 'sdk.iad-02.braze.com', ,
  BRAZE_FCM_SENDER_ID: '<insert fcm key here>' // TODO: Check that this is properly configured
};

// See https://docs.expo.dev/versions/latest/config/app/
export default ({ config }: ConfigContext): ExpoConfig => ({
  // Spreads static configuration from app.json if we want to seperate out and be more
  // explicit about what should / and should not change
  ...config,
  name: ENV.APP_DISPLAY_NAME,
  slug: 'braze-expo-plugin-test',
  description:
    'Barebones project for testing Braze Expo Plugin and push notifications with deep links.',
  privacy: 'hidden',
  owner: 'rally2',
  platforms: ['android', 'ios'],
  scheme: ENV.APP_SCHEME,
  version: ENV.APP_VERSION,
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  backgroundColor: '#FFFFFF',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 2000
  },
  assetBundlePatterns: ['**/*'],
  runtimeVersion: {
    policy: 'nativeVersion'
  },
  ios: {
    buildNumber: ENV.BUILD_NUMBER || '1',
    supportsTablet: true,
    bundleIdentifier: ENV.APP_BUNDLE_ID
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    }
  },
  extra: {
    ...ENV
  },
  plugins: [
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static'
        }
      }
    ],
    [
      '@braze/expo-plugin',
      {
        iosApiKey: ENV.BRAZE_IOS_API_KEY,
        baseUrl: ENV.BRAZE_BASE_URL,
        sessionTimeout: 60,
        enableGeofence: true,
        enableBrazeIosPush: true,
        enableFirebaseCloudMessaging: true,
        firebaseCloudMessagingSenderId: ENV.BRAZE_FCM_SENDER_ID,
        enableSdkAuthentication: false,
        logLevel: 0,
        minimumTriggerIntervalInSeconds: 0,
        enableAutomaticLocationCollection: true,
        enableAutomaticGeofenceRequests: true,
        dismissModalOnOutsideTap: true
      }
    ]
  ]
});
