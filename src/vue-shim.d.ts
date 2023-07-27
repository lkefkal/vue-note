/*eslint-disable*/
import { ComponentCustomProperties } from 'vue';
import { Vue } from 'vue-class-component';

declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number,
    isRouting: boolean,
    pageCache: Map<string, boolean>,
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
    $t: any
  }
}