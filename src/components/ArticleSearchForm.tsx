import * as React from "react";

interface ArticleSearchFormState {
    inputText: string;
}

class ArticleSearchForm extends React.Component<{}, ArticleSearchFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {inputText: ""};
    }

    render() {
        return (
            <form action="">
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

export default ArticleSearchForm;