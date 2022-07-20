function removeFromArray(array, ...args)
{
    args.forEach((arg) => {

        const i = array.indexOf(arg);

        if (i > -1)
        {
            array.splice(i, 1);
        }

    });

    return array;

   // return array.filter(x => !args.includes(x));
}

// Do not edit below this line
module.exports = removeFromArray;
