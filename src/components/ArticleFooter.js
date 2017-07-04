import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigateBefore, NavigateNext, Share, ModeEdit } from 'material-ui-icons';

import './ArticleFooter.css';

/**
 * 
 */
export default class ArticleFooter extends Component {
    static propTypes = {
        country: PropTypes.string,
        match: PropTypes.shape({
            pathName: PropTypes.string
        }),
        previous: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string
        }),
        next: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string
        }),
    }

    render() {
        const rtl = false;
        const { previous, next, country, onNavigateTo } = this.props;

        return (<div className="ArticleFooter">
            {previous && <div className="selector" onTouchTap={() => {
                onNavigateTo(country, previous.slug);
            }}>
                <h1>
                    <small>PREVIOUS PAGE:</small>
                    {previous.title}
                </h1>
                {!rtl ? <NavigateBefore className="icon" /> : <NavigateNext className="icon" />}
            </div>}
            {previous && <hr />}
            {next && <div className="selector" onTouchTap={() => {
                onNavigateTo(country, next.slug);
            }}>
                <h1>
                    <small>NEXT PAGE:</small>                    
                    {next.title}
                </h1>
                {!rtl ? <NavigateNext className="icon" /> : <NavigateBefore className="icon" />}
            </div>}
            {next && <hr />}
            <div className="selector">
                <h1>Share this page</h1>
                <Share className="icon" />
            </div>
            <hr />
            <div className="selector">
                <h1>Suggest changes to this page</h1>
                <ModeEdit className="icon" />
            </div>
        </div>);
    }
}