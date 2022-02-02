import ExampleComponent from "../components/ExampleComponent";

const exampleComponent = () =>import('../components/ExampleComponent.vue');

export default [
    {
        path: '/ExampleComponent',
        component: exampleComponent,
        name: 'ExampleComponent',
    }
]
