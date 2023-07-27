/*eslint-disable*/
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module "*.vue" {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
