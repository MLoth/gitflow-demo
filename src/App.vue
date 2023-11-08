<template>
  <main class="min-h-screen flex flex-col">
    <div class="max-w-screen-md mx-auto p-9">
      <h1 class="text-4xl font-bold mb-1">Gitflow in actie</h1>
      <p class="font-mono mb-8">
        {{ version }}
      </p>
      <div class="text-lg mb-12 max-w-lg">
        <p>
          Gitflow is een branching model. Het is een manier om je repository te
          organiseren in een software team.
        </p>
        <p>
          Deze minisite is automatisch gedeployed vanaf de
          <span class="font-mono">main</span> branch.
        </p>
      </div>

      <div
        class="rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 p-[3px] -mx-6"
      >
        <div
          class="flex gap-3 flex-col text-white px-6 py-6 text-lg bg-neutral-700 rounded-xl @dark:bg-black"
        >
          <h2 class="text-2xl font-semibold tracking-wide">
            Tooling: Gitkraken
          </h2>
          <p>
            We gebruiken momenteel Gitkraken als tool om Gitflow branching te
            doen.
          </p>

          <div class="flex items-center gap-3">
            <a
              class="flex items-center gap-2 bg-white rounded-md text-center py-1 px-3 text-neutral-800 hover:bg-black hover:text-neutral-100 text-sm"
              href="https://www.gitkraken.com/"
            >
              <GitGraph class="h-4" /> Gitkraken
              <ExternalLink class="opacity-50 h-3" />
            </a>
            <a
              class="flex items-center gap-2 bg-white rounded-md text-center py-1 px-3 text-neutral-800 hover:bg-black hover:text-neutral-100 text-sm"
              href="https://education.github.com/"
            >
              <Github class="h-4" /> GitHub ecudation
              <ExternalLink class="opacity-50 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div class="text-lg mt-12 max-w-lg">
        <p>
          Gitflow is een branching model. Het is een manier om je repository te
          organiseren in een software team.
        </p>
        <p>
          Deze minisite is automatisch gedeployed vanaf de
          <span class="font-mono">main</span> branch.
        </p>
      </div>
    </div>

    <footer class="mt-auto max-w-screen-md mx-auto p-9 w-full">
      <p class="text-sm">&copy; MCT {{ new Date().getFullYear() }}</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { Github, GitGraph } from 'lucide-vue-next'
import { version } from '../package.json'
import { ExternalLink } from 'lucide-vue-next'
</script>
