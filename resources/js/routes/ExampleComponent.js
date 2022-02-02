import ExampleComponent from "../components/ExampleComponent";

const exampleComponent = () =>import('../components/ExampleComponent.vue');

export default [
    {
        path: '/exampleComponent',
        component: exampleComponent,
        name: 'exampleComponent',
    }
]
