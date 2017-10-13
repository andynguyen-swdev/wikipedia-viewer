import * as React from "react";
import {FormEvent} from "react";
import {action, observable} from "mobx";
import {inject, observer} from "mobx-react";
import {AppState} from "../reducers/mobx";
import * as _ from "lodash";
import "./styles/ArticleSearchForm.css";

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
        const appState = this.props.appState!;

        return (
            <form onSubmit={this.onSubmit} className="article-search-form">
                <label
                    className="article-search-form__title"
                    htmlFor="article-search-form__input"
                >
                    Or search for an article
                </label>
                <input
                    type="text"
                    value={this.inputText}
                    onChange={this.onInputChange}
                    className="article-search-form__input"
                    id="article-search-form__input"
                    onFocus={e => appState.setIsFocusingOnInput(true)}
                    onBlur={e => appState.setIsFocusingOnInput(false)}
                />
            </form>
        );
    }

    handleInputChange = () => {
        if (this.inputText.trim()) {
            this.throttledSearch();
        } else {
            this.props.appState!.searchArticles("");
        }
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.handleInputChange();
    }

    @action onInputChange = (e: any) => {
        this.inputText = e.currentTarget.value;
        this.handleInputChange();
    }
}

export default ArticleSearchForm;