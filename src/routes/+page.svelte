<script lang="ts">
  import { TextAnimate } from "$lib/components/magic-ui/text-animate";
  import TypingAnimation from "$lib/components/magic-ui/typing-animation/typing-animation.svelte";
  import { motion } from "motion-sv";
  let rotate = $state(0);

  const handleRotate = () => {
    rotate = rotate + 90;
  };
  let show = $state(false);
  let toggleShow = () => {
    show = !show;
  };
</script>

<div class="flex justify-center items-center min-h-screen">
  <div class="min-w-xl border rounded-xl min-h-90 p-5">
    <button onclick={toggleShow} class="mt-5">Toggle</button>
    {#if show}
      <div class="mt-4">
        <!-- <TypingAnimation content="Animating Text" cursorStyle="block" /> -->
        <TypingAnimation words={["Design 🎨", "Build 🔨", "Ship 🚀"]} loop />
      </div>
    {/if}
  </div>
</div>
