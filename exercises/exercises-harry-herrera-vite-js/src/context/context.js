// global-context.js

class GlobalContext {
  constructor() {
    this.language = 'es';
  }

  setLanguage(language) {
    this.language = language;
  }
}

const globalContext = new GlobalContext();

export default globalContext;