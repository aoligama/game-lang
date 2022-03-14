export enum Routes {
    HOME = 'Home',
    QUESTION = 'Question',
    LANGUAGE = 'Language',
    FINISHED = 'Finished',
    APP_ROUTE = 'AppRoute'
}

export type RootParamList = {
    [Routes.APP_ROUTE]: undefined
}
