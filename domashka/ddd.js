const changeProposal = (arr) => {
    let newArr = [];

for (let j = 0; j < arr.length; j++) {
    let item = arr[j];
    let word = item.word;
    let divisibility = item.divisibility;
    let result = '';
    let i = 0;

    while (i < word.length) {
        let per = word[i];

        if (divisibility === 'чётный') { 
        if (i % 2 === 0) { 
            result = result + per.toUpperCase();
        } else {
            result = result + per.toLowerCase();
        }
        }

        if (divisibility === 'нечётный') { 
        if (i % 2 !== 0) { 
            result = result + per.toUpperCase();
        } else {
            result = result + per.toLowerCase();
        }
        }

        i++;
    }

    newArr.push(result);
    }

    return newArr;
};

const result = changeProposal([
    { word: 'чётный текст', divisibility: 'чётный' },
    { word: 'нечётный текст', divisibility: 'нечётный' },
    { word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный' },
    { word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный' },
]);

console.log(result);