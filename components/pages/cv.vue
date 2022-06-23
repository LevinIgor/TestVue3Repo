    <template>
      <my-header />
      <div class="cv">
        <my-toggle @switchMode="(m) => (mode = m)" :mode="mode" />
      </div>
    </template>

    <script setup>
    import { ref, watch } from "vue";
    import myHeader from "@/components/header.vue";
    import { useStore } from 'vuex'

    let mode = ref("light");

    watch(mode, (m) => {
      console.log(m);
    });

    let store = useStore();

    console.log(store.state);
    </script>

    <style scoped>
    .cv {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1500px;
      height: 900px;
      background-color: rgb(152, 152, 152);
    }
    </style>
