function sumAll (int1, int2)
{
    if (typeof int1 != 'number' || typeof int2 != 'number')
    {
        return "ERROR";
    }

    if ((int1 < 0) || (int2 < 0))
    {
        return "ERROR";
    }

    let sum, num1, num2;

    if (int1 > int2)
    {
        num1 = int2;
        num2 = int1;
        sum = num1;
    }
    else
    {
        num1 = int1;
        num2 = int2;
        sum = num1;
    }

    for (let i = num1 + 1; i <= num2; i++)
    {
        sum += i;
    }

    return sum;
}

// Do not edit below this line
module.exports = sumAll;
