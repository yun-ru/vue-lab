import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './containers/app.vue';
import Foo from './components/foo.vue';
import Bar from './components/bar.vue';
import Base from './containers/base/index.vue';
import Emit from './containers/base/emit.vue';
import Resource from './containers/base/resource.vue';
import Router from './containers/base/router.vue';


Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

router.map({
    'base': {
        component: Base,
        subRoutes: {
            '/': {
                component: {
                    template: '<p>Default sub view for Foo</p>'
                }
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
                    '/bar': {
                        name: 'bar',
                        component: Bar
                    },
                    '/foo/:username': {
                        name: 'foo',
                        component: Foo
                    }
                }
            }
        }
    }
})

router.start(App, 'body');