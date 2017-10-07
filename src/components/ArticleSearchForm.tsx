import * as React from "react";
import { connect } from "react-redux";
import { searchArticles } from "../actions/index";

interface ArticleSearchFormState {
    inputText: string;
}

interface ArticleSearchFormProps {
    onSubmit(query: string): void;
}

class ArticleSearchForm extends React.Component<ArticleSearchFormProps, ArticleSearchFormState> {
    constructor(props: any) {
        super(props);
        this.state = {inputText: ""};
    }

    onSubmit = (e: any) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputText);
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>Or search for an article:</p>
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={e => this.setState({inputText: e.currentTarget.value})}
                />
            </form>
        );
    }
}

const connected = connect(null, dispatch => ({
    onSubmit(query: string) {
        dispatch(searchArticles(query));
    }
}))(ArticleSearchForm);

export default connected;