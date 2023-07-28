<template>
  <div class="ctn">
    <select v-model="$i18n.locale" class="ctn-selector">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
    <el-descriptions :column="1" title="Pick">
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
    <textarea style="width: 100%;height: 300px;"></textarea>
  </div>
</template>



<script lang="ts" src="./quiz4-Pick"></script>

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
}
</style>