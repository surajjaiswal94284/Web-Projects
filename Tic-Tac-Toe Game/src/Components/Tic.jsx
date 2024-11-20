import React, { useState} from "react";
import './Tic.css';
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'


let data=["","","","","","","","",""];


const Tic=()=>{
    let [count,setCount]=useState(0);//This variable is used to track the number of moves played in the game 
    let [lock,setLock]=useState(false); //This is used to stop the game
   
    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2==0){ //even='X'
            e.target.innerHTML=`<img src=${cross}>`;
            data[num]="X";
            setCount(count+1);
        }else{ //odd='O'
                e.target.innerHTML=`<img src=${circle}>`;
                data[num]="O";
                setCount(count+1);
            }
            checkWin();
        }

        const checkWin=()=>{
            if(data[0]==data[1] && data[1]==data[2] && data[2]!=""){
                won(data[2])
            }else if(data[3]==data[4] && data[4]==data[5] && data[5]!=""){
                won(data[5]);
            }else if(data[6]==data[7] && data[7]==data[8] && data[8]!=""){
                won(data[8]);
            }else if(data[0]==data[3] && data[3]==data[6] && data[6]!=""){
                won(data[6]);
            }else if(data[1]==data[4] && data[4]==data[7] && data[7]!=""){
                won(data[7]);
            }else if(data[2]==data[5] && data[5]==data[8] && data[8]!=""){
                won(data[8]);
            }else if(data[0]==data[4] && data[4]==data[8] && data[8]!=""){
                won(data[8]);
            }else if(data[2]==data[4] && data[4]==data[6] && data[6]!=""){
                won(data[6]);
            }
        }
        let h1=document.querySelector("h1");
        const won=(winner)=>{
            setLock(true);
            
            if(winner=="X"){
                h1.innerHTML="";
                h1.innerHTML=`Congratulations: <img src=${cross}> won` ;
            }else{
                h1.innerHTML="";
                h1.innerHTML=`Congratulations: <img src=${circle}> won` ;
            }

        }

        const reset = () => {
            data = ["", "", "", "", "", "", "", "", ""];
            setCount(0);
            setLock(false);
            h1.innerHTML = "Tic Tac Toe <span>Game</span>";
            let boxes = document.querySelectorAll(".box");
            boxes.forEach(box => {
                box.innerHTML = "";
            });
        }

    return(
        <div className="container">
            <h1>Tic Tac Toe <span>Game</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="box" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,2)}}></div>
                </div>

                <div className="row2">
                    <div className="box" onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,5)}}></div>
                </div>

                <div className="row3">
                    <div className="box" onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="box" onClick={(e)=>{toggle(e,8)}}></div>
                </div>


            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Tic

