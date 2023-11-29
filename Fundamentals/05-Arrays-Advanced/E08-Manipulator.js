function manipulate(nums, coms) {

    for (const com of coms) {
        let elements = com.split(' ');
        let operation = elements[0];
        let index = 0;
        let element = 0;

        switch (operation) {

            case "add":
                index = elements[1];
                element = Number(elements[2]);
                nums.splice(index, 0, element);
                break;

            case "addMany":
                index = elements[1];
                element = elements.slice(2).map(Number);
                nums.splice(index, 0, ...element);
                break;

            case "contains":
                element = Number(elements[1]);
                console.log(nums.indexOf(element));
                break;

            case "remove":
                index = elements[1];
                nums.splice(index, 1);
                break;

            case "shift":
                let turns = Number(elements[1]);
                for (let i = 1; i <= turns; i++) {
                    let num = nums.shift();
                    nums.push(num);
                }
                break;

            case "sumPairs":
                let nums2 = [];
                for (let i = 0; i < nums.length; i += 2) {
                    let num = nums[i];

                    if (nums.length - 1 !== i) {
                        let num2 = nums[i + 1];
                        let pair = num + num2;
                        nums2.push(pair);
                    } else {
                        nums2.push(num);
                    }

                }

                nums = nums2;
                break;

            case "print":
                console.log(`[ ${nums.join(', ')} ]`);
                break;
        }

    }
    
}