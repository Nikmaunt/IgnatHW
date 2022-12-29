const initState = {
    themeId: "1",
}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): any => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}


export type  ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: string
}


export const changeThemeId = (id: string): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
