


function highest(a) {

    let max = -Infinity;

    for (let b = 0; b < a.length; b++) {

        if (max < a[b]) {

            max = a[b]
        }
    }

    return (max)
}
let numbs = [10, 30, 40, 70, 100,]

console.log(highest(numbs))


function lowest(a) {

    let mini = Infinity;

    for (let c = 0; c < a.length; c++) {

        if (mini > a[c]) {

            mini = a[c]
        }
    }

    return (mini)
}
let numba = [10, 30, 40, 70, 100]

console.log(lowest(numba))

let sum;

sum = (highest(numba) + lowest(numba)) / 2;

console.log(sum)
