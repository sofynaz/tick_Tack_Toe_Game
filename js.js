let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let msgCont = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('#newGame');
// to check whos turn like x or o;
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBox();
    msgCont.classList.add('hide')
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO) {
            box.innerText = '0';
            turnO = false;


        } else {
            box.innerText = 'x';
            turnO = true;
        }
        box.disabled = true;
        checkWinn();
    })

})

const showWinner = (winn) => {
    msg.innerText = `Congratulation, Winner is ${winn}`
    msgCont.classList.remove('hide')
    disableBox()

}
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const checkWinn = () => {
    for (let win of winPatterns) {
        // console.log([win[0]], [win[1]], [win[2]]);
        // console.log(boxes[win[0]].innerText,
        //     boxes[win[1]].innerText,
        //     boxes[win[2]].innerText);
        let postVal = boxes[win[0]].innerText;
        let posVal1 = boxes[win[1]].innerText;
        let posVal2 = boxes[win[2]].innerText;

        if (postVal !== '' && posVal1 !== '' && posVal2 !== '') {
            if (postVal === posVal1 && posVal1 === posVal2) {

                showWinner(postVal);
            }
        }
    }
     // Check for draw if no winner found
 if (checkDraw()) {
    msg.innerText = "It's a draw!";
    msgCont.classList.remove('hide');
    disableBox();
}
}

newGame.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)

const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === '') {
            return false; // If any box is empty, game is not draw
        }
    }
    return true; // If all boxes are filled and no winner found, game is draw
}


