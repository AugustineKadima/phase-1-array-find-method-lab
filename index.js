// code your solution here
function superbowlWin(record){
    
    return record.find((item)=>{
        if(item.result === "W"){
            return item = item["year"]
        }
    })
}