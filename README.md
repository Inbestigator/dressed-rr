## This is intended for use by [@dressed/react](https://www.npmjs.com/package/@dressed/react)

This is a clone of [react-reconciler](https://npmjs.com/package/react-reconciler) v0.32.0, the intent of this library is to work around a bug(?) in Next.js that prevents custom renderers from working on server. I (Inbestigator) have opened [an issue](https://github.com/vercel/next.js/issues/83505) to hopefully resolve the problem.

This repo/library is no longer needed once `React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE` isn't used within react-reconciler, or if a more elegant solution is found.
