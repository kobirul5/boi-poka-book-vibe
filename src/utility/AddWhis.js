
const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    {
        return []
    }

}

const addStoredWishList= (id) => {
    const storedList = getStoredWishList()
    if(storedList.includes(id)){
        console.log(id, "already book mark as Wish")
    }
    else{
        storedList.push(id)
        const listStoredStr = JSON.stringify(storedList)
        localStorage.setItem("wish-list" ,listStoredStr) 
    }
}
export {addStoredWishList}