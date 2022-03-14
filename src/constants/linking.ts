// eslint-disable-next-line import/no-extraneous-dependencies
import { PathConfigMap } from '@react-navigation/core'
import { Routes } from './navigation'

export const APP_DEEP_LINK = 'game-lang://'
export const NAVIGATION_LINKING_PREFIXES = [
    APP_DEEP_LINK,
    'Config.DOMAIN_URL(after app registering)',
]

export enum LinkingPaths {
    HOME = 'home',
    QUESTION = 'question',
    FINISHED = 'finished'
}

export const screens: PathConfigMap = {
    [Routes.HOME]: LinkingPaths.HOME,
    [Routes.QUESTION]: LinkingPaths.QUESTION,
    [Routes.FINISHED]: LinkingPaths.FINISHED
}
