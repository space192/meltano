import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faArrowsAltV,
  faBell,
  faBolt,
  faBookOpen,
  faCalendar,
  faCaretDown,
  faCaretUp,
  faCertificate,
  faChartArea,
  faChartBar,
  faChartLine,
  faChartPie,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faCog,
  faCompass,
  faDatabase,
  faDotCircle,
  faDraftingCompass,
  faEdit,
  faEnvelope,
  faExclamationTriangle,
  faExternalLinkSquareAlt,
  faEye,
  faFileAlt,
  faFileUpload,
  faFileDownload,
  faFilter,
  faGift,
  faGlobeAmericas,
  faHashtag,
  faHistory,
  faInfoCircle,
  faLock,
  faPlus,
  faProjectDiagram,
  faQuestionCircle,
  faRedo,
  faRocket,
  faSignInAlt,
  faSignOutAlt,
  faSync,
  faSearch,
  faSort,
  faSortAmountDown,
  faSortAmountUp,
  faStream,
  faTable,
  faThLarge,
  faThList,
  faTrashAlt,
  faUser,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome'

export default {
  install(Vue) {
    library.add(faAngleDown)
    library.add(faAngleUp)
    library.add(faArrowsAltV)
    library.add(faArrowDown)
    library.add(faArrowRight)
    library.add(faArrowUp)
    library.add(faBell)
    library.add(faBolt)
    library.add(faBookOpen)
    library.add(faCalendar)
    library.add(faCaretDown)
    library.add(faCaretUp)
    library.add(faCertificate)
    library.add(faChartArea)
    library.add(faChartBar)
    library.add(faChartLine)
    library.add(faChartPie)
    library.add(faCheck)
    library.add(faCheckCircle)
    library.add(faChevronDown)
    library.add(faChevronUp)
    library.add(faCog)
    library.add(faCompass)
    library.add(faDatabase)
    library.add(faDotCircle)
    library.add(faDraftingCompass)
    library.add(faEdit)
    library.add(faEnvelope)
    library.add(faExclamationTriangle)
    library.add(faExternalLinkSquareAlt)
    library.add(faEye)
    library.add(faFileAlt)
    library.add(faFileUpload)
    library.add(faFileDownload)
    library.add(faFilter)
    library.add(faGift)
    library.add(faGlobeAmericas)
    library.add(faHashtag)
    library.add(faHistory)
    library.add(faInfoCircle)
    library.add(faLock)
    library.add(faPlus)
    library.add(faProjectDiagram)
    library.add(faQuestionCircle)
    library.add(faRedo)
    library.add(faRocket)
    library.add(faSync)
    library.add(faSearch)
    library.add(faSignInAlt)
    library.add(faSignOutAlt)
    library.add(faSort)
    library.add(faSortAmountDown)
    library.add(faSortAmountUp)
    library.add(faStream)
    library.add(faTable)
    library.add(faThLarge)
    library.add(faThList)
    library.add(faTrashAlt)
    library.add(faUser)
    library.add(faWrench)

    Vue.component('FontAwesomeIcon', FontAwesomeIcon)
    Vue.component('FontAwesomeLayers', FontAwesomeLayers)
    Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
  },
}
