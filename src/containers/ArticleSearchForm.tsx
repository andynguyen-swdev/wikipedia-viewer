import * as React from "react";
import {FormEvent} from "react";
import {action, observable} from "mobx";
import {inject, observer} from "mobx-react";
import {AppState} from "../reducers/mobx";
import * as _ from "lodash";

interface ArticleSearchFormProps {
    appState?: AppState;
}

@inject("appState")
@observer
class ArticleSearchForm extends React.Component<ArticleSearchFormProps, {}> {
    @observable inputText = "";

    throttledSearch = _.throttle(() => {
        this.props.appState!.searchArticles(this.inputText.trim());
    }, 1000);

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

    handleInput = () => {
        if (this.inputText.trim()) {
            this.props.appState!.setIsFetching(true);
            this.throttledSearch();
        }
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.handleInput();
    }

    @action onInputChange = (e: any) => {
        this.inputText = e.currentTarget.value;
        this.handleInput();
    }
}

export default ArticleSearchForm;