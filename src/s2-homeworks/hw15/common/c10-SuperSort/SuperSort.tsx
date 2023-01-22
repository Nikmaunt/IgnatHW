import React from 'react'

// добавить в проект иконки и импортировать

const downIcon = 'https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
const upIcon = 'https://cdn2.iconfinder.com/data/icons/arrows-356/24/top_arrow-512.png'
const noneIcon = 'https://seekicon.com/free-icon-download/arrows-sort_1.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    return sort === down ? up : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img style={{width: '15px', height: '15px'}}
                 id={id + '-icon-' + sort}
                 src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
