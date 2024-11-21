// import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import Modal from 'bootstrap/js/dist/modal';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// export default defineNuxtPlugin((nuxtApp) => {
//   //   nuxtApp.provide('bootstrap', bootstrap);
//   //   nuxtApp.provide('Modal', Modal);
// });

// plugins/bootstrap.js
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      modal: Modal,
    },
  };
});
