<script lang="ts">
  import type { QualityApp } from "$lib/data/qualityOfLife";
  import type { EssentialApp } from "$lib/data/essentials";
  import type { AiTool } from "$lib/data/aiTools";
  import type { VisualTool } from "$lib/data/visuals";
  import type { ProjectPick } from "$lib/data/projects";

  type App = QualityApp | EssentialApp | AiTool | VisualTool | ProjectPick;
  export let app: App;

  function handleImageError(event: Event) {
    const img = event.currentTarget as HTMLImageElement;
    if (img) {
      img.style.display = "none";
    }
  }

  function handleClick(event: MouseEvent) {
    // If this card represents a downloadable file
    if (app.file) {
      event.preventDefault(); // stop normal <a> navigation

      const a = document.createElement("a");
      a.href = app.file;
      a.download = app.file.split("/").pop(); // filename
      a.click();
    }
  }
</script>

<a
  class="surface card-hover block rounded-xl border border-black/5 p-5 shadow-soft hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-primary"
  href={app.file ? app.file : app.link}
  on:click={handleClick}
  target="_blank"
  rel="noreferrer"
>
  <div class="flex items-start justify-between gap-3">
    <div class="flex items-start gap-3 flex-1 min-w-0">
      {#if app.icon}
        <img
          src={app.icon}
          alt=""
          class="mt-1 h-6 w-6 flex-shrink-0 rounded object-contain"
          on:error={handleImageError}
        />
      {/if}
      <div class="min-w-0 flex-1">
        <h2 class="text-xl font-extrabold text-ink">{app.title}</h2>
        <p class="mt-2 text-sm text-ink/70">{app.description}</p>
      </div>
    </div>

    <!-- Icon changes depending on type -->
    <span aria-hidden="true" class="text-2xl text-purple-primary flex-shrink-0">
      {#if app.file}
        ⬇️
      {:else}
        ↗
      {/if}
    </span>
  </div>

  {#if app.tags?.length}
    <div class="mt-4 flex flex-wrap gap-2">
      {#each app.tags as tag}
        <span
          class="rounded-full bg-purple-primary/15 px-3 py-1 text-xs font-semibold text-purple-primary"
        >
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</a>
