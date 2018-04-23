import React from 'react';
import addTimeIn from './connectblockchain'; 
import FileBase64 from 'react-file-base64';

export default class Contact extends React.Component {
    
    state = {
        files: []
    }

    handleAddOption = (e) => {
        e.preventDefault();

        let option = e.target.elements.alumni.value.trim();
        
        const value = addTimeIn(option, this.state.files[0].base64);
        console.log(value);
    };

    getFiles = (files) => {
        this.setState({ files: files })
        console.log(files);

        console.log(this.state.files[0].base64);
    }

    render() {
        return (
            <div>
                <h1>Contact Me</h1>
                <p>reach me at kyle.cnate@gmail.com</p>
                <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="input" type="text" name="alumni"/>
                <button className="button">Send</button>
                </form>
                <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
                {
                    this.state.files.map((file, index) => (
                    <img
                        key={index}
                        src={file.base64}
                    />
                    ))
                }
            </div>
        );
    }
}

// const Contacts = () => (
    
// );

