import Constants from '../../helpers/Constants'


const INITIAL_STATE = {
    cars: [{
        name: 'Ferrari',
        url:
            'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'Mercedes',
        url:
            'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
        name: 'Audi',
        url:
            'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }]
}

//* a função tem que ter esse nome, reducer()
//* por padrão, esse função recebe um state e um action
//* state = [], isso é pra não quebrar o reducer, dá problemas e tal.
export default function reducer(state = INITIAL_STATE, action = null) {

    switch (action.type) {
        case Constants.CAR.ADD:
            return { ...state, cars: [...state.cars, action.payload] }
        default:
            return state;
    }

}
