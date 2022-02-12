/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Monday, February 7th 2022, 12:57:18 pm
 * Year 2022
 */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    /*
      constructor(props) {
          super(props);
          this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
          this.handlePick = this.handlePick.bind(this);
          this.handleAddOption = this.handleAddOption.bind(this);
          this.handleDeleteOption = this.handleDeleteOption.bind(this);
          this.state = {
              options: props.options
          }
      }
  */
    state = {
        options: [],
        selectedOption: undefined

    }
    // EVENT HANDLERS
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (opptoRemove) => {
        this.setState((prevS) => ({
            options: prevS.options.filter((op) => {
                return opptoRemove !== op;
            })
        }));
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    handleCloseModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));

    }
    handleAddOption = (option) => {
        /// FORM VALIDATION
        if (!option) {
            return "Enter valid value to add Item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This Item Already Exist";
        }
        this.setState((prevS) => ({ options: prevS.options.concat(option) }))
    }
    //LIFE CYCLE METHODS
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //DO NOTHING
        }
        console.log('Fetching Data');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Saving Data');
        }
    }
    componentWillUnmount() {
        console.log('UNMOUNTED');
    }


    /// RENDER
    render() {
        const subtitle = "Pay Attention to Your Emotions & trust the randomness of Computer systems";
        //const options = ["One thing", "Two thing", "Three things"];
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className='widget'>
                        <Options options={this.state.options}
                            deleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                    <OptionModal closeModal={this.handleCloseModal} selectedOption={this.state.selectedOption} />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['HELLO ', ' WORLD ']
}



