
import { css } from 'styled-components'

// Props base
import {
  BorderNone, BorderTop, BorderBottom, BorderLeft, BorderRight,
  BorderRadius, BorderRadiusTL, BorderRadiusTR, BorderRadiusBL, BorderRadiusBR,
  Bottom,
  BoxShadowTR1, BoxShadowTR2, BoxShadowTL1, BoxShadowTL2, BoxShadowBR1, BoxShadowBR2, BoxShadowBL1, BoxShadowBL2,
  CursorPointer,
  Left,
  Margin, MarginX, MarginY, MarginT, MarginR, MarginB, MarginL,
  Padding, PaddingX, PaddingY, PaddingT, PaddingR, PaddingB, PaddingL,
  PositionAbsolute, PositionFixed, PositionInherit, PositionInitial, PositionRelative, PositionStatic, PositionSticky, PositionUnset,
  Right,
  TextCenter, TextLeft, TextRight,
  Top,
  ZIndex

}
  from '@components/assets/props/global-props-css'

const propsBase = css`
        /* ==================== PROPS BASE ==================== */

        /* BORDER */
        ${props => props.borderNone && css` ${BorderNone} `}
        ${props => props.borderTop && css` ${BorderTop} `}
        ${props => props.borderBottom && css` ${BorderBottom} `}
        ${props => props.borderLeft && css` ${BorderLeft} `}
        ${props => props.borderRight && css` ${BorderRight} `}

        /* CURSOR POINTER */
        ${props => props.cursorPointer && css` ${CursorPointer}`}

        /* TEXT CENTER */
        ${props => props.textCenter && css` ${TextCenter} `}
        ${props => props.textLeft && css` ${TextLeft} `}
        ${props => props.textRight && css` ${TextRight} `}

        /* TOP */
        ${props => props.top && css` ${Top} `}

        /* BORDER RADIUS */
        /* Border Radius all */
        ${props => props.borderRadius && css` ${BorderRadius} `}
        /* Border Radius TL */
        ${props => props.borderRadiusTL && css` ${BorderRadiusTL} `}
        /* Border Radius TR */
        ${props => props.borderRadiusTR && css` ${BorderRadiusTR} `}
        /* Border Radius BL */
        ${props => props.borderRadiusBL && css` ${BorderRadiusBL} `}
         /* Border Radius BR */
         ${props => props.borderRadiusBR && css` ${BorderRadiusBR} `}

        /* BOTTOM */
        ${props => props.bottom && css` ${Bottom} `}

        /* BOX SHADOW */    
        ${props => props.boxShadowBR1 && css` ${BoxShadowBR1} `}
        ${props => props.boxShadowBR2 && css` ${BoxShadowBR2} `}
        ${props => props.boxShadowBL1 && css` ${BoxShadowBL1} `}
        ${props => props.boxShadowBL2 && css` ${BoxShadowBL2} `}
        ${props => props.boxShadowTR1 && css` ${BoxShadowTR1} `}
        ${props => props.boxShadowTR2 && css` ${BoxShadowTR2} `}
        ${props => props.boxShadowTL1 && css` ${BoxShadowTL1} `}
        ${props => props.boxShadowTL2 && css` ${BoxShadowTL2} `}

        /* LEFT */
        ${props => props.left && css` ${Left} `}

        /* RIGHT */
        ${props => props.right && css` ${Right} `}

        /* POSITION */ 
        ${props => props.positionAbsolute && css` ${PositionAbsolute} `}
        ${props => props.positionFixed && css` ${PositionFixed} `}
        ${props => props.positionRelative && css` ${PositionRelative} `}
        ${props => props.positionStatic && css` ${PositionStatic} `}
        ${props => props.positionSticky && css` ${PositionSticky} `}
        ${props => props.positionInherit && css` ${PositionInherit} `}
        ${props => props.positionInitial && css` ${PositionInitial} `}
        ${props => props.positionUnset && css` ${PositionUnset} `}

        /* MARGINS */
        /* Margin - Margin All */
        ${props => props.margin && css` ${Margin} `}
        /* MarginX - Eje X */
        ${props => props.marginX && css` ${MarginX} `}
        /* MarginY - Margin eje Y */
        ${props => props.marginY && css` ${MarginY} `}
        /* MarginT - Margin Top */
        ${props => props.marginT && css` ${MarginT} `}
        /* MarginR - Margin Right */
        ${props => props.marginR && css` ${MarginR} `}
        /* MarginB - Margin Bottom */
        ${props => props.marginB && css` ${MarginB} `}
        /* MarginL - Margin Left */
        ${props => props.marginL && css` ${MarginL} `}

        /* PADDING */
        /* Padding - Padding All */
        ${props => props.padding && css` ${Padding} `}
        /* PaddingX - Padding eje X */
        ${props => props.paddingX && css` ${PaddingX} `}
        /* PaddingY - Padding eje Y */
        ${props => props.paddingY && css` ${PaddingY} `}
        /* PaddingR - Padding right */
        ${props => props.paddingR && css` ${PaddingR} `}
        /* PaddingL - Padding left */
        ${props => props.paddingL && css` ${PaddingL} `}
        /* PaddingT - Padding top */
        ${props => props.paddingT && css` ${PaddingT} `}
        /* PaddingB - Padding bottom */
        ${props => props.paddingB && css` ${PaddingB} `}
        
        /* Z-INDEX */
        ${props => props.zIndex && css` ${ZIndex} `}
        /* ==================== PROPS BASE ==================== */

    `

export default propsBase
