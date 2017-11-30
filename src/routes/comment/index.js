import {ScrollView} from 'components'
import LongComment from './LongComment'
import ShortComment from './ShortComment'

const Comment = () => {
  return (
    <ScrollView>
      <LongComment/>
      <ShortComment/>
    </ScrollView>
  )
}

export default Comment
