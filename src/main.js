import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './containers/app.vue';
import Welcome from './containers/welcome.vue';
import Foo from './components/foo.vue';
import Bar from './components/bar.vue';
import Base from './containers/base/index.vue';
import Emit from './containers/base/emit.vue';
import Resource from './containers/base/resource.vue';
import Router from './containers/base/router.vue';
import Slot from './containers/base/slot.vue';
import DynamicChild from './containers/base/dynamicChild.vue';
import Props from './containers/base/props.vue';
import Component from './containers/base/component.vue';


import s01 from './containers/s01.vue'
import s02 from './containers/s02.vue'
import s03 from './containers/s03.vue'
import s04 from './containers/s04.vue'
import s05 from './containers/s05.vue'
import s06 from './containers/s06.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

console.log(Vue.config);
Vue.config.debug = true;

var router = new VueRouter();

router.map({
    '/': {
        name: "home",
        component: Welcome
    },
    's01': {
        name: "s01",
        component: s01
    },
    's02': {
        name: "s02",
        component: s02
    },
    's03': {
        name: "s03",
        component: s03
    },
    's04': {
        name: "s04",
        component: s04
    },
    's05': {
        name: "s05",
        component: s05
    },
    's06': {
        name: "s06",
        component: s06
    },

    'base': {
        name: 'base',
        component: Base,
        subRoutes: {
            '/': {
                component: {
                    template: '<p>Default sub view for Foo</p>'
                }
            },
            '/props': {
                name: 'props',
                component: Props
            },
            '/component': {
                name: 'component',
                component: Component
            },
            '/dynamic-child': {
                name: 'dynamicChild',
                component: DynamicChild
            },
            '/slot': {
                name: 'slot',
                component: Slot
            },
            '/emit': {
                name: 'emit',
                component: Emit
            },
            '/resource': {
                name: 'resource',
                component: Resource
            },
            '/router': {
                name: 'router',
                component: Router,
                subRoutes: {
                    '/': {
                        component: {
                            template: '<p>Default sub view for Foo</p>'
                        }
                    },
                    '/bar/:msg': {
                        name: 'bar',
                        component: Bar
                    },
                    '/foo': {
                        name: 'foo',
                        component: Foo
                    }
                }
            }
        }
    }
})

router.redirect({
  '*': '/'
});

router.beforeEach(function ({ to, next }) {
  if (to.path === '/base/router') {
      sessionStorage.setItem("isLogin",1);
      return sessionStorage.getItem("isLogin")-0 ? true : false
  } else {
    next()
  }
})
router.afterEach(function (transition) {
  console.log(transition.to);
  console.log(transition);
})

router.start(App, 'body');