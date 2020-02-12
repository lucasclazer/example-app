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
      icon: "icon-pencil"
    },
    {
      name: "Categories",
      url: "/categories",
      icon: "icon-pencil"
    },
    {
      name: "Books",
      url: "/books/-1",
      icon: "icon-drop"
    },
    {
      title: true,
      name: "New Records",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Register Book",
      url: "/book/register",
      icon: "icon-drop"
    }
  ]
};
