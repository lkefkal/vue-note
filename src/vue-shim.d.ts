/*eslint-disable*/
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<any>;
  }
}

declare module '@vue/runtime-core' {
  interface State {
    count: number;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}