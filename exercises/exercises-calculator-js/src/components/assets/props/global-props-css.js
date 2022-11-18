
import { css } from 'styled-components'

// ========================= BORDER =============================
// ========================= NO BORDER ========================
export const BorderNone = css` border: none; `

// ========================= BORDER TOP ========================
export const BorderTop = css` border: none; border-top: solid .5px #757575; `

// ========================= BORDER BOTTOM ========================
export const BorderBottom = css` border: none; border-bottom: solid .5px #757575; `

// ========================= BORDER LEFT ========================
export const BorderLeft = css`border: none; border-left: solid .5px #757575; `

// ========================= BORDER RIGHT ========================
export const BorderRight = css` border: none; border-right: solid .5px #757575; `

// ========================= BORDER RADIUS =============================
// Radius all
export const BorderRadius = css` border-radius: ${props => props.borderRadius}; `

// Radius TL
export const BorderRadiusTL = css` border-top-left-radius: ${props => props.borderRadiusTL}; `

// Radius TR
export const BorderRadiusTR = css` border-top-right-radius: ${props => props.borderRadiusTR}; `

// Radius BL
export const BorderRadiusBL = css` border-bottom-left-radius: ${props => props.borderRadiusBL}; `

// Radius BR
export const BorderRadiusBR = css` border-bottom-right-radius: ${props => props.borderRadiusBR}; `

// ========================= CURSOR POINTER =============================
export const CursorPointer = css`cursor: pointer;`

// ========================= POSITIONS =============================
export const PositionAbsolute = css` position: absolute; `
export const PositionFixed = css` position: fixed; `
export const PositionRelative = css` position: relative; `
export const PositionStatic = css` position: static; `
export const PositionSticky = css` position: sticky; `
export const PositionInherit = css` position: inherit; `
export const PositionInitial = css` position: initial; `
export const PositionUnset = css` position: unset; `

// ========================= SHADOW =============================
export const BoxShadowBR1 = css` box-shadow: .063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBR2 = css` box-shadow: .125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL1 = css` box-shadow: -.063rem .125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowBL2 = css` box-shadow: -.125rem .188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR1 = css` box-shadow: .063rem -.125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTR2 = css` box-shadow: .125rem -.188rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL1 = css` box-shadow: -.063rem -.125rem .063rem .063rem rgba(0, 0, 0, 0.1); `
export const BoxShadowTL2 = css` box-shadow: -.125rem -.188rem .063rem .063rem rgba(0, 0, 0, 0.1); `

// ========================= TEXT ALING ============================
// Text aling center
export const TextCenter = css`
    text-align: center;
`
// Text aling left
export const TextLeft = css`
    text-align: left;
`
// Text aling right
export const TextRight = css`
    text-align: right;
`

// ======================== POSITIONS ==============================
// Top
export const Top = css` top: ${props => props.top}; `

// Bottom
export const Bottom = css` bottom: ${props => props.bottom}; `

// Left
export const Left = css` left: ${props => props.left}; `

// Right
export const Right = css` right: ${props => props.right}; `

// ========================= MARGINS ============================
// MarginAuto - Margin Auto
export const MarginAuto = css` margin: auto;`
// Margin - Margin All
export const Margin = css` margin: ${props => props.margin};`

// MarginX - Margin eje X
export const MarginX = css` margin-left: ${props => props.marginX}; margin-right: ${props => props.marginX}; `

// MarginY - Margin eje Y
export const MarginY = css` margin-top: ${props => props.marginY}; margin-bottom: ${props => props.marginY}; `

// MarginT - Margin Top
export const MarginT = css` margin-top: ${props => props.marginT}; `

// MarginR - Margin right
export const MarginR = css` margin-right: ${props => props.marginR}; `

// MarginB - Margin bottom
export const MarginB = css` margin-bottom: ${props => props.marginB}; `

// MarginL - Margin left
export const MarginL = css` margin-left: ${props => props.marginL}; `

// ======================== PADDING ==============================
// Padding - Padding All
export const Padding = css` padding: ${props => props.padding}; `

// PaddingX - Padding eje X
export const PaddingX = css` padding-right: ${props => props.paddingX}; padding-left: ${props => props.paddingX}; `

// PaddingY - Padding eje Y
export const PaddingY = css` padding-top: ${props => props.paddingY}; padding-bottom: ${props => props.paddingY}; `

// PaddingT - Padding top
export const PaddingT = css` padding-top: ${props => props.paddingT}; `

// PaddingR - Padding right
export const PaddingR = css` padding-right: ${props => props.paddingR}; `

// PaddingB - Padding bottom
export const PaddingB = css` padding-bottom: ${props => props.paddingB}; `

// PaddingL - Padding left
export const PaddingL = css` padding-left: ${props => props.paddingL}; `

// ======================== Z-INDEX ==============================
export const ZIndex = css` z-index: ${props => props.zIndex}; `
