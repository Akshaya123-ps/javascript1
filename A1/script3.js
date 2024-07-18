function isPrime(r) {
    if (r <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(r); i++) {
        if (r % i === 0) {
            return false;
        }
    }
    return true;
}

function FirstElement() {
    const inputArr = prompt("Enter an array of numbers (comma-separated):");
    const array = inputArr.split(",").map(Number);

    if (array.length === 0) {
        console.log("Array is empty.");
        return;
    }

    const firstElement = array[0];
    if (isPrime(firstElement)) {
        console.log(`${firstElement} is a prime number.`);
    } else {
        console.log(`${firstElement} is not a prime number.`);
    }
}

FirstElement();
