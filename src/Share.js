import React, {Component} from 'react';
import './Share.css';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: '',
            urlPath: '',
        };
    }

    handleDestChange(d) {
        this.setState ({
            destination: d.target.value
        });
    }

    handleUrlPath(p) {
        this.setState ({
            urlPath: p.target.value
        });
    }

    handleUpload(e) {
        e.preventDefault();
        this.props.onAddTripCard(this.state.urlPath, this.state.destination);
        this.setState({
            urlPath: '',
            destination: ''
        });
    }

    render() {
        return(
            <div className='Share-container'>
                <form className='Share-form'
                      onSubmit={this.handleUpload.bind(this)} >
                    <input className='Share-destination'
                            type='text'
                            placeholder='Where did you visit?'
                            value={this.state.destination}
                            onChange={this.handleDestChange.bind(this)} />
                    <input className='Share-photo'
                         input='text'
                         placeholder='Input image url here' 
                         onChange={this.handleUrlPath.bind(this)}
                         value={this.state.urlPath}>
                    </input>
                    <button className='Share-btn' >
                        Share Now!
                    </button>
                </form>
            </div>
        );
    }

} 

export default Share;