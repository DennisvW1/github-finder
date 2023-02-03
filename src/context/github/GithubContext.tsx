import React, { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext({});

type Props = {
    children: any
}

type State = {
    users?: any[],
    user: {
        name?: string,
        type?: string,
        avatar_url?: string,
        location?: string,
        bio?: string,
        blog?: string,
        twitter_username?: string,
        login?: string,
        html_url?: string,
        followers?: number,
        following?: number
        public_repos?: number,
        public_gists?: number,
        hireable?: boolean
    },
    repos?: any[],
    isLoading: boolean
}

export const GithubProvider = ({ children }: Props) => {
    const initialState: State = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext