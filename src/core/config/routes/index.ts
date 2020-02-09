import * as pagesMain from '../../../pages'
import * as pages from '../../../pages/main/subpages'
import * as PagesClaim from '../../../pages/main/subpages/claim/subpages'

const routes: any = [
  
  // main
  {
    path: '/main',
    component: pagesMain.main,
    key: 'main',
    secure: true,

    // main -> routes
    routes: [
      {
        exact: true,
        path: '/main/dashboard',
        component: pages.dashboard
      },
      {
        exact: true,
        path: '/main/claim/:id/:id',
        component: pages.claim,
        routes: [
          {
            exact: true,
            path: '/main/claim/create',
            component: PagesClaim.create
          },
          {
            exact: true,
            path: '/main/claim/damage/:id',
            component: PagesClaim.damage
          },
          {
            exact: true,
            path: '/main/claim/checklist/:id',
            component: PagesClaim.checklist
          },
          {
            exact: true,
            path: '/main/claim/report/:id',
            component: PagesClaim.report
          },
        ]
      },
    ]
  }
]

export default routes
