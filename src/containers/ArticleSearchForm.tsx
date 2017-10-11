import * as React from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { AppState } from "../reducers/mobx";
import { FormEvent } from "react";

interface ArticleSearchFormProps {
    appState?: AppState;
}

@inject("appState")
@observer
class ArticleSearchForm extends React.Component<ArticleSearchFormProps, {}> {
    @observable inputText = "Oh shit";

    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>Or search for an article:</p>
                <input
                    type="text"
                    value={this.inputText}
                    onChange={this.onInputChange}
                />
            </form>
        );
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.appState!.searchArticles(this.inputText);
    }

    onInputChange = (e: any) => {
        this.inputText = e.currentTarget.value;
    }
}

export default ArticleSearchForm;