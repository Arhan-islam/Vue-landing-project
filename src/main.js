import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faEnvelopeOpen, faMapLocation, faPhone, faPhoneVolume, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faFacebookF,faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF,faFacebook,faLinkedin,faTwitterSquare)

/* add icons to the library */
library.add(faUserSecret, faMapLocation, faPhone,faEnvelopeOpen, faPhoneVolume, faEnvelope,)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
