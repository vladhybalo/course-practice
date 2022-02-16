
    function destroyer(arr,...filt) {
    // Remove all the values
 //   console.log(filt);
    return arr.filter(cur => {
        for (let i = 0; i < filt.length; i++) {
            if (filt[i] === cur)
                return false;
        }
        return true;
       
    });
    }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));