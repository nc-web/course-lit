
import { css } from 'styled-components'

// Colors System
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  gray,
  blueGray,
  white,
  black
} from './colors-system'

const colorsBG = css`

    /* ============================== COLORS ================================= */
    /* White */
    ${props => props.bgWhite && css` background-color: ${white}; `}
    
    /* Black */
    ${props => props.bgBlack && css` background-color: ${black}; `}
    /* Red */
    ${props => props.bgRed50 && css` background-color: ${red[50]}; `}
    ${props => props.bgRed100 && css` background-color: ${red[100]}; `}
    ${props => props.bgRed200 && css` background-color: ${red[200]}; `}
    ${props => props.bgRed300 && css` background-color: ${red[300]}; `}
    ${props => props.bgRed400 && css` background-color: ${red[400]}; `}
    ${props => props.bgRed500 && css` background-color: ${red[500]}; `}
    ${props => props.bgRed600 && css` background-color: ${red[600]}; `}
    ${props => props.bgRed700 && css` background-color: ${red[700]}; `}
    ${props => props.bgRed800 && css` background-color: ${red[800]}; `}
    ${props => props.bgRed900 && css` background-color: ${red[900]}; `}
    ${props => props.bgRedA100 && css` background-color: ${red.a100}; `}
    ${props => props.bgRedA200 && css` background-color: ${red.a200}; `}
    ${props => props.bgRedA400 && css` background-color: ${red.a400}; `}
    ${props => props.bgRedA700 && css` background-color: ${red.a700}; `}

    /* Pink */
    ${props => props.bgPink50 && css` background-color: ${pink[50]}; `}
    ${props => props.bgPink100 && css` background-color: ${pink[100]}; `}
    ${props => props.bgPink200 && css` background-color: ${pink[200]}; `}
    ${props => props.bgPink300 && css` background-color: ${pink[300]}; `}
    ${props => props.bgPink400 && css` background-color: ${pink[400]}; `}
    ${props => props.bgPink500 && css` background-color: ${pink[500]}; `}
    ${props => props.bgPink600 && css` background-color: ${pink[600]}; `}
    ${props => props.bgPink700 && css` background-color: ${pink[700]}; `}
    ${props => props.bgPink800 && css` background-color: ${pink[800]}; `}
    ${props => props.bgPink900 && css` background-color: ${pink[900]}; `}
    ${props => props.bgPinkA100 && css` background-color: ${pink.a100}; `}
    ${props => props.bgPinkA200 && css` background-color: ${pink.a200}; `}
    ${props => props.bgPinkA400 && css` background-color: ${pink.a400}; `}
    ${props => props.bgPinkA700 && css` background-color: ${pink.a700}; `}

    /* Purple */
    ${props => props.bgPurple50 && css` background-color: ${purple[50]}; `}
    ${props => props.bgPurple100 && css` background-color: ${purple[100]}; `}
    ${props => props.bgPurple200 && css` background-color: ${purple[200]}; `}
    ${props => props.bgPurple300 && css` background-color: ${purple[300]}; `}
    ${props => props.bgPurple400 && css` background-color: ${purple[400]}; `}
    ${props => props.bgPurple500 && css` background-color: ${purple[500]}; `}
    ${props => props.bgPurple600 && css` background-color: ${purple[600]}; `}
    ${props => props.bgPurple700 && css` background-color: ${purple[700]}; `}
    ${props => props.bgPurple800 && css` background-color: ${purple[800]}; `}
    ${props => props.bgPurple900 && css` background-color: ${purple[900]}; `}
    ${props => props.bgPurpleA100 && css` background-color: ${purple.a100}; `}
    ${props => props.bgPurpleA200 && css` background-color: ${purple.a200}; `}
    ${props => props.bgPurpleA400 && css` background-color: ${purple.a400}; `}
    ${props => props.bgPurpleA700 && css` background-color: ${purple.a700}; `}

    /* Depp Purple */
    ${props => props.bgDeepPurple50 && css` background-color: ${deepPurple[50]}; `}
    ${props => props.bgDeepPurple100 && css` background-color: ${deepPurple[100]}; `}
    ${props => props.bgDeepPurple200 && css` background-color: ${deepPurple[200]}; `}
    ${props => props.bgDeepPurple300 && css` background-color: ${deepPurple[300]}; `}
    ${props => props.bgDeepPurple400 && css` background-color: ${deepPurple[400]}; `}
    ${props => props.bgDeepPurple500 && css` background-color: ${deepPurple[500]}; `}
    ${props => props.bgDeepPurple600 && css` background-color: ${deepPurple[600]}; `}
    ${props => props.bgDeepPurple700 && css` background-color: ${deepPurple[700]}; `}
    ${props => props.bgDeepPurple800 && css` background-color: ${deepPurple[800]}; `}
    ${props => props.bgDeepPurple900 && css` background-color: ${deepPurple[900]}; `}
    ${props => props.bgDeepPurpleA100 && css` background-color: ${deepPurple.a100}; `}
    ${props => props.bgDeepPurpleA200 && css` background-color: ${deepPurple.a200}; `}
    ${props => props.bgDeepPurpleA400 && css` background-color: ${deepPurple.a400}; `}
    ${props => props.bgDeepPurpleA700 && css` background-color: ${deepPurple.a700}; `}

    /* Indigo */
    ${props => props.bgIndigo50 && css` background-color: ${indigo[50]}; `}
    ${props => props.bgIndigo100 && css` background-color: ${indigo[100]}; `}
    ${props => props.bgIndigo200 && css` background-color: ${indigo[200]}; `}
    ${props => props.bgIndigo300 && css` background-color: ${indigo[300]}; `}
    ${props => props.bgIndigo400 && css` background-color: ${indigo[400]}; `}
    ${props => props.bgIndigo500 && css` background-color: ${indigo[500]}; `}
    ${props => props.bgIndigo600 && css` background-color: ${indigo[600]}; `}
    ${props => props.bgIndigo700 && css` background-color: ${indigo[700]}; `}
    ${props => props.bgIndigo800 && css` background-color: ${indigo[800]}; `}
    ${props => props.bgIndigo900 && css` background-color: ${indigo[900]}; `}
    ${props => props.bgIndigoA100 && css` background-color: ${indigo.a100}; `}
    ${props => props.bgIndigoA200 && css` background-color: ${indigo.a200}; `}
    ${props => props.bgIndigoA400 && css` background-color: ${indigo.a400}; `}
    ${props => props.bgIndigoA700 && css` background-color: ${indigo.a700}; `}

    /* Blue */
    ${props => props.bgBlue50 && css` background-color: ${blue[50]}; `}
    ${props => props.bgBlue100 && css` background-color: ${blue[100]}; `}
    ${props => props.bgBlue200 && css` background-color: ${blue[200]}; `}
    ${props => props.bgBlue300 && css` background-color: ${blue[300]}; `}
    ${props => props.bgBlue400 && css` background-color: ${blue[400]}; `}
    ${props => props.bgBlue500 && css` background-color: ${blue[500]}; `}
    ${props => props.bgBlue600 && css` background-color: ${blue[600]}; `}
    ${props => props.bgBlue700 && css` background-color: ${blue[700]}; `}
    ${props => props.bgBlue800 && css` background-color: ${blue[800]}; `}
    ${props => props.bgBlue900 && css` background-color: ${blue[900]}; `}
    ${props => props.bgBlueA100 && css` background-color: ${blue.a100}; `}
    ${props => props.bgBlueA200 && css` background-color: ${blue.a200}; `}
    ${props => props.bgBlueA400 && css` background-color: ${blue.a400}; `}
    ${props => props.bgBlueA700 && css` background-color: ${blue.a700}; `}

    /* Light Blue */
    ${props => props.bgLightBlue50 && css` background-color: ${lightBlue[50]}; `}
    ${props => props.bgLightBlue100 && css` background-color: ${lightBlue[100]}; `}
    ${props => props.bgLightBlue200 && css` background-color: ${lightBlue[200]}; `}
    ${props => props.bgLightBlue300 && css` background-color: ${lightBlue[300]}; `}
    ${props => props.bgLightBlue400 && css` background-color: ${lightBlue[400]}; `}
    ${props => props.bgLightBlue500 && css` background-color: ${lightBlue[500]}; `}
    ${props => props.bgLightBlue600 && css` background-color: ${lightBlue[600]}; `}
    ${props => props.bgLightBlue700 && css` background-color: ${lightBlue[700]}; `}
    ${props => props.bgLightBlue800 && css` background-color: ${lightBlue[800]}; `}
    ${props => props.bgLightBlue900 && css` background-color: ${lightBlue[900]}; `}
    ${props => props.bgLightBlueA100 && css` background-color: ${lightBlue.a100}; `}
    ${props => props.bgLightBlueA200 && css` background-color: ${lightBlue.a200}; `}
    ${props => props.bgLightBlueA400 && css` background-color: ${lightBlue.a400}; `}
    ${props => props.bgLightBlueA700 && css` background-color: ${lightBlue.a700}; `}

    /* Cyan */
    ${props => props.bgCyan50 && css` background-color: ${cyan[50]}; `}
    ${props => props.bgCyan100 && css` background-color: ${cyan[100]}; `}
    ${props => props.bgCyan200 && css` background-color: ${cyan[200]}; `}
    ${props => props.bgCyan300 && css` background-color: ${cyan[300]}; `}
    ${props => props.bgCyan400 && css` background-color: ${cyan[400]}; `}
    ${props => props.bgCyan500 && css` background-color: ${cyan[500]}; `}
    ${props => props.bgCyan600 && css` background-color: ${cyan[600]}; `}
    ${props => props.bgCyan700 && css` background-color: ${cyan[700]}; `}
    ${props => props.bgCyan800 && css` background-color: ${cyan[800]}; `}
    ${props => props.bgCyan900 && css` background-color: ${cyan[900]}; `}
    ${props => props.bgCyanA100 && css` background-color: ${cyan.a100}; `}
    ${props => props.bgCyanA200 && css` background-color: ${cyan.a200}; `}
    ${props => props.bgCyanA400 && css` background-color: ${cyan.a400}; `}
    ${props => props.bgCyanA700 && css` background-color: ${cyan.a700}; `}

    /* Teal */
    ${props => props.bgTeal50 && css` background-color: ${teal[50]}; `}
    ${props => props.bgTeal100 && css` background-color: ${teal[100]}; `}
    ${props => props.bgTeal200 && css` background-color: ${teal[200]}; `}
    ${props => props.bgTeal300 && css` background-color: ${teal[300]}; `}
    ${props => props.bgTeal400 && css` background-color: ${teal[400]}; `}
    ${props => props.bgTeal500 && css` background-color: ${teal[500]}; `}
    ${props => props.bgTeal600 && css` background-color: ${teal[600]}; `}
    ${props => props.bgTeal700 && css` background-color: ${teal[700]}; `}
    ${props => props.bgTeal800 && css` background-color: ${teal[800]}; `}
    ${props => props.bgTeal900 && css` background-color: ${teal[900]}; `}
    ${props => props.bgTealA100 && css` background-color: ${teal.a100}; `}
    ${props => props.bgTealA200 && css` background-color: ${teal.a200}; `}
    ${props => props.bgTealA400 && css` background-color: ${teal.a400}; `}
    ${props => props.bgTealA700 && css` background-color: ${teal.a700}; `}

    /* Green */
    ${props => props.bgGreen50 && css` background-color: ${green[50]}; `}
    ${props => props.bgGreen100 && css` background-color: ${green[100]}; `}
    ${props => props.bgGreen200 && css` background-color: ${green[200]}; `}
    ${props => props.bgGreen300 && css` background-color: ${green[300]}; `}
    ${props => props.bgGreen400 && css` background-color: ${green[400]}; `}
    ${props => props.bgGreen500 && css` background-color: ${green[500]}; `}
    ${props => props.bgGreen600 && css` background-color: ${green[600]}; `}
    ${props => props.bgGreen700 && css` background-color: ${green[700]}; `}
    ${props => props.bgGreen800 && css` background-color: ${green[800]}; `}
    ${props => props.bgGreen900 && css` background-color: ${green[900]}; `}
    ${props => props.bgGreenA100 && css` background-color: ${green.a100}; `}
    ${props => props.bgGreenA200 && css` background-color: ${green.a200}; `}
    ${props => props.bgGreenA400 && css` background-color: ${green.a400}; `}
    ${props => props.bgGreenA700 && css` background-color: ${green.a700}; `}

    /* Light Green */
    ${props => props.bgLightGreen50 && css` background-color: ${lightGreen[50]}; `}
    ${props => props.bgLightGreen100 && css` background-color: ${lightGreen[100]}; `}
    ${props => props.bgLightGreen200 && css` background-color: ${lightGreen[200]}; `}
    ${props => props.bgLightGreen300 && css` background-color: ${lightGreen[300]}; `}
    ${props => props.bgLightGreen400 && css` background-color: ${lightGreen[400]}; `}
    ${props => props.bgLightGreen500 && css` background-color: ${lightGreen[500]}; `}
    ${props => props.bgLightGreen600 && css` background-color: ${lightGreen[600]}; `}
    ${props => props.bgLightGreen700 && css` background-color: ${lightGreen[700]}; `}
    ${props => props.bgLightGreen800 && css` background-color: ${lightGreen[800]}; `}
    ${props => props.bgLightGreen900 && css` background-color: ${lightGreen[900]}; `}
    ${props => props.bgLightGreenA100 && css` background-color: ${lightGreen.a100}; `}
    ${props => props.bgLightGreenA200 && css` background-color: ${lightGreen.a200}; `}
    ${props => props.bgLightGreenA400 && css` background-color: ${lightGreen.a400}; `}
    ${props => props.bgLightGreenA700 && css` background-color: ${lightGreen.a700}; `}

    /* Lime */
    ${props => props.bgLime50 && css` background-color: ${lime[50]}; `}
    ${props => props.bgLime100 && css` background-color: ${lime[100]}; `}
    ${props => props.bgLime200 && css` background-color: ${lime[200]}; `}
    ${props => props.bgLime300 && css` background-color: ${lime[300]}; `}
    ${props => props.bgLime400 && css` background-color: ${lime[400]}; `}
    ${props => props.bgLime500 && css` background-color: ${lime[500]}; `}
    ${props => props.bgLime600 && css` background-color: ${lime[600]}; `}
    ${props => props.bgLime700 && css` background-color: ${lime[700]}; `}
    ${props => props.bgLime800 && css` background-color: ${lime[800]}; `}
    ${props => props.bgLime900 && css` background-color: ${lime[900]}; `}
    ${props => props.bgLimeA100 && css` background-color: ${lime.a100}; `}
    ${props => props.bgLimeA200 && css` background-color: ${lime.a200}; `}
    ${props => props.bgLimeA400 && css` background-color: ${lime.a400}; `}
    ${props => props.bgLimeA700 && css` background-color: ${lime.a700}; `}

    /* Yellow */
    ${props => props.bgYellow50 && css` background-color: ${yellow[50]}; `}
    ${props => props.bgYellow100 && css` background-color: ${yellow[100]}; `}
    ${props => props.bgYellow200 && css` background-color: ${yellow[200]}; `}
    ${props => props.bgYellow300 && css` background-color: ${yellow[300]}; `}
    ${props => props.bgYellow400 && css` background-color: ${yellow[400]}; `}
    ${props => props.bgYellow500 && css` background-color: ${yellow[500]}; `}
    ${props => props.bgYellow600 && css` background-color: ${yellow[600]}; `}
    ${props => props.bgYellow700 && css` background-color: ${yellow[700]}; `}
    ${props => props.bgYellow800 && css` background-color: ${yellow[800]}; `}
    ${props => props.bgYellow900 && css` background-color: ${yellow[900]}; `}
    ${props => props.bgYellowA100 && css` background-color: ${yellow.a100}; `}
    ${props => props.bgYellowA200 && css` background-color: ${yellow.a200}; `}
    ${props => props.bgYellowA400 && css` background-color: ${yellow.a400}; `}
    ${props => props.bgYellowA700 && css` background-color: ${yellow.a700}; `}

    /* Amber */
    ${props => props.bgAmber50 && css` background-color: ${amber[50]}; `}
    ${props => props.bgAmber100 && css` background-color: ${amber[100]}; `}
    ${props => props.bgAmber200 && css` background-color: ${amber[200]}; `}
    ${props => props.bgAmber300 && css` background-color: ${amber[300]}; `}
    ${props => props.bgAmber400 && css` background-color: ${amber[400]}; `}
    ${props => props.bgAmber500 && css` background-color: ${amber[500]}; `}
    ${props => props.bgAmber600 && css` background-color: ${amber[600]}; `}
    ${props => props.bgAmber700 && css` background-color: ${amber[700]}; `}
    ${props => props.bgAmber800 && css` background-color: ${amber[800]}; `}
    ${props => props.bgAmber900 && css` background-color: ${amber[900]}; `}
    ${props => props.bgAmberA100 && css` background-color: ${amber.a100}; `}
    ${props => props.bgAmberA200 && css` background-color: ${amber.a200}; `}
    ${props => props.bgAmberA400 && css` background-color: ${amber.a400}; `}
    ${props => props.bgAmberA700 && css` background-color: ${amber.a700}; `}

    /* Orange */
    ${props => props.bgOrange50 && css` background-color: ${orange[50]}; `}
    ${props => props.bgOrange100 && css` background-color: ${orange[100]}; `}
    ${props => props.bgOrange200 && css` background-color: ${orange[200]}; `}
    ${props => props.bgOrange300 && css` background-color: ${orange[300]}; `}
    ${props => props.bgOrange400 && css` background-color: ${orange[400]}; `}
    ${props => props.bgOrange500 && css` background-color: ${orange[500]}; `}
    ${props => props.bgOrange600 && css` background-color: ${orange[600]}; `}
    ${props => props.bgOrange700 && css` background-color: ${orange[700]}; `}
    ${props => props.bgOrange800 && css` background-color: ${orange[800]}; `}
    ${props => props.bgOrange900 && css` background-color: ${orange[900]}; `}
    ${props => props.bgOrangeA100 && css` background-color: ${orange.a100}; `}
    ${props => props.bgOrangeA200 && css` background-color: ${orange.a200}; `}
    ${props => props.bgOrangeA400 && css` background-color: ${orange.a400}; `}
    ${props => props.bgOrangeA700 && css` background-color: ${orange.a700}; `}

    /* Deep Orange */
    ${props => props.bgDeepOrange50 && css` background-color: ${deepOrange[50]}; `}
    ${props => props.bgDeepOrange100 && css` background-color: ${deepOrange[100]}; `}
    ${props => props.bgDeepOrange200 && css` background-color: ${deepOrange[200]}; `}
    ${props => props.bgDeepOrange300 && css` background-color: ${deepOrange[300]}; `}
    ${props => props.bgDeepOrange400 && css` background-color: ${deepOrange[400]}; `}
    ${props => props.bgDeepOrange500 && css` background-color: ${deepOrange[500]}; `}
    ${props => props.bgDeepOrange600 && css` background-color: ${deepOrange[600]}; `}
    ${props => props.bgDeepOrange700 && css` background-color: ${deepOrange[700]}; `}
    ${props => props.bgDeepOrange800 && css` background-color: ${deepOrange[800]}; `}
    ${props => props.bgDeepOrange900 && css` background-color: ${deepOrange[900]}; `}
    ${props => props.bgDeepOrangeA100 && css` background-color: ${deepOrange.a100}; `}
    ${props => props.bgDeepOrangeA200 && css` background-color: ${deepOrange.a200}; `}
    ${props => props.bgDeepOrangeA400 && css` background-color: ${deepOrange.a400}; `}
    ${props => props.bgDeepOrangeA700 && css` background-color: ${deepOrange.a700}; `}

    /* Brown */
    ${props => props.bgBrown50 && css` background-color: ${brown[50]}; `}
    ${props => props.bgBrown100 && css` background-color: ${brown[100]}; `}
    ${props => props.bgBrown200 && css` background-color: ${brown[200]}; `}
    ${props => props.bgBrown300 && css` background-color: ${brown[300]}; `}
    ${props => props.bgBrown400 && css` background-color: ${brown[400]}; `}
    ${props => props.bgBrown500 && css` background-color: ${brown[500]}; `}
    ${props => props.bgBrown600 && css` background-color: ${brown[600]}; `}
    ${props => props.bgBrown700 && css` background-color: ${brown[700]}; `}
    ${props => props.bgBrown800 && css` background-color: ${brown[800]}; `}
    ${props => props.bgBrown900 && css` background-color: ${brown[900]}; `}
    ${props => props.bgBrownA100 && css` background-color: ${brown.a100}; `}
    ${props => props.bgBrownA200 && css` background-color: ${brown.a200}; `}
    ${props => props.bgBrownA400 && css` background-color: ${brown.a400}; `}
    ${props => props.bgBrownA700 && css` background-color: ${brown.a700}; `}

    /* Gray */
    ${props => props.bgGray50 && css` background-color: ${gray[50]}; `}
    ${props => props.bgGray100 && css` background-color: ${gray[100]}; `}
    ${props => props.bgGray200 && css` background-color: ${gray[200]}; `}
    ${props => props.bgGray300 && css` background-color: ${gray[300]}; `}
    ${props => props.bgGray400 && css` background-color: ${gray[400]}; `}
    ${props => props.bgGray500 && css` background-color: ${gray[500]}; `}
    ${props => props.bgGray600 && css` background-color: ${gray[600]}; `}
    ${props => props.bgGray700 && css` background-color: ${gray[700]}; `}
    ${props => props.bgGray800 && css` background-color: ${gray[800]}; `}
    ${props => props.bgGray900 && css` background-color: ${gray[900]}; `}
    ${props => props.bgGrayA100 && css` background-color: ${gray.a100}; `}
    ${props => props.bgGrayA200 && css` background-color: ${gray.a200}; `}
    ${props => props.bgGrayA400 && css` background-color: ${gray.a400}; `}
    ${props => props.bgGrayA700 && css` background-color: ${gray.a700}; `}

    /* Blue Gray */
    ${props => props.bgBlueGray50 && css` background-color: ${blueGray[50]}; `}
    ${props => props.bgBlueGray100 && css` background-color: ${blueGray[100]}; `}
    ${props => props.bgBlueGray200 && css` background-color: ${blueGray[200]}; `}
    ${props => props.bgBlueGray300 && css` background-color: ${blueGray[300]}; `}
    ${props => props.bgBlueGray400 && css` background-color: ${blueGray[400]}; `}
    ${props => props.bgBlueGray500 && css` background-color: ${blueGray[500]}; `}
    ${props => props.bgBlueGray600 && css` background-color: ${blueGray[600]}; `}
    ${props => props.bgBlueGray700 && css` background-color: ${blueGray[700]}; `}
    ${props => props.bgBlueGray800 && css` background-color: ${blueGray[800]}; `}
    ${props => props.bgBlueGray900 && css` background-color: ${blueGray[900]}; `}
    ${props => props.bgBlueGrayA100 && css` background-color: ${blueGray.a100}; `}
    ${props => props.bgBlueGrayA200 && css` background-color: ${blueGray.a200}; `}
    ${props => props.bgBlueGrayA400 && css` background-color: ${blueGray.a400}; `}
    ${props => props.bgBlueGrayA700 && css` background-color: ${blueGray.a700}; `}
    
    /* ============================== COLORS ================================= */

`

export default colorsBG
