
import { css } from 'styled-components'

import {

  FontSize, FontWeightLighter, FontWeightNormal, FontWeightBold

} from '@components/assets/props/exclusives-props-text-css'

const exclusivesPropsText = css`

    /* Font Size */
    ${props => props.fontSize && css` ${FontSize} `}
   
    /* Font Weight */
    ${props => props.fontWeightLighter && css` ${FontWeightLighter} `}
    ${props => props.fontWeightNormal && css` ${FontWeightNormal} `}
    ${props => props.fontWeightBold && css` ${FontWeightBold} `}
`

export default exclusivesPropsText
