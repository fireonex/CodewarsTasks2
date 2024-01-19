function expandedForm(num){

    let numStr = `${num}`;
    let expandedNum = [];
    let multiplayer = 1;

    for (let i = numStr.length - 1; i >= 0; i--){

        if(numStr[i] !== "0"){
            expandedNum.push(parseInt(numStr[i]) * multiplayer);
        }

        multiplayer = multiplayer === 1 ? 10 : multiplayer * 10;
    }

    return expandedNum.reverse().join(" + ");
}