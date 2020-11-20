import React from 'react'
import sections from './directory.data'
import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imgUrl={imageUrl} size={size} />
                    ))
                    
                }
            </div>
        )
    }
}

export default Directory
