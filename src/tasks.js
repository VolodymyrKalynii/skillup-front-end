export const sequence = ['0', '1', '0', '1', '0',
    '1',
    '1',
    '1',
    '0',
    '1',
    '1',
    '0',
    '0',
    '1',
    '0',
    '1',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '1',
    '1',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '0',
    '1',
    '0',
    '1',
    '1',
    '0',
    '0',
    '1',
    '0',
    '1',
    '0',
    '0',
    '1',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '1',
    '1',
    '1',
    '0',
    '1',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '1',
    '1',
    '0',
    '0',
    '1',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '1',
    '1',
    '1',
    '0',
    '1',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '1',
    '0',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '0',
    '1',
    '0',
    '1',
    '0',
    '0',
    '1',
    '0',
    '0',
    '0',
    '0',
    '0',
    '0',
    '1',
    '0',
    '0',
    '1',
    '1',
    '1',
    '1',
    '0',
    '1',
    '1',
    '1',
    '0',
    '0',
    '0',
    '0',
    '0',
    '1',
    '1',
    '1',
    '0',
    '1',
    '0',
    '0',
    '0',
    '1',
    '1',
    '0',
    '1',
    '0',
    '0',
    '1',
    '0',
    '1',
    '1',
    '0',
    '1',
    '1',
    '1',
    '1',
    '0',
    '0',
    '1',
    '0',
    '0',
    '0',
    '0',
    '1'
];

const getOrderedSequence = (arr, div) => arr.split(div).filter((item) => item.length > 0).sort()

const transformSequence = (sequence) => {
    const sequenceStr = sequence.join('');

    const zeroArr = getOrderedSequence(sequenceStr, '1');
    const oneArr = getOrderedSequence(sequenceStr, '0');

    // const testArr = sequenceStr.split('1');
    //
    // let maxLength = 0;
    // let maxIndex;
    //
    // testArr.forEach((item, index) => {
    //     if (item.length > maxLength) {
    //         maxLength = item.length;
    //         maxIndex = index
    //     }
    // });
    //
    // console.log(maxIndex);
    //
    //
    // const newArr = testArr.slice(0, maxIndex).map((item) => item.length > 1 ? item.split('') : item);
    // console.log(newArr.flat());
    //
    const length = Math.max(zeroArr.length, oneArr.length);
    const finalArr = [];

    for (let i = 0; i < length; i++) {
        if (zeroArr[i])
            finalArr.push(zeroArr[i]);

        if (oneArr[i])
            finalArr.push(oneArr[i]);

    }

    return finalArr;
}

console.log(transformSequence(sequence));