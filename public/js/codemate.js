const questions = document.querySelector('.questions')
const next = document.querySelector('.icon')

//Question Database
const list = [
    {
        questionID : 1,
        questionHeading: "ATM",
        questionContent: "Pooja would like to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, and Pooja's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US. Calculate Pooja's account balance after an attempted transaction.",
        questionInputContent : "Positive integer 0 < X <= 2000 - the amount of cash which Pooja wishes to withdraw. Nonnegative number 0<= Y <= 2000 with two digits of precision - Pooja's initial account balance.",
        questionOutputContent: "Output the account balance after the attempted transaction, given as a number with two digits of precision. If there is not enough money in the account to complete the transaction, output the current bank balance.",
        questionConstraints: "0 < X <= 2000, 0<= Y <= 2000",
        questionTestInput: "30 120.00", 
        questionTestOutput: "89.50"
    },
    {
        questionID: 2,
        questionHeading: "Number Mirror",
        questionContent: "Write a program that accepts a number, n, and outputs the same.",
        questionInputContent: "The only line contains a single integer.",
        questionOutputContent: "Output the answer in a single line.",
        questionConstraints: "0 ≤ n ≤ 10^5",
        questionTestInput: "123",
        questionTestOutput: "123"
    },
    {
        questionID: 3,
        questionHeading: "Add two numbers",
        questionContent: "Shivam is the youngest programmer in the world, he is just 12 years old. Shivam is learning programming and today he is writing his first program. The task is very simple: given two integers A and B, write a program to add these two numbers and output it.",
        questionInputContent: "The first line contains an integer T, the total number of test cases. Then follow T lines, each line contains two Integers A and B.",
        questionOutputContent: "For each test case, add A and B and display the sum in a new line.",
        questionConstraints: "1 ≤ T ≤ 1000 \n 0 ≤ A,B ≤ 10000",
        questionTestInput: "3\n 1 2 \n100 200 \n10 40",
        questionTestOutput: "3 \n 300 \n 50"
    },
    {
        questionID: 4,
        questionHeading: "Sum of Digits",
        questionContent: "You're given an integer N. Write a program to calculate the sum of all the digits of N.",
        questionInputContent: "The first line contains an integer T, the total number of testcases. Then follow T lines, each line contains an integer N.",
        questionOutputContent: "For each test case, calculate the sum of digits of N, and display it in a new line.",
        questionConstraints: "1 ≤ T ≤ 1000 \n 1 ≤ N ≤ 1000000",
        questionTestInput: "3 \n 12345 \n 31203 \n 2123",
        questionTestOutput: "15 \n 9 \n 8"
    },
    {
        questionID: 5,
        questionHeading: "Find Remainder",
        questionContent: "Write a program to find the remainder when an integer A is divided by an integer B.",
        questionInputContent: "The first line contains an integer T, the total number of test cases. Then T lines follow, each line contains two Integers A and B.",
        questionOutputContent: "For each test case, find the remainder when A is divided by B, and display it in a new line.",
        questionConstraints: "1 ≤ T ≤ 1000 \n 1 ≤ A,B ≤ 10000",
        questionTestInput: "3 \n 1 2 \n 100 200 \n 40 15",
        questionTestOutput: "1 \n 100 \n 10"
    },
    {
        questionID: 6,
        questionHeading: "First and Last Digit",
        questionContent: "If Give an integer N . Write a program to obtain the sum of the first and last digits of this number.",
        questionInputContent: "The first line contains an integer T, the total number of test cases. Then follow T lines, each line contains an integer N.",
        questionOutputContent: "For each test case, display the sum of first and last digits of N in a new line",
        questionConstraints: "1 ≤ T ≤ 1000 \n 1 ≤ N ≤ 1000000",
        questionTestInput: "3 \n 1234 \n 124894 \n 242323",
        questionTestOutput: "5 \n 5 \n 5"
    },
    {
        questionID: 7,
        questionHeading: "Small factorials",
        questionContent: "You are asked to calculate factorials of some small positive integers.",
        questionInputContent: "An integer t, 1<=t<=100, denoting the number of testcases, followed by t lines, each containing a single integer n, 1<=n<=100.",
        questionOutputContent: "For each integer n given at input, display a line with the value of n!",
        questionConstraints: "1<=t<=100 \n 1<=n<=100",
        questionTestInput: "4 \n 1 \n 2 \n 5 \n 3",
        questionTestOutput: "1 \n 2 \n 120 \n 6"
    },
    {
        questionID: 8,
        questionHeading: "Turbo Sort",
        questionContent: "Given the list of numbers, you are to sort them in non decreasing order.",
        questionInputContent: "t – the number of numbers in list, then t lines follow [t <= 10^6]. Each line contains one integer: N [0 <= N <= 10^6]",
        questionOutputContent: "Output given numbers in non decreasing order.",
        questionConstraints: "t <= 10^6 \n 0 <= N <= 10^6",
        questionTestInput: "5 \n 5 \n 3 \n 6 \n 7 \n 1",
        questionTestOutput: "1 \n 3 \n 5 \n \n 7"
    },
    {
        questionID: 9,
        questionHeading: "Reverse the Number",
        questionContent: "Given an Integer N, write a program to reverse it.",
        questionInputContent: "The first line contains an integer T, total number of testcases. Then follow T lines, each line contains an integer N.",
        questionOutputContent: "For each test case, display the reverse of given number N, in a new line",
        questionConstraints: "1 ≤ T ≤ 1000 \n 1 ≤ N ≤ 1000000",
        questionTestInput: "4 \n 12345 \n 31203 \n 2123 \n 2300",
        questionTestOutput: "54321 \n 30213 \n 3212 \n 32"
    },
    {
        questionID: 10,
        questionHeading: "Helping Chef",
        questionContent: "Write a program, which takes an integer N and if the number is less than 10 then display \"Thanks for helping Chef!\" otherwise print \"-1\".",
        questionInputContent: "The first line contains an integer T, total number of testcases. Then follow T lines, each line contains an integer N.",
        questionOutputContent: "For each test case, output the given string or -1 depending on conditions, in a new line.",
        questionConstraints: "1 ≤ T ≤ 1000 \n -20 ≤ N ≤ 20",
        questionTestInput: "3 \n 1 \n 12 \n -5",
        questionTestOutput: "Thanks for helping Chef! \n -1 \n Thanks for helping Chef!"
    },
]


questions.innerHTML= `<div class="ques-desc">
                        <h5>Question</h5>
                        ${list[0].questionContent}
                        </div>
                        <br>
                        <div class="ques-input">
                        <h6>Input</h6>
                        ${list[0].questionInputContent}
                        </div>
                        <br>
                        <div class="ques-output">
                        <h6>Output</h6>
                        ${list[0].questionOutputContent}
                        </div>
                        <br>
                        <div class="ques-constraints">
                        <h6>Constraints</h6>
                        ${list[0].questionConstraints}
                        </div>
                        <br>
                        <div class="test-input">
                        <h6>Test input</h6>
                        ${list[0].questionTestInput}
                        </div>
                        <br>
                        <div class="test-output">
                        <h6>Test output</h6>
                        ${list[0].questionTestOutput}
                        </div>`


let i=1                        
next.addEventListener("click", ()=> {
    let html = ''
    html += `<div class="ques-desc">
                <h5>Question</h5>
                ${list[i].questionContent}
            </div>
            <br>
            <div class="ques-input">
                <h6>Input</h6>
                ${list[i].questionInputContent}
            </div>
            <br>
            <div class="ques-output">
                <h6>Output</h6>
                ${list[i].questionOutputContent}
            </div>
            <br>
            <div class="ques-constraints">
                <h6>Constraints</h6>
                ${list[i].questionConstraints}
            </div>
            <br>
            <div class="test-input">
                <h6>Test input</h6>
                ${list[i].questionTestInput}
            </div>
            <br>
            <div class="test-output">
                <h6>Test output</h6>
                ${list[i].questionTestOutput}
            </div>`

    questions.innerHTML = html
    i++
    
    if(i==9) {
        i=0
    }
})



/* --------------------------------------------------------------------- */

const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener("click", async()=> {
    const language = document.querySelector('.languages').value
    const code = document.querySelector('.editor-area').value
    const input = document.querySelector('.input-area').value
    const output = document.querySelector('.output-area')

    const data = JSON.stringify({
        code: `${code}`,
        language: `${language}`,
        input: `${input}`
        });

    fetch(`/answer?submit=${data}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.error) {
            output.innerHTML = data.error
        }
        else {
            output.innerHTML = data.output.output
        }
    })


})
