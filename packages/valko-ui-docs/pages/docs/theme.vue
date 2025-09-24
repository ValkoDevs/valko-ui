<script setup lang="ts">
import type { Tab } from '#valkoui'

const tabs: Tab[] = [
  { key: 'light', title: 'Light Mode' },
  { key: 'dark', title: 'Dark Mode' }
]

const themeLight = `@theme {
  /* Background colors */
  --color-surface-dim: #d9d9e0;
  --color-surface: #f9f9ff;
  --color-surface-bright: #f9f9ff;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3fa;
  --color-surface-container: #ededf4;
  --color-surface-container-high: #e7e8ee;
  --color-surface-container-highest: #e2e2e9;
  --color-on-surface: #191c20;
  --color-on-surface-variant: #44474e;
  --color-outlined: #74777f;
  --color-outlined-variant: #c4c6d0;
  --color-inverse-surface: #352e33;
  --color-inverse-on-surface: #faedf4;

  /* State colors */
  --color-state-hover: rgba(0, 0, 0, .08);
  --color-state-focus: rgba(0, 0, 0, .1);
  --color-state-active: rgba(0, 0, 0, .1);
  --color-state-scrim: rgba(0, 0, 0, .32);
  --color-state-shadow: rgba(0, 0, 0, .32);
  --color-state-drag: rgba(0, 0, 0, .16);

  /* Semantic colors */
  --color-primary: #7e4d7c;
  --color-on-primary: #ffffff;
  --color-primary-container: #ffd6f8;
  --color-on-primary-container: #643663;
  --color-primary-gradient-start: #996696;
  --color-primary-gradient-end: #572b57;

  --color-secondary: #68548d;
  --color-on-secondary: #ffffff;
  --color-secondary-container: #ebdcff;
  --color-on-secondary-container: #503c74;
  --color-secondary-gradient-start: #826da8;
  --color-secondary-gradient-end: #443168;

  --color-accent: #3a608f;
  --color-on-accent: #ffffff;
  --color-accent-container: #d3e4ff;
  --color-on-accent-container: #1f4876;
  --color-accent-gradient-start: #5479aa;
  --color-accent-gradient-end: #0f3d6a;

  --color-positive: #256a4b;
  --color-on-positive: #ffffff;
  --color-positive-container: #abf2ca;
  --color-on-positive-container: #005234;
  --color-positive-gradient-start: #00885a;
  --color-positive-gradient-end: #00452c;

  --color-negative: #904a4b;
  --color-on-negative: #ffffff;
  --color-negative-container: #ffdad9;
  --color-on-negative-container: #733335;
  --color-negative-gradient-start: #ad6262;
  --color-negative-gradient-end: #65282a;

  --color-warning: #8b4f24;
  --color-on-warning: #ffffff;
  --color-warning-container: #ffdcc7;
  --color-on-warning-container: #6e390e;
  --color-warning-gradient-start: #b46120;
  --color-warning-gradient-end: #612d00;

  --color-disabled: oklch(44.6% 0.03 256.802);
  --color-on-disabled: oklch(98.5% 0.002 247.839);
  --color-disabled-container: oklch(21% 0.034 264.665);
  --color-on-disabled-container: oklch(44.6% 0.03 256.802);
  --color-disabled-gradient-start: oklch(44.6% 0.03 256.802);
  --color-disabled-gradient-end: oklch(16.6% 0.034 264.665);

  /* Shadows */
  --shadow-el0: none;
  --shadow-el1: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  --shadow-el2: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  --shadow-el3: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  --shadow-el4: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
  --shadow-el5: rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px;

  /* Animations */
  --animate-progress: progress 1.5s infinite linear;
  --animate-cicle: cicle 1s infinite linear;
  --animate-ripple: ripple 0.6s linear;
}`

const themeDark = `html.dark {
  /* Background colors */
  --color-surface-dim: #111318;
  --color-surface: #111318;
  --color-surface-bright: #37393e;
  --color-surface-container-lowest: #0c0e13;
  --color-surface-container-low: #191c20;
  --color-surface-container: #1d2024;
  --color-surface-container-high: #282a2f;
  --color-surface-container-highest: #33353a;
  --color-on-surface: #e2e2e9;
  --color-on-surface-variant: #c4c6d0;
  --color-outlined: #8e9099;
  --color-outlined-variant: #44474e;
  --color-inverse-surface: #ebdfe6;
  --color-inverse-on-surface: #352e33;

  /* State colors */
  --color-state-hover: rgba(0, 0, 0, .08);
  --color-state-focus: rgba(0, 0, 0, .1);
  --color-state-active: rgba(0, 0, 0, .1);
  --color-state-scrim: rgba(0, 0, 0, .32);
  --color-state-shadow: rgba(0, 0, 0, .32);
  --color-state-drag: rgba(0, 0, 0, .16);

  /* Semantic colors */
  --color-primary: #efb4e9;
  --color-on-primary: #4b1f4b;
  --color-primary-container: #643663;
  --color-on-primary-container: #ffd6f8;
  --color-primary-gradient-start: #ffd6f8;
  --color-primary-gradient-end: #d199cd;

  --color-secondary: #d3bbfd;
  --color-on-secondary: #39265c;
  --color-secondary-container: #503c74;
  --color-on-secondary-container: #ebdcff;
  --color-secondary-gradient-start: #ebdcff;
  --color-secondary-gradient-end: #b7a0e0;

  --color-accent: #a3c9fe;
  --color-on-accent: #00315c;
  --color-accent-container: #1f4876;
  --color-on-accent-container: #d3e4ff;
  --color-accent-gradient-start: #d3e4ff;
  --color-accent-gradient-end: #88ade1;

  --color-positive: #90d5af;
  --color-on-positive: #003823;
  --color-positive-container: #005234;
  --color-on-positive-container: #abf2ca;
  --color-positive-gradient-start: #82f9be;
  --color-positive-gradient-end: #45c089;

  --color-negative: #ffb3b2;
  --color-on-negative: #561d20;
  --color-negative-container: #733335;
  --color-on-negative-container: #ffdad9;
  --color-negative-gradient-start: #ffdad9;
  --color-negative-gradient-end: #ea9494;

  --color-warning: #ffb787;
  --color-on-warning: #502400;
  --color-warning-container: #6e390e;
  --color-on-warning-container: #ffdcc7;
  --color-warning-gradient-start: #ffdcc7;
  --color-warning-gradient-end: #f3944f;

  --color-disabled: oklch(44.6% 0.03 256.802);
  --color-on-disabled: oklch(98.5% 0.002 247.839);
  --color-disabled-container: oklch(21% 0.034 264.665);
  --color-on-disabled-container: oklch(44.6% 0.03 256.802);
  --color-disabled-gradient-start: oklch(44.6% 0.03 256.802);
  --color-disabled-gradient-end: oklch(16.6% 0.034 264.665);
}`

const overrideExample = `:root {
  --color-primary: #ff00aa;
  --color-surface: #f0f0f0;
}

html.dark {
  --color-primary: #ff99cc;
  --color-surface: #222233;
}`
</script>

<template>
  <div class="flex flex-col gap-6 px-4 md:px-6 lg:px-10 py-5">
    <h1 class="text-2xl font-bold">
      Theme Customization
    </h1>
    <p>
      ValkoUI uses CSS custom properties for all theme colors, backgrounds, gradients, and shadows. You can override any variable in your own CSS to match your brand or design system.
    </p>
    <h2 class="text-xl font-semibold">
      How to Override
    </h2>
    <p>
      To customize the theme, override the variables in your own CSS file. For example:
    </p>
    <code-block
      :code="overrideExample"
      language="css"
    />
    <h2 class="text-xl font-semibold">
      All Theme Variables
    </h2>
    <p>
      Below are the default variables for both light and dark mode. Copy and override as needed.
    </p>
    <vk-tabs
      :tabs
      variant="ghost"
      shape="line"
      grow
    >
      <template #light-content>
        <code-block
          :code="themeLight"
          language="css"
        />
      </template>

      <template #dark-content>
        <code-block
          :code="themeDark"
          language="css"
        />
      </template>
    </vk-tabs>
  </div>
</template>
