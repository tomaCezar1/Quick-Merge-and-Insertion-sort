// let items = [5, 3, 7, 6, 2, 9];
let items = [...Array(50)].map(() => Math.floor(Math.random() * 90));


//Quick Sort
function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping items[i] with items[j]
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

// const t1 = performance.now();
// const sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray);
// const t2 = performance.now();
// console.log(`Time taken : ${t2-t1} ms`);


//Merge Sort
function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);  //slice will select from 0 to middle(excluded_
    const right = arr.slice(middle);  //slice will select from middle to end of array

    return merge(mergeSort(left), mergeSort(right));
}

// const t3 = performance.now();
// const sortedArray2 = mergeSort(items.slice());
// const t4 = performance.now();
// console.log(sortedArray2);
// console.log(`Time taken : ${t4-t3} ms`);


//Insertion Sort


