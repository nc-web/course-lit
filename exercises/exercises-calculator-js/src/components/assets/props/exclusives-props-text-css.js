
import { css } from 'styled-components'

// ==== FontSize ====
// export const textBase = css` font-size: 2.7rem; margin: 0px; padding: 0px;`

export const FontSize = css` font-size: ${props => props.fontSize}; `

// ===== Font Weight ====
export const FontWeightLighter = css` font-weight: lighter; `
export const FontWeightNormal = css` font-weight: normal; `
export const FontWeightBold = css` font-weight: bold; `
