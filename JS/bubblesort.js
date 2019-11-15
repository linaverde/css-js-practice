bubblesort();

function bubblesort() {
    let num = [1, 192, 16, 7, 538, 300, 42, 66, 15, 14];
    console.log(num);
    for (let i = 0; i < 10; i++){
        for (let j = 1; j < i; j++){
            if (num [j] > num [j-1]){
                [num[j], num[j-1]] = [num[j-1], num[j]];
            }
        }
    }
    console.log(num);
}