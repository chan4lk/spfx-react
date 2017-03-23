import * as React from 'react';
import { connect } from 'react-redux';

import { IState } from '../store';
import { Rotator } from '../components';
import * as rotatorActions from '../actions';

const mapStateToProps = (state: IState) => ({
    caption: state.webpart.properties.caption,    
    items: state.webpart.items
});

const mapDispatchToProps = (dispatch) =>({
    actions :{
        apply: (props) => dispatch(rotatorActions.applyProperties(props)),
        update: (name, value) => dispatch(rotatorActions.updateProperty(name, value)),
        load: (type) => dispatch(rotatorActions.loadItems(type)),
        navigate: (url) => dispatch(rotatorActions.navigateToURL(url)),
    }
});

const DefaultContainer = ({ caption, items, actions }) => (
    <div>
        <Rotator items={items} caption={caption} navigate={actions.navigate} />
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(DefaultContainer);