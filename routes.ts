/**
 * An array of routes that are acceptable to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoute = ["/", "/auth/new-verification"];

/**
 * An array of routes that are use for authentication
 * These routes will redirect loggedin use to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECTION = "/settings";
