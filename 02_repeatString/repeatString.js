//const repeatString = function() 
function repeatString(string, num)
{
    let finalStr = "";

    if (num < 0)
    {
        return "ERROR";
    }

    for (let i = 0; i < num; i++)
    {
        finalStr += string;
    }

    return finalStr;

};

// Do not edit below this line
module.exports = repeatString;
