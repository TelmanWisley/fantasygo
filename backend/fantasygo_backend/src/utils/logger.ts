class CustomLogger {
  info(...args) {
    console.info("============================================================Info============================================================");
    console.info(...args);
  }
  error(...args) {
    console.error("===========================================================Error===========================================================");
    console.error(...args);
  }
}

export const Logger = new CustomLogger();
