<template>
  <div class="ctn">
    <select v-model="$i18n.locale" class="ctn-selector">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
    <el-descriptions :column="1" title="Hello World">
      <el-descriptions-item>
        <p>{{ $t('QUESTION_TEXT') }}</p>
        </el-descriptions-item>
      <el-descriptions-item>
        <p>{{ $t('REQUIRE_TEXT') }}</p>
      </el-descriptions-item>
    </el-descriptions>
    <PCodeBlock
      :code="code"
      title="template"
      toc="language-typescript"
      ></PCodeBlock>
    <textarea></textarea>
  </div>
</template>



<script lang="ts" src="./quiz13-HelloWorld"></script>

<style scoped lang="scss">
.ctn {
  position: relative;
  height: 100%;
  width: 100%;
  &-selector {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }
  & textarea {
    height: 300px;
    padding: 1.5em;
  }
}
</style>