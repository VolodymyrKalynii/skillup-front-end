export const sleepApp = (millis) => {
    const date = new Date();
    let curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < millis);
};