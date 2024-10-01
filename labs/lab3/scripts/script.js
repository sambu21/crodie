function changeBackCol() {
    const day = document.getElementById("days").value;
    const container = document.getElementById("colorContainer");

    switch(day) {
        case "Monday":
            container.style.backgroundColor = "lightblue";
            break;
        case "Tuesday":
            container.style.backgroundColor = "lightgreen";
            break;
        case "Wednesday":
            container.style.backgroundColor = "lightcoral";
            break;
        case "Thursday":
            container.style.backgroundColor = "lightgoldenrodyellow";
            break;
        case "Friday":
            container.style.backgroundColor = "lightpink";
            break;
        case "Saturday":
            container.style.backgroundColor = "lightsalmon";
            break;
        case "Sunday":
            container.style.backgroundColor = "lightseagreen";
            break;
        default:
            container.style.backgroundColor = "white";
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checknum(event) {
    event.preventDefault();
    const num = parseInt(document.getElementById("numberInput").value);
    let result = '';

    // Check if that shit is odd or even
    result += (num % 2 === 0) ? 'The number is even ' : 'The number is odd ';

    // Check if that shit is prime or compositee
    result += isPrime(num) ? 'and prime. ' : 'and composite. ';

    // Check the range of that shit
    if (num <= 50) {
        result += 'It is less than or equal to 50.';
    } else if (num > 50 && num <= 75) {
        result += 'It is greater than 50 and less than or equal to 75.';
    } else if (num > 75 && num <= 100) {
        result += 'It is greater than 75 and less than or equal to 100.';
    } else {
        result += 'It is greater than 100.';
    }

    document.getElementById("result").textContent = result;
}