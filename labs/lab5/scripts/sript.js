document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number); // Convert input string to an array of numbers

    // easy funcs to return a bool on whether or not a num is prime or composiite
    //if that shit is one tho it aint either ya herrrrr
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const isComposite = (num) => {
        return num > 1 && !isPrime(num);
    };

    // all that for loop code sum light
    let primeCountFor = 0;
    let compositeCountFor = 0;
    let neitherCountFor = 0;

    for (let number of numbers) {
        if (isPrime(number)) {
            primeCountFor++;
        } else if (isComposite(number)) {
            compositeCountFor++;
        } else {
            neitherCountFor++;
        }
    }

    // print that shit
    document.getElementById('primeFor').innerText = primeCountFor;
    document.getElementById('compositeFor').innerText = compositeCountFor;
    document.getElementById('neitherFor').innerText = neitherCountFor;

    // forEach loop aint a thang but a chicken wang sweethawt
    let primeCounnForEach = 0;
    let compositeCountForEach = 0;
    let neitherCountForEach = 0;

    numbers.forEach(number => {
        if (isPrime(number)) {
            primeCounnForEach++;
        } else if (isComposite(number)) {
            compositeCountForEach++;
        } else {
            neitherCountForEach++;
        }
    });

    // print that shit
    document.getElementById('primeForEach').innerText = primeCounnForEach;
    document.getElementById('compositeForEach').innerText = compositeCountForEach;
    document.getElementById('neitherForEach').innerText = neitherCountForEach;

    // map loop this shit was kinda ill
    const counts = numbers.map(number => {
        if (isPrime(number)) {
            return 'prime';
        } else if (isComposite(number)) {
            return 'composite';
        } else {
            return 'neither';
        }
    });

    const primeCountMap = counts.filter(count => count === 'prime').length;
    const compositeCountMap = counts.filter(count => count === 'composite').length;
    const neitherCountMap = counts.filter(count => count === 'neither').length;

    // send that bitch to the ol page there bud to print
    document.getElementById('primeMap').innerText = primeCountMap;
    document.getElementById('compositeMap').innerText = compositeCountMap;
    document.getElementById('neitherMap').innerText = neitherCountMap;
});