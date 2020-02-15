export default {
  items: [
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: "icon-speedometer"
    //   // badge: {
    //   //   variant: 'info',
    //   //   text: 'NEW',
    //   // },
    // },
    {
      title: true,
      name: "Main",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Home",
      url: "/home",
      icon: "fa fa-home"
    },
    {
      name: "Categories",
      url: "/categories",
      icon: "fa fa-address-book"
    },
    {
      name: "List of Books",
      url: "/books/-1",
      icon: "fa fa-book"
    },
    {
      title: true,
      name: "Manage Records",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Books",
      url: "/bookmanager/-1",
      icon: "fa fa-book"
    }
  ]
};
