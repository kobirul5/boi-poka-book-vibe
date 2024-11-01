import { toast } from "react-toastify"

const getStoredReadList = () => {
    
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    {
        return []
    }

}

const addStoredReadList= (id) => {
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        console.log(id, "already book mark as read")
    }
    else{
        storedList.push(id)
        const listStoredStr = JSON.stringify(storedList)
        localStorage.setItem("read-list" ,listStoredStr) 
        toast("This book added to you read list")
    }
}
export {addStoredReadList, getStoredReadList}