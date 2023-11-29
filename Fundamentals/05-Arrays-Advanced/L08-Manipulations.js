function manipulate(input) {

    let arr = input[0];
    let nums = arr.split(' ');

    for (let i = 1; i < input.length; i++) {
        let element = input[i].split(' ');
        let com = element[0];
        let num = element[1];

        switch (com) {

            case "Add":
                nums.push(num);
                break;

            case "Remove":
                nums = nums.filter((element) => element !== num);
                break;

            case "RemoveAt":
                nums.splice(num, 1);
                break;

            case "Insert":
                let index = element[2];
                nums.splice(index, 0, num);
                break;

        }

    }

    console.log(nums.join(' '));

}
