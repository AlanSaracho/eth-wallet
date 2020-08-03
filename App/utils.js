export const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
