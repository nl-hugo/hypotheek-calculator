if (module.hot) {
  module.hot.accept();
}

// import "font-awesome/scss/font-awesome.scss";
import "../styles/style.scss";
import "../images/";
import "../data/";
import dashboard from "./dashboard";

dashboard();

// $( "#stickychart" ).fixedsticky();


/*const routes = {
  dashboard: () => {
    System.import("./dashboard").then((dashboard) => {
      dashboard.draw();
    }).catch((err) => {
      console.log("Chunk loading failed " + err);
    });
  }
};

// demo async loading with a timeout
setTimeout(routes.dashboard, 1000);*/