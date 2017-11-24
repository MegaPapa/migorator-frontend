import React, { Component } from 'react';
import './FormError.css'

// NOW IS DEPRECATED
class FormError extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div className="form_error">
            {
                this.props.formError.map((fieldName, i) => {
                    if (fieldName.length > 0) {
                        return ""
                    } else {
                        return ""
                    }
                })
            }
        </div>
        );
    }
}

export default FormError;