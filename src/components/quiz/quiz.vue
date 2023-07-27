<template>
  <div>
    <select v-model="$i18n.locale">
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
  </div>
</template>



<script lang="ts" src="./quiz"></script>