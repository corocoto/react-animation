import React, {Component} from "react";
import { Transition } from 'react-transition-group';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false,
            showBlock: false
        };
    }

    showModal = () => this.setState((prevState) => {
        return prevState.isShowModal ? null : {isShowModal: true};
    });

    closeModal = () => this.setState((prevState) => {
        return prevState.isShowModal ? {isShowModal: false} : null;
    });

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <Transition
                    in={this.state.isShowModal}
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => <Modal
                        show={state}
                        closed={this.closeModal}
                    />}
                </Transition>
                {this.state.isShowModal ? <Backdrop show={this.state.isShowModal}/> : null}
                <button
                    className="Button"
                    onClick={this.showModal}
                >Open Modal
                </button>
                <h3>Animating Lists</h3>
                <List/>
            </div>
        );
    }
}

export default App;
