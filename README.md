# MedsSaga

Interactive offline mobile game to teach children and young adults about safe over-the-counter (OTC) medicine use through pharmacy-themed scenarios.

## Run locally

```bash
cd "C:\Users\Jojo\OneDrive\Desktop\MedsSaga"
npm install
npx expo start
```

Then open the app in Expo Go or run on Android/iOS simulators.

## Notes

- This app is designed as an offline Expo project with game screens in `screens/`.
- `app.json` contains the Expo app configuration.
- `package.json` defines the Expo dependencies and start scripts.
- If `assets/icon.png` is not present, either add a valid app icon or update `app.json` to point to an existing asset.

## Recommended workflow

1. Install dependencies: `npm install`
2. Start Expo: `npx expo start`
3. Open on device: scan the QR code with Expo Go or launch a simulator.

## Offline behavior

- The current scaffold does not call external APIs.
- All game logic and scenario content is local, so the experience works without network access.

## Next steps

- Add more scenarios or quiz questions in `screens/ScenarioScreen.js` and `screens/QuizScreen.js`.
- Add local assets under `assets/` and update `app.json` if needed.
- Convert to TypeScript if you want stronger typing and editor support.
