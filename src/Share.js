import React from 'react';
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

    handleUpload() {
        this.props.onAddTripCard(this.state.url);
        this.setState({
            url: ''
        });
    }

    render() {
        return(
            <div className='Share-container'>
                <form className='Share-form' >
                    <input className='Share-destination'
                            type='text'
                            placeholder='Where did you visit?'
                            value={this.state.destination}
                            onChange={this.handleDestChange.bind(this)} />
                    <img className='Share-photo'
                         src={this.handleUrlPath.bind(this)} />
                    <button className='Share-btn'
                            onClick={this.handleUpload.bind(this)} >
                        Share Now!
                    </button>
                </form>
            </div>
        );
    }

} 

export default Share;