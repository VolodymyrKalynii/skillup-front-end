export const calculateFib = (n) => {
    let prev = 0, 
        next = 1;

    for (let i = 0; i < n; i++) {
        const temp = next;
        next = prev + next;
        prev = temp;
    }

    return prev;
};