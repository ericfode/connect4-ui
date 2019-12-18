import { InitialReducer } from '/reducers/initial';
import { ConfigReducer } from '/reducers/config';
import { UpdateReducer } from '/reducers/update';


class Store {
    constructor() {
        this.state = {
            inbox: {},
            board: {board: Array(6).fill().map(arr => Array(7).fill("empty")) ,
                    players: {a: 'null', b: 'null',
                    curplayer: 'a'
                }
        }
        };

        this.initialReducer = new InitialReducer();
        this.configReducer = new ConfigReducer();
        this.updateReducer = new UpdateReducer();
        this.setState = () => { };
    }

    setStateHandler(setState) {
        this.setState = setState;
    }

    handleEvent(data) {
        let json = data.data;

        console.log(json);
        this.initialReducer.reduce(json, this.state);
        this.configReducer.reduce(json, this.state);
        this.updateReducer.reduce(json, this.state);

        this.setState(this.state);
    }
}

export let store = new Store();
window.store = store;