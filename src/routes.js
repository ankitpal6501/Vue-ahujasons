import Main from "./components/Main.vue"
import ViewDetails from "./view/ViewDetails.vue"

export default[
    {
        path: '/',
        name: 'Main',
        component: Main
      },
      {
        path: '/:id',
        name: 'ViewDetails',
        component: ViewDetails
      }
]