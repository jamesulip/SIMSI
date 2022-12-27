<template>
  <div>
    <!-- create quasar toolbar -->
    <q-toolbar>
      <!-- toolbar for bold -->
      <q-btn icon="format_bold" @click="editor.chain().focus().toggleBold().run()" />
    </q-toolbar>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
const emit = defineEmits(["update:modelValue"]);
const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const editor = useEditor({
  content: modelValue,
  extensions: [StarterKit],
  onUpdate: ({ editor }) => {
    emit("update:modelValue", editor.getHTML());
  },
});
</script>
