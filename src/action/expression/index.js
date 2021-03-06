import store from "../../Store"

export const EXPRESSION_UPDATE_ACTION = 'EXPRESSION_UPDATE_ACTION'
export const NEW_EXPRESSION_KEY = 'EXPRESSION_UPDATE_ACTION'

export const updateExpression = newExp => store.dispatch({
    type: EXPRESSION_UPDATE_ACTION,
    payload: {[NEW_EXPRESSION_KEY]: newExp}
})

export const expressionReducer = (state = 0 ,{type,payload})=>{
    switch(type){
        case EXPRESSION_UPDATE_ACTION:
            return (payload [NEW_EXPRESSION_KEY] || payload[NEW_EXPRESSION_KEY] === 0)
                ? [NEW_EXPRESSION_KEY] 
                : state;

        default:
            return state;
    }
}