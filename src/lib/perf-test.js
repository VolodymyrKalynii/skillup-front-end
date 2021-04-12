export const timeFunctionTest = (iterations, fn) => {

    for (let i = 0; i < iterations; i++) {
        console.time('timeTest');
        const timeTest = () => {
            fn();
        };

        timeTest();

        console.timeEnd('timeTest');
    }
};