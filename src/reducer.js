const initialStateContact = {
    items:[]
}

export const contactReducer = (state=initialStateContact, action={})=>{
    switch(action.type){
        case "Click_SignIn" :
        return Object.assign({},state,{items:action.payload});
        default:
        return state
    }   
}