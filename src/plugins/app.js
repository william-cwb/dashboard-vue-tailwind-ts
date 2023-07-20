import AppDialog from "../components/dialog.vue";
export default {
  install: (app, options) => {
    app.component("app-dialog", AppDialog);
  },
};
