<template>
  <main class="min-h-screen flex flex-col">
    <div class="max-w-screen-md mx-auto p-9">
      <h1 class="flex items-center gap-1 text-4xl font-bold mb-1">
        <GitBranch />
        Gitflow in actie
      </h1>
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
              <Github class="h-4" /> GitHub education
              <ExternalLink class="opacity-50 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div class="text-lg mt-12 max-w-lg">
        <p class="mb-3">
          Gitflow is een model voor het beheren van versiecontrole met Git. Het
          is bedacht door Vincent Driessen en helpt teams om samen te werken,
          software-ontwikkeling te beheren en een gestructureerde aanpak te
          volgen. Hier is een eenvoudige uitleg:
        </p>

        <ol class="list-decimal list-inside mb-6">
          <li>
            <span class="font-bold">Master Branch</span>: Dit is de
            belangrijkste tak van je code. Hierin staat de meest stabiele versie
            die in productie is.
          </li>
          <li>
            <span class="font-bold">Develop Branch</span>: Dit is waar je aan
            nieuwe functies werkt. Het bevat de laatste ontwikkelingen en is de
            basis voor nieuwe features.
          </li>

          <li>
            <span class="font-bold">Feature Branches</span>: Telkens wanneer je
            aan een nieuwe functie begint, maak je een speciale tak. Als de
            functie klaar is, voeg je deze weer samen met de develop branch.
          </li>

          <li>
            <span class="font-bold">Release Branches</span>: Als je klaar bent
            om een nieuwe versie uit te brengen, maak je een release-tak. Hier
            kun je bugs oplossen en testen voordat je de nieuwe versie lanceert.
          </li>

          <li>
            <span class="font-bold">Hotfix Branches</span>: Soms zijn er
            dringende problemen in de productiecode. Dan maak je een hotfix-tak
            om snel de fouten te corrigeren. Deze worden daarna toegevoegd aan
            zowel de master- als de develop-tak.
          </li>
        </ol>

        <p class="mb-6">
          Gitflow geeft duidelijke regels over wanneer en hoe je deze takken
          maakt, samenvoegt en verwijdert. Het helpt teams om georganiseerd te
          blijven, meerdere dingen tegelijkertijd te ontwikkelen en ervoor te
          zorgen dat de productiecode stabiel blijft. Het kan vooral handig zijn
          in grotere teams en complexe projecten. Let wel op dat er andere
          Git-werkstromen zijn, en je moet kiezen wat het beste bij jouw team en
          project past.
        </p>
      </div>
    </div>

    <footer class="mt-auto max-w-screen-md mx-auto p-9 w-full">
      <p class="text-sm">&copy; MCT {{ new Date().getFullYear() }}</p>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { Github, GitGraph, ExternalLink, GitBranch } from 'lucide-vue-next'
import { version } from '../package.json'
</script>
