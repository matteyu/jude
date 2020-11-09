import { exec } from "https://deno.land/x/exec/mod.ts";
import { catCommands } from "./commands.ts"



// @desc    Play a song
// @route   GET /song
const getSong = async({ response }: { response: any }) => {
    try{
        Deno.run({
            cmd: catCommands[0].command.split(" ")
        })
    }
    catch(e){
        console.log(e)
    }
}

// @desc    Open up cats in firefox
// @route   GET /cats
const getProjectCats = async({ response }: { response: any }) => {
    try{
        for(var i:number = 1; i< catCommands.length; i++){
            await exec(catCommands[i].command)
        }
    }
    catch(e){
        console.log(e)
    }

}

export { getProjectCats, getSong };
