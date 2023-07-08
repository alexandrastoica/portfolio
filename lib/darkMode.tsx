function setInitialColorMode() {
  function getInitialColorMode() {
    const preference = window.localStorage.getItem('theme');
    const hasExplicitPreference = typeof preference === 'string';
    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasExplicitPreference) {
      return preference;
    }
    // If there is no saved preference, use a media query
    const mediaQuery = '(prefers-color-scheme: dark)';
    const mql = window.matchMedia(mediaQuery);
    const hasImplicitPreference = typeof mql.matches === 'boolean';
    if (hasImplicitPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // default to 'light'.
    return 'light';
  }
  const colorMode = getInitialColorMode();
  document.documentElement.setAttribute('data-theme', colorMode);
}

export const blockingSetInitialColorMode = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode();
})()
`;
