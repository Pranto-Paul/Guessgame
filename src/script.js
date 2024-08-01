alert(`
    
    CAUTION:This game is so funcking addictive 😶‍🌫️
    `)
const guess = document.querySelector(".guess");
const submit_btn = document.querySelector(".btn");
const flag = document.querySelector(".flag");
const ul = document.querySelector("ul");


let guess_arr = [];
let GUESS_COUNT = 0;

function generateRandom(){
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    return randomNumber;
}

randomNumber = generateRandom();
console.log(randomNumber);

function resetGame(){
    let li = document.querySelectorAll('li');
    li.forEach(item => {
        item.remove();
    });
    while(guess_arr.length != 0){
        guess_arr.pop()
    }
    randomNumber = generateRandom();
    console.log(randomNumber);
    console.log(guess_arr);
    GUESS_COUNT = 0
    guess.disabled = false;
    submit_btn.disabled = false;
    console.log(guess_arr);
}

function game_over(){
    guess.disabled = true;
    submit_btn.disabled = true;
    alert("Game starting in 3 second")
    setTimeout(() => {
        resetGame();
    }, 3000);
}

function flag_update(FLAG){
    if (FLAG == "GAME OVER!"){
        flag.innerText = FLAG;
        flag.className = "bg-red-500 rounded-lg p-2 flag text-center font-semibold text-white py-3 cursor-default"
    }
    else if (FLAG == "LEFT"){
        flag.innerText = "Last guess was too low"
        flag.className = "bg-yellow-700 rounded-lg p-2 flag text-center font-semibold text-white py-3 cursor-default"

    }
    else if (FLAG == "RIGHT"){
        flag.innerText = "Last guess was too high"
        flag.className = "bg-purple-500 rounded-lg p-2 flag text-center font-semibold text-white py-3 cursor-default"

    }
    else if(FLAG == "CONGRATULATION"){
        flag.innerHTML = "CONGRATULATION!"
        flag.className = "bg-cyan-500 rounded-lg p-2 flag text-center font-semibold text-white py-3 cursor-default"

    }
}
function addLI(){
    const li = document.createElement("li");
    li.className = "hover:text-cyan-400 p-2 hover:-translate-y-2 duration-200 outline-none cursor-pointer";
    li.innerText = String(guess_arr[GUESS_COUNT]);
    ul.appendChild(li);

}

function game(num){
    if(!isNaN(num) && num != ''){
        guess_arr.push(num);
        addLI();
        GUESS_COUNT ++;
    }
    else{
        alert("Plese enter a valid number😑");
        return;
    }

    if(num == randomNumber){
        flag_update("CONGRATULATION");
        game_over();
    }
    else if(num > randomNumber){
        flag_update("RIGHT")
    }
    else if(num < randomNumber){
        flag_update("LEFT")
    }
    if(GUESS_COUNT == 10){
        flag_update("GAME OVER!");
        game_over();
    }

}








submit_btn.addEventListener('click',()=>{
    game(Number(guess.value));
})