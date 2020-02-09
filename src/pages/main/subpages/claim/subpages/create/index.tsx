import * as React from 'react'
import Create from './containers/create.container'

class CreateMain extends React.Component<any, any> {
    render () {
        return <Create  {...this.props} />
    }
}

export default CreateMain