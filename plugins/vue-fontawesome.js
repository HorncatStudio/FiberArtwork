import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook
} from '@fortawesome/free-brands-svg-icons'
import {
  faLink,
  faCaretUp,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter,
  faInstagram,
  faLinkedin,
  faFacebook,
  faLink,
  faCaretUp,
  faCaretDown
)
Vue.use(FontAwesomeIcon)
