//* Fiz desse jeito pra organizar melhor
import Constans from '../helpers/Constants'

export const add = car => dispatch => {
    //* Por obrigação deve ter uma propriedade type, com o valor ADD_CAR.
    //* Payload é mais uma convensão mesmo.
    return dispatch({
        type: Constans.CAR.ADD,
        payload: car
    })
}

export default {
    add
}